import { Characteristic } from '../../enums/characteristic';
import { FeatureField } from '../../enums/feature-field';
import { FeatureLogic } from '../../logic/feature-logic';
import { HeroClass } from '../../models/class';

export const talent: HeroClass = {
	id: 'class-talent',
	name: 'Talent',
	description: 'The talent is a master of psionics, a source of incredible power created through sheer force of will. A talent can move and change matter, time, gravity, the laws of physics, or another creature’s mind. In rare occurrences, people are born with the potential to harness psionic power, but only those who experience an awakening, an event that activates a talent’s abilities, can actually tap into the mind’s strength.',
	heroicResource: 'Clarity',
	subclassName: 'Tradition',
	subclassCount: 1,
	primaryCharacteristics: [ Characteristic.Reason, Characteristic.Presence ],
	featuresByLevel: [
		{
			level: 1,
			features: [
				FeatureLogic.createBonusFeature({
					id: 'talent-stamina',
					field: FeatureField.Stamina,
					value: 18,
					valuePerLevel: 9
				}),
				FeatureLogic.createBonusFeature({
					id: 'talent-recoveries',
					field: FeatureField.Recoveries,
					value: 8
				}),
				FeatureLogic.createClassAbilityChoiceFeature({
					id: 'talent-1-6',
					cost: 0
				}),
				FeatureLogic.createClassAbilityChoiceFeature({
					id: 'talent-1-7',
					cost: 3
				}),
				FeatureLogic.createClassAbilityChoiceFeature({
					id: 'talent-1-8',
					cost: 5
				})
			]
		}
	],
	abilities: [
	],
	subclasses: [
	],
	level: 1,
	characteristics: []
};
