import { createMemo, createSignal, For, Index, Show } from 'solid-js';

import Button from './components/Button';
import {
	Extension,
	Feature as FeatureType,
	Features,
	TabName,
} from './lib/data';
import Footer from './components/Footer';

import IllustrationHero from './assets/images/illustration-hero.svg';
import LogoChrome from './assets/images/logo-chrome.svg';
import LogoFirefox from './assets/images/logo-firefox.svg';
import LogoOpera from './assets/images/logo-opera.svg';
import Dots from './assets/images/bg-dots.svg';
import Header from './components/Header';
import Feature from './components/Feature';

const extensionsList: Extension[] = [
	{
		logo: LogoChrome,
		name: 'Add to Chrome',
		version: 'Minimum version 62',
	},
	{
		logo: LogoFirefox,
		name: 'Add to Firefox',
		version: 'Minimum version 55',
	},
	{
		logo: LogoOpera,
		name: 'Add to Opera',
		version: 'Minimum version 46',
	},
];

function App() {
	/* 	const [count, setCount] = createSignal(0); */
	const [activeTab, setActiveTab] = createSignal<TabName>('simple');

	const memoedFeatures = createMemo<(FeatureType & { active: boolean })[]>(
		() => {
			return Features.map((feature) => {
				return { ...feature, active: feature.tab === activeTab() };
			});
		}
	);

	const activeTabFeature = createMemo<(FeatureType & { active: boolean } | undefined)>(
		() => {
			return Features.map((feature) => {
				return { ...feature, active: feature.tab === activeTab() };
			}).find((feature) => feature.active);
		}
	);

	return (
		<>
			<Header />
			<main class='relative'>
				<section>
					<div class='grid grid-cols-1 md:grid-cols-2 items-center px-2 sm:px-4'>
						<div class='flex flex-col justify-center md:justify-start gap-4 p-2 md:p-12'>
							<div class='text-center md:text-left'>
								<h1 class='text-2xl md:text-3xl font-semibold pb-6'>
									A Simple Bookmark Manager
								</h1>
								<p class='text-sm text-neutral md:text-base pb-6'>
									A clean and simple interface to organize
									your favourite websites. Open a new browser
									tab and see your sites load instantly. Try
									it for free.
								</p>
							</div>
							<div class='flex gap-4'>
								<Button>Get it on Chrome</Button>
								<Button variant='default'>
									Get it on Firefox
								</Button>
							</div>
						</div>
						<div>
							<div class='bg-illustration'>
								<img
									src={IllustrationHero}
									alt='Herro illustration of bookmark application'
								/>
							</div>
						</div>
					</div>
				</section>
				<section class='mb-20'>
					<div class='px-2 sm:px-4'>
						<div class='text-center mx-auto lg:max-w-md'>
							<h2 class='text-2xl font-semibold pb-4'>
								Features
							</h2>
							<p class='text-sm text-neutral md:text-base pb-6'>
								Our aim is to make it quick and easy for you to
								access your favourite websites. Your bookmarks
								sync between your devices so you can access them
								on the go.
							</p>
						</div>
						<div class='flex flex-col md:flex-row gap-4 justify-center mb-10'>
							<For each={memoedFeatures()}>
								{(feature) => {
									return (
										<Feature
											feature={feature}
											setActiveTab={setActiveTab}
											active={feature.active}
										/>
									);
								}}
							</For>
						</div>
						<Show when={activeTabFeature()}>
							{(featureTab) => {
								const feature = featureTab();
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
								)
							}}

						</Show>
					</div>
				</section>
				<section class='text-center'>
					<div class='mx-auto lg:max-w-5xl xl:max-w-7xl py-6 px-2 sm:px-4'>
						<h2 class='text-2xl font-semibold'>
							Download the extension
						</h2>
						<div class='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 my-auto'>
							<For each={extensionsList}>
								{(extension, index) => {
									const indexValue = index();
									const extraClasses = [
										'',
										'md:my-10',
										'md:my-20',
									];

									const hasExtraClass = extraClasses[indexValue];
									const classes = 'bg-white shadow-lg rounded-xl flex flex-col items-center';

									return (
										<article
											class={
												hasExtraClass
													? `${classes} ${extraClasses[indexValue]}`
													: classes
											}
										>
											<img
												src={extension.logo}
												class='py-10'
												alt={`${extension.name} logo`}
											/>
											<h3 class='text-xl font-medium mb-2'>
												{extension.name}
											</h3>
											<p class='text-sm text-neutral md:text-base mb-5'>
												{extension.version}
											</p>
											<img src={Dots} alt='' />
											<div class='py-2 px-8 my-5'>
												<Button>
													Add & Install Extension
												</Button>
											</div>
										</article>
									);
								}}
							</For>
						</div>
					</div>
				</section>
				<section>
					<div class='mx-auto lg:max-w-5xl xl:max-w-7xl px-2 sm:px-4'>
						<div id='accordion-collapse' data-accordion='collapse'>
							<h2 id='accordion-collapse-heading-1'>
								<button
									type='button'
									class='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
									data-accordion-target='#accordion-collapse-body-1'
									aria-expanded='true'
									aria-controls='accordion-collapse-body-1'
								>
									<span>What is Flowbite?</span>
									<svg
										data-accordion-icon
										class='w-3 h-3 rotate-180 shrink-0'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 10 6'
									>
										<path
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M9 5 5 1 1 5'
										/>
									</svg>
								</button>
							</h2>
							<div
								id='accordion-collapse-body-1'
								class='hidden'
								aria-labelledby='accordion-collapse-heading-1'
							>
								<div class='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
									<p class='mb-2 text-sm text-neutral md:text-base dark:text-gray-400'>
										Flowbite is an open-source library of
										interactive components built on top of
										Tailwind CSS including buttons,
										dropdowns, modals, navbars, and more.
									</p>
									<p class='text-sm text-neutral md:text-base dark:text-gray-400'>
										Check out this guide to learn how to{' '}
										<a
											href='/docs/getting-started/introduction/'
											class='text-blue-600 dark:text-blue-500 hover:underline'
										>
											get started
										</a>{' '}
										and start developing websites even
										faster with components on top of
										Tailwind CSS.
									</p>
								</div>
							</div>
						</div>

						<Button class='px-4 py-2.5'>More Info</Button>
					</div>
				</section>
				<section class='bg-primary text-white text-center p-8'>
					<div class='mx-auto lg:max-w-lg px-2 sm:px-4 py-6'>
						<p class='text-sm uppercase tracking-widest md:pb-4'>
							35,000+ already joined
						</p>
						<h3 class='text-2xl font-semibold md:pb-4'>
							Stay up-to-date with what we’re doing
						</h3>
						<div class='flex flex-col md:flex-row gap-4 items-center justify-center'>
							<input
								class='bg-white p-2.5 text-neutral rounded-sm text-xs w-full'
								placeholder='Enter your email address'
							></input>
							<Button variant='secondary'>Contact Us</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;

/*  Features
  Pricing
  Contact
  Login

  A Simple Bookmark Manager

  A clean and simple interface to organize your favourite websites. Open a new
  browser tab and see your sites load instantly. Try it for free.

  Get it on Chrome
  Get it on Firefox

  Features

  Our aim is to make it quick and easy for you to access your favourite websites.
  Your bookmarks sync between your devices so you can access them on the go.

  Simple Bookmarking
  Speedy Searching
  Easy Sharing

  Bookmark in one click

  Organize your bookmarks however you like. Our simple drag-and-drop interface
  gives you complete control over how you manage your favourite sites.

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all.
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable
  link that you can send at the click of a button.

  More Info

  Download the extension

  We’ve got more browsers in the pipeline. Please do let us know if you’ve
  got a favourite you’d like us to prioritize.

  Add to Chrome
  Minimum version 62
  Add & Install Extension

  Add to Firefox
  Minimum version 55
  Add & Install Extension

  Add to Opera
  Minimum version 46
  Add & Install Extension

  Frequently Asked Questions

  Here are some of our FAQs. If you have any other questions you’d like
  answered please feel free to email us.

  <!-- Question 1 -->
  What is Bookmark?

  <!-- Answer 1 -->
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

  <!-- Question 2 -->
  How can I request a new browser?

  <!-- Answer 2 -->
  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.

  <!-- Question 3 -->
  Is there a mobile app?

  <!-- Answer 3 -->
  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
  sollicitudin ex et ultricies bibendum.

  <!-- Question 4 -->
  What about other Chromium browsers?

  <!-- Answer 4 -->
  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
  vitae neque eget nisl gravida pellentesque non ut velit.

  More Info

  35,000+ already joined

  Stay up-to-date with what we’re doing

  Contact Us

  Features
  Pricing
  Contact */
