import { navigationItems } from "../lib/data";
import Button from "./Button";
import LogoBookmark from '../assets/images/logo-bookmark.svg';
import { For } from "solid-js";

const Header = () => {
	return (
			<header class='px-4 pt-7 pb-15'>
				<nav class='mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl'>
					<a href='/'>
						<img src={LogoBookmark} alt='Bookmark Logo' />
					</a>
					<ul class='items-center gap-4 sm:gap-8 hidden md:flex'>
						<For each={navigationItems}>
							{(item) => (
								<li>
									<a href={item.href} class='hover:underline'>
										{item.name}
									</a>
								</li>
							)}
						</For>

						<li>
							<Button variant='secondary'>Login</Button>
						</li>
					</ul>
				</nav>
			</header>
	)
}

export default Header;