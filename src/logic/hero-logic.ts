import { Ability, AbilityDistance } from '../models/ability';
import { AbilityKeyword } from '../enums/ability-keyword';
import { AbilityDistanceType } from '../enums/ability-distance-type';

import { Feature, FeatureAbilityData, FeatureBonusData, FeatureClassAbilityData, FeatureDamageModifierData, FeatureDomainData, FeatureKitData, FeatureKitTypeData, FeatureLanguageData, FeatureSizeData, FeatureSkillChoiceData, FeatureSkillData } from '../models/feature';
import { AbilityLogic } from './ability-logic';
import { CampaignSetting } from '../models/campaign-setting';
import { CampaignSettingData } from '../data/campaign-setting-data';
import { Characteristic } from '../enums/characteristic';
import { Collections } from '../utils/collections';
import { DamageModifierType } from '../enums/damage-modifier-type';
import { Domain } from '../models/domain';
import { FeatureField } from '../enums/feature-field';
import { FeatureLogic } from './feature-logic';
import { FeatureType } from '../enums/feature-type';
import { Hero } from '../models/hero';
import { Kit } from '../models/kit';
import { KitType } from '../enums/kit';
import { Language } from '../models/language';
import { Size } from '../models/size';
import { Skill } from '../models/skill';
import { SkillLogic } from './skill-logic';

export class HeroLogic {
	static getKitTypes = (hero: Hero) => {
		const types = [ KitType.Martial, KitType.Caster ];

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.KitType)
			.forEach(f => {
				const data = f.data as FeatureKitTypeData;
				types.push(...data.types);
			});

		return types;
	};

	static getKits = (hero: Hero) => {
		const kits: Kit[] = [];

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Kit)
			.forEach(f => {
				const data = f.data as FeatureKitData;
				kits.push(...data.selected);
			});

		return kits;
	};

	static getDomains = (hero: Hero) => {
		const domains: Domain[] = [];

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Domain)
			.forEach(f => {
				const data = f.data as FeatureDomainData;
				domains.push(...data.selected);
			});

		return domains;
	};

	static getFeatures = (hero: Hero) => {
		const features: Feature[] = [];

		if (hero.features) {
			features.push(...hero.features);
		}

		if (hero.ancestry) {
			features.push(...FeatureLogic.getFeaturesFromAncestry(hero.ancestry));
		}

		if (hero.culture) {
			features.push(...FeatureLogic.getFeaturesFromCulture(hero.culture));
		}

		if (hero.career) {
			features.push(...FeatureLogic.getFeaturesFromCareer(hero.career));
		}

		if (hero.class) {
			features.push(...FeatureLogic.getFeaturesFromClass(hero.class));
		}

		if (hero.complication) {
			features.push(...FeatureLogic.getFeaturesFromComplication(hero.complication));
		}

		hero.state.inventory.forEach(item => {
			features.push(...FeatureLogic.getFeaturesFromItem(item));
		});

		return Collections.sort(features, f => f.name);
	};

	static getAbilities = (hero: Hero, includeChoices: boolean, includeFreeStrikes: boolean, includeStandard: boolean) => {
		const abilities: Ability[] = [];

		if (includeFreeStrikes) {
			abilities.push(AbilityLogic.createAbility({
				id: 'free-melee',
				name: 'Free Strike (melee)',
				description: '',
				type: AbilityLogic.createTypeAction(true),
				keywords: [ AbilityKeyword.Attack, AbilityKeyword.Melee, AbilityKeyword.Weapon ],
				distance: [ AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 }) ],
				target: '1 creature or object',
				powerRoll: AbilityLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: '2 damage',
					tier2: '6 damage',
					tier3: '9 damage'
				})
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'free-ranged',
				name: 'Free Strike (ranged)',
				description: '',
				type: AbilityLogic.createTypeAction(true),
				keywords: [ AbilityKeyword.Attack, AbilityKeyword.Ranged, AbilityKeyword.Weapon ],
				distance: [ AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 5 }) ],
				target: '1 creature or object',
				powerRoll: AbilityLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: '2 damage',
					tier2: '6 damage',
					tier3: '9 damage'
				})
			}));
		}

		if (includeChoices) {
			const choices: Ability[] = [];

			this.getFeatures(hero)
				.filter(f => f.type === FeatureType.Ability)
				.forEach(f => {
					const data = f.data as FeatureAbilityData;
					choices.push(data.ability);
				});

			this.getFeatures(hero)
				.filter(f => f.type === FeatureType.ClassAbility)
				.forEach(f => {
					const data = f.data as FeatureClassAbilityData;
					data.selectedIDs.forEach(abilityID => {
						const ability = hero.class?.abilities.find(a => a.id === abilityID);
						if (ability) {
							choices.push(ability);
						}
					});
				});

			if (this.getKits(hero).some(kit => kit.mobility)) {
				choices.push(AbilityLogic.createAbility({
					id: 'mobility',
					name: 'Mobility',
					description: '',
					type: AbilityLogic.createTypeTrigger('An enemy ends its turn adjacent to you.', true),
					distance: [ AbilityLogic.createDistanceSelf() ],
					target: 'Self',
					effect: 'You shift up to 2 squares.'
				}));
			}

			Collections.distinct(choices.map(a => a.cost), a => a)
				.sort((a, b) => a - b)
				.forEach(cost => abilities.push(...Collections.sort(choices.filter(a => a.cost === cost), a => a.name)));
		}

		if (includeStandard) {
			abilities.push(AbilityLogic.createAbility({
				id: 'aid-attack',
				name: 'Aid Attack',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [ AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 }) ],
				target: '1 enemy',
				effect: 'The next attack an ally makes against the target before the start of your next turn has an edge.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'drink-potion',
				name: 'Drink Potion',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [
					AbilityLogic.createDistanceSelf(),
					AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })
				],
				target: 'Self or 1 creature',
				effect: 'You can use this maneuver to drink a potion yourself or to administer a potion to an adjacent creature.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'escape-grab',
				name: 'Escape Grab',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				preEffect: 'While you are grabbed by another creature, you can attempt to escape by making a resistance roll. You take a bane on the roll if the creature’s size is larger than yours.',
				powerRoll: AbilityLogic.createPowerRoll({
					characteristic: [ Characteristic.Might, Characteristic.Agility ],
					tier1: 'You fail to escape the grab.',
					tier2: 'You can escape the grab, but if you do, the creature grabbing you can make a melee free strike against you before you are no longer grabbed.',
					tier3: 'You are no longer grabbed.'
				})
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'grab',
				name: 'Grab',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [ AbilityKeyword.Melee ],
				distance: [ AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 }) ],
				target: '1 creature the same size or smaller than you',
				powerRoll: AbilityLogic.createPowerRoll({
					characteristic: [ Characteristic.Might ],
					tier1: 'No effect',
					tier2: 'You can grab the target, but if you do, they can make a melee free strike against you right before they become grabbed by you.',
					tier3: 'The target is grabbed by you.'
				}),
				effect: 'You gain an edge on the power roll if the creature’s size is smaller than yours. You can grab only one creature at a time this way.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'hide',
				name: 'Hide',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: 'You attempt to hide from other creatures who aren’t observing you while you have cover or concealment.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'knockback',
				name: 'Knockback',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [ AbilityKeyword.Melee ],
				distance: [ AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 }) ],
				target: '1 creature the same size or smaller than you',
				powerRoll: AbilityLogic.createPowerRoll({
					characteristic: [ Characteristic.Might ],
					tier1: 'Push 1',
					tier2: 'Push 2',
					tier3: 'Push 3'
				}),
				effect: 'You gain an edge on the power roll if the creature’s size is smaller than yours.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'make-assist-test',
				name: 'Make Or Assist A Test',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: `
Many tests are maneuvers if made in combat. Searching a chest with a Reason test, picking a door’s lock with an Agility test, or lifting a portcullis with a Might test would all be maneuvers. Assisting a test is also a maneuver in combat.
Complex or time-consuming tests might require an action if made in combat—or could take so long that they can’t be made during combat at all. Other tests that take no time at all, such as a Reason test to recall lore about mummies, are usually free maneuvers in combat. The Director has the final say regarding which tests can be made as maneuvers.`
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'search',
				name: 'Search',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: 'You can use this maneuver to attempt to search for creatures hidden from you.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'stand-up',
				name: 'Stand Up',
				description: '',
				type: AbilityLogic.createTypeManeuver(),
				keywords: [],
				distance: [
					AbilityLogic.createDistanceSelf(),
					AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })
				],
				target: 'Self or 1 creature',
				effect: 'You can use this maneuver to stand up if you are prone, ending that condition. Alternatively, you can use this maneuver to make an adjacent prone creature stand up.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'catch-breath',
				name: 'Catch Breath',
				description: '',
				type: AbilityLogic.createTypeAction(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: `
By using the Catch Breath action, you spend a Recovery and heal an amount equal to your recovery value. In addition, you also gain the benefit of the Defend action.
If you are dying, you can’t take the Catch Breath action, but other creatures can help you spend recoveries.`
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'charge',
				name: 'Charge',
				description: '',
				type: AbilityLogic.createTypeAction(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: 'When you take the Charge action, you move up to your speed in a straight line, then make a melee free strike against a creature when you end your move. You can’t shift when you charge.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'defend',
				name: 'Defend',
				description: '',
				type: AbilityLogic.createTypeAction(),
				keywords: [],
				distance: [ AbilityLogic.createDistanceSelf() ],
				target: 'Self',
				effect: 'When you take the Defend action, all attacks against you have a double bane until the end of your next turn. You gain no benefit from this action while another creature is taunted by you.'
			}));
			abilities.push(AbilityLogic.createAbility({
				id: 'heal',
				name: 'Heal',
				description: '',
				type: AbilityLogic.createTypeAction(),
				keywords: [],
				distance: [
					AbilityLogic.createDistanceSelf(),
					AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })
				],
				target: 'Self or 1 creature',
				effect: 'You use your action to employ medicine or inspiring words to make an adjacent creature feel better and stay in the fight. The creature can spend a Recovery to regain Stamina, or can make a resistance roll against a “(resistance ends)” effect they are suffering.'
			}));
		}

		return abilities;
	};

	static getCharacteristic = (hero: Hero, characteristic: Characteristic) => {
		let value = 0;

		if (hero.class) {
			const ch = hero.class.characteristics.find(ch => ch.characteristic === characteristic);
			if (ch) {
				value += ch.value;
			}
		}

		// Add bonuses from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField[characteristic])
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	static getLanguages = (hero: Hero, settings: CampaignSetting[]) => {
		const languageNames: string[] = [];

		settings.forEach(cs => {
			languageNames.push(...cs.defaultLanguages);
		});

		if (hero.culture) {
			languageNames.push(...hero.culture.languages);
		}

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Language)
			.forEach(f => {
				const data = f.data as FeatureLanguageData;
				languageNames.push(...data.selected);
			});

		const allLanguages = settings.flatMap(cs => cs.languages);

		const languages: Language[] = [];
		languageNames.forEach(name => {
			const language = allLanguages.find(l => l.name === name);
			if (language) {
				languages.push(language);
			}
		});

		return Collections.sort(languages, l => l.name);
	};

	static getSkills = (hero: Hero, settings: CampaignSetting[]) => {
		const skillNames: string[] = [];

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Skill)
			.forEach(f => {
				const data = f.data as FeatureSkillData;
				skillNames.push(data.skill);
			});
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.SkillChoice)
			.forEach(f => {
				const data = f.data as FeatureSkillChoiceData;
				skillNames.push(...data.selected);
			});

		const skills: Skill[] = [];
		skillNames.forEach(name => {
			const skill = SkillLogic.getSkill(name, settings);
			if (skill) {
				skills.push(skill);
			}
		});

		return Collections.sort(skills, s => s.name);
	};

	static getDamageModifiers = (hero: Hero, type: DamageModifierType) => {
		const immunities: { type: string, value: number }[] = [];

		// Collate from features
		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.DamageModifier)
			.forEach(f => {
				const data = f.data as FeatureDamageModifierData;
				data.modifiers
					.filter(dm => dm.type === type)
					.forEach(dm => {
						let value = dm.value;
						if (hero.class) {
							value += dm.valuePerLevel * (hero.class.level - 1);
						}
						immunities.push({
							type: dm.damageType,
							value: value
						});
					});
			});

		return Collections.sort(immunities, i => i.type);
	};

	///////////////////////////////////////////////////////////////////////////

	static getStamina = (hero: Hero) => {
		// Base stamina value for all heroes
		let value = 10;

		// Add maximum from kits
		const kits = this.getKits(hero);
		value += Collections.max(kits.map(kit => kit.stamina), value => value) || 0;

		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField.Stamina)
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	static getRecoveryValue = (hero: Hero) => {
		let value = Math.floor(this.getStamina(hero) / 3);

		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField.RecoveryValue)
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	static getRecoveries = (hero: Hero) => {
		let value = 0;

		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField.Recoveries)
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	static getSize = (hero: Hero) => {
		const features = this.getFeatures(hero).filter(f => f.type === FeatureType.Size);
		if (features.length > 0) {
			const datas = features.map(f => f.data as FeatureSizeData);
			const value = Collections.max(datas.map(d => d.size.value), v => v);
			const mods = Collections.distinct(datas.map(d => d.size.mod), m => m);
			return {
				value: value,
				mod: value === 1 ? mods[0] : ''
			} as Size;
		}

		return {
			value: 1,
			mod: 'M'
		} as Size;
	};

	static getSpeed = (hero: Hero) => {
		// Base speed value for all heroes
		let value = 6;

		// Add maximum from kits
		const kits = this.getKits(hero);
		value += Collections.max(kits.map(kit => kit.speed), value => value) || 0;

		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField.Speed)
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	static getStability = (hero: Hero) => {
		// Base stability value for all heroes
		let value = 4;

		// Add maximum from kits
		const kits = this.getKits(hero);
		value += Collections.max(kits.map(kit => kit.stability), value => value) || 0;

		this.getFeatures(hero)
			.filter(f => f.type === FeatureType.Bonus)
			.map(f => f.data as FeatureBonusData)
			.filter(data => data.field === FeatureField.Stability)
			.forEach(data => {
				value += data.value;
				if (hero.class) {
					value += data.valuePerLevel * (hero.class.level - 1);
				}
			});

		return value;
	};

	///////////////////////////////////////////////////////////////////////////

	static getMeleeDamageBonus = (hero: Hero, ability: Ability) => {
		let value1 = 0;
		let value2 = 0;
		let value3 = 0;

		if (ability.keywords.includes(AbilityKeyword.Melee) && ability.keywords.includes(AbilityKeyword.Weapon)) {
			// Add maximum from kits
			const kits = this.getKits(hero);
			value1 += Collections.max(kits.map(kit => kit.meleeDamage?.tier1 || 0), value => value) || 0;
			value2 += Collections.max(kits.map(kit => kit.meleeDamage?.tier2 || 0), value => value) || 0;
			value3 += Collections.max(kits.map(kit => kit.meleeDamage?.tier3 || 0), value => value) || 0;
		}

		if ((value1 === 0) && (value2 === 0) && (value3 === 0)) {
			return null;
		}

		return {
			tier1: value1,
			tier2: value2,
			tier3: value3
		};
	};

	static getRangedDamageBonus = (hero: Hero, ability: Ability) => {
		let value1 = 0;
		let value2 = 0;
		let value3 = 0;

		if (ability.keywords.includes(AbilityKeyword.Ranged) && ability.keywords.includes(AbilityKeyword.Weapon)) {
			// Add maximum from kits
			const kits = this.getKits(hero);
			value1 += Collections.max(kits.map(kit => kit.rangedDamage?.tier1 || 0), value => value) || 0;
			value2 += Collections.max(kits.map(kit => kit.rangedDamage?.tier2 || 0), value => value) || 0;
			value3 += Collections.max(kits.map(kit => kit.rangedDamage?.tier3 || 0), value => value) || 0;
		}

		if ((value1 === 0) && (value2 === 0) && (value3 === 0)) {
			return null;
		}

		return {
			tier1: value1,
			tier2: value2,
			tier3: value3
		};
	};

	static getMagicalDamageBonus = (hero: Hero, ability: Ability) => {
		let value1 = 0;
		let value2 = 0;
		let value3 = 0;

		if (ability.keywords.includes(AbilityKeyword.Magic)) {
			// Add maximum from kits
			const kits = this.getKits(hero);
			value1 += Collections.max(kits.map(kit => kit.magicalDamage?.tier1 || 0), value => value) || 0;
			value2 += Collections.max(kits.map(kit => kit.magicalDamage?.tier2 || 0), value => value) || 0;
			value3 += Collections.max(kits.map(kit => kit.magicalDamage?.tier3 || 0), value => value) || 0;
		}

		if ((value1 === 0) && (value2 === 0) && (value3 === 0)) {
			return null;
		}

		return {
			tier1: value1,
			tier2: value2,
			tier3: value3
		};
	};

	static getDistanceBonus = (hero: Hero, ability: Ability, distance: AbilityDistance) => {
		const kits = this.getKits(hero);

		if (ability.keywords.includes(AbilityKeyword.Melee) && ability.keywords.includes(AbilityKeyword.Weapon) && (distance.type === AbilityDistanceType.Reach)) {
			// Add maximum reach bonus from kits
			return Collections.max(kits.map(kit => kit.reach), value => value) || 0;
		}

		if (ability.keywords.includes(AbilityKeyword.Ranged) && ability.keywords.includes(AbilityKeyword.Weapon) && (distance.type === AbilityDistanceType.Ranged)) {
			// Add maximum distance bonus from martial kits
			return Collections.max(kits.filter(kit => kit.type === KitType.Martial).map(kit => kit.distance), value => value) || 0;
		}

		if (ability.keywords.includes(AbilityKeyword.Ranged) && ability.keywords.includes(AbilityKeyword.Magic) && (distance.type === AbilityDistanceType.Ranged)) {
			// Add maximum distance bonus from caster kits
			return Collections.max(kits.filter(kit => kit.type === KitType.Caster).map(kit => kit.distance), value => value) || 0;
		}

		const areaTypes = [
			AbilityDistanceType.Aura,
			AbilityDistanceType.Burst,
			AbilityDistanceType.Cube,
			AbilityDistanceType.Line,
			AbilityDistanceType.Wall
		];

		if (ability.keywords.includes(AbilityKeyword.Magic) && areaTypes.includes(distance.type)) {
			// Add maximum area bonus from kits
			return Collections.max(kits.map(kit => kit.area), value => value) || 0;
		}

		return 0;
	};

	///////////////////////////////////////////////////////////////////////////

	static calculateCharacteristicArrays = (primary: Characteristic[]) => {
		const all = [ Characteristic.Might, Characteristic.Agility, Characteristic.Reason, Characteristic.Intuition, Characteristic.Presence ];
		const others = all.filter(c => !primary.includes(c));

		const arrays: { characteristic: Characteristic, value: number }[][] = [];
		others.forEach(single => {
			arrays.push(all.map(ch => {
				let value: number;
				if (primary.includes(ch)) {
					value = 2;
				} else if (ch === single) {
					value = 2;
				} else {
					value = -1;
				}
				return {
					characteristic: ch,
					value: value
				};
			}));

			arrays.push(all.map(ch => {
				let value: number;
				if (primary.includes(ch)) {
					value = 2;
				} else if (ch === single) {
					value = 1;
				} else {
					value = 0;
				}
				return {
					characteristic: ch,
					value: value
				};
			}));

			arrays.push(all.map(ch => {
				let value: number;
				if (primary.includes(ch)) {
					value = 2;
				} else if (ch === single) {
					value = -1;
				} else {
					value = 1;
				}
				return {
					characteristic: ch,
					value: value
				};
			}));
		});

		return arrays;
	};

	static getMinXP = (level: number) => {
		switch (level) {
			case 1:
				return 0;
			case 2:
				return 10;
			case 3:
				return 25;
			case 4:
				return 40;
			case 5:
				return 55;
			case 6:
				return 70;
			case 7:
				return 85;
			case 8:
				return 100;
			case 9:
				return 115;
			case 10:
			default:
				return 130;
		}
	};

	static canLevelUp = (hero: Hero) => {
		if (!hero.class) {
			return false;
		}

		return hero.state.xp >= this.getMinXP(hero.class.level + 1);
	};

	///////////////////////////////////////////////////////////////////////////

	static updateHero = (hero: Hero) => {
		if (hero.settingIDs === undefined) {
			hero.settingIDs = [ CampaignSettingData.core.id, CampaignSettingData.orden.id ];
		}

		if (hero.career) {
			if (hero.career.incitingIncidents === undefined) {
				hero.career.incitingIncidents = {
					options: [],
					selectedID: null
				};
			}
		}

		// Initialize all state properties if they don't exist
		if (!hero.state) {
			hero.state = {
				staminaDamage: 0,
				recoveriesUsed: 0,
				victories: 0,
				xp: 0,
				heroicResource: 0,
				heroTokens: 0,
				renown: 0,
				projectPoints: 0,
				conditions: [],
				inventory: []
			};
		} else {
			// Initialize individual state properties if they don't exist
			if (hero.state.staminaDamage === undefined) hero.state.staminaDamage = 0;
			if (hero.state.recoveriesUsed === undefined) hero.state.recoveriesUsed = 0;
			if (hero.state.victories === undefined) hero.state.victories = 0;
			if (hero.state.xp === undefined) hero.state.xp = 0;
			if (hero.state.heroicResource === undefined) hero.state.heroicResource = 0;
			if (hero.state.heroTokens === undefined) hero.state.heroTokens = 0;
			if (hero.state.renown === undefined) hero.state.renown = 0;
			if (hero.state.projectPoints === undefined) hero.state.projectPoints = 0;
			if (hero.state.conditions === undefined) hero.state.conditions = [];
			if (hero.state.inventory === undefined) hero.state.inventory = [];
		}
	};
}
