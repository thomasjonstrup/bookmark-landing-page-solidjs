import { Feature as FeatureType, TabName } from "../lib/data";

type FeatureProps = {
	feature: FeatureType;
	setActiveTab: (tab: TabName) => void;
	active: boolean;
}

const Feature = ({setActiveTab, feature, active}: FeatureProps) => {
	const classes = `py-4 text-neutral hover:text-secondary md:w-64 relative ${
		active ? 'border-b-2 border-secondary' : ''
	}`;

	return (
			<button
				class={classes}
				onClick={() => {
					setActiveTab(feature.tab)
				}}
			>
				{feature.name}
			</button>
	)
}

export default Feature;