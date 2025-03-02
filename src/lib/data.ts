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

export type TabName = 'simple' | 'speedy' | 'easy';

export const Features: Feature[] = [
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