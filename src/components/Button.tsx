
import {cva, type VariantProps} from 'class-variance-authority';
import { JSX, splitProps, ValidComponent } from 'solid-js';
import { cn } from '../lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
	variants: {
		variant: {
			primary: 'text-white text-xs bg-primary hover:bg-primary focus-visible:ring-very-dark-blue',
			secondary: 'text-white text-xs uppercase bg-secondary hover:bg-secondary focus-visible:ring-very-dark-blue',
			default: 'text-black text-xs bg-whitish hover:bg-gray-50 shadow-lg focus-visible:ring-very-dark-blue',
		},
		size: {
			default: 'px-6 py-3',
			sm: 'px-6 py-2.5',
			md: 'px-8 py-4',
			lg: 'px-10 py-6',
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default',
	}
})

type ButtonProps<T extends ValidComponent = 'button'> = VariantProps<typeof buttonVariants> & { class?: string | undefined; children?: JSX.Element };

const Button = <T extends ValidComponent = 'button'>(
	props: ButtonProps<T>
) => {
	const [local, others] = splitProps(props as ButtonProps, ['variant', 'size', 'class']);
	return (
		<button class={cn(buttonVariants({variant: local.variant, size: local.size}), local.class)} {...others}>{props.children}</button>
	)
}

export default Button;