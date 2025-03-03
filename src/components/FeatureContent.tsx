import { Feature } from "../lib/data";
import Button from "./Button";

const FeatureContent = ({feature} : {feature: Feature | undefined}) => {
console.log("🚀 ~ FeatureContent ~ feature:", feature)

	if (!feature) {
		return null;
	}

	return (
		<div class='grid grid-cols-1 md:grid-cols-2 items-center'>
			<div class='flex flex-col gap-4 p-4 md:p-12'>
				<h2 class='text-2xl font-semibold'>
					{' '}
					{feature.header}
				</h2>
				<p class='text-sm text-neutral md:text-base pb-6'>
					{feature.description}
				</p>
				<Button>More Info</Button>
			</div>
			<div class='md:order-first p-4'>
				<div class='tab-bg-img'>
					<img
						src={feature.icon}
						alt='Illustration of bookmarking'
					/>
				</div>
			</div>
		</div>
	);
}

export default FeatureContent;