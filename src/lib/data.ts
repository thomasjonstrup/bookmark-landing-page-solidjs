import IllustrationFeaturesTab1 from '../assets/images/illustration-features-tab-1.svg';
import IllustrationFeaturesTab2 from '../assets/images/illustration-features-tab-2.svg';
import IllustrationFeaturesTab3 from '../assets/images/illustration-features-tab-3.svg';

export type NavigationItem = {
  name: string;
  href: string;
};

export type Extension = {
  logo: string;
  name: string;
  version: string;
};

export type Feature = {
  icon: string;
  name: string;
  header: string;
  tab: TabName;
  description: string;
};

export type Faq = {
	question: string;
	answer: string;
};

export type TabName = 'simple' | 'speedy' | 'easy';

export const features: Feature[] = [
	{
		icon: IllustrationFeaturesTab1,
		name: 'Simple Bookmarking',
		tab: 'simple',
		header: 'Bookmark in one click',
		description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
	{
		icon: IllustrationFeaturesTab2,
		name: 'Speedy Searching',
		tab: 'speedy',
		header: 'Intelligent search',
		description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
	},
	{
		icon: IllustrationFeaturesTab3,
		name: 'Easy Sharing',
		tab: 'easy',
		header: 'Share your bookmarks',
		description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
	},
];

export const navigationItems: NavigationItem[] = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const faqList: Faq[] = [
	{
		question: 'What is Bookmark?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
	},
	{
		question: 'How can I request a new browser?',
		answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
	},
	{
		question: 'Is there a mobile app?',
		answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
	},
	{
		question: 'What about other Chromium browsers?',
		answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
	}
];