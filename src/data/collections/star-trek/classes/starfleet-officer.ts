import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureLogic } from '../../../../logic/feature-logic';
import { HeroClass } from '../../../../models/class';
import { AbilityLogic } from '../../../../logic/ability-logic';
import { AbilityKeyword } from '../../../../enums/ability-keyword';
import { AbilityDistanceType } from '../../../../enums/ability-distance-type';

export const starfleetOfficer: HeroClass = {
    id: 'class-starfleet-officer',
    name: 'Starfleet Officer',
    description: 'You are a trained officer of Starfleet, combining tactical expertise with leadership skills.',
    heroicResource: 'Command Points',
    subclassName: 'Division',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence, Characteristic.Reason],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'starfleet-stamina',
                field: FeatureField.Stamina,
                value: 18,
                valuePerLevel: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'starfleet-recoveries',
                field: FeatureField.Recoveries,
                value: 10
            }),
            FeatureLogic.createFeature({
                id: 'starfleet-1-1',
                name: 'Starfleet Training',
                description: 'Your Starfleet training has prepared you for a wide range of situations.'
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'starfleet-1-signature',
                cost: 1,
                count: 1,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'starfleet-1-3point',
                cost: 3,
                count: 2,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'starfleet-1-5point',
                cost: 5,
                count: 1,
                selectedIDs: []
            })
        ]
    }],
    abilities: [
        AbilityLogic.createAbility({
            id: 'starfleet-tactical-analysis',
            name: 'Tactical Analysis',
            description: 'Your Starfleet training allows you to quickly analyze tactical situations and coordinate your team.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'You and one ally gain an edge on their next attack roll',
                tier2: 'You and two allies gain an edge on their next attack roll',
                tier3: 'You and all allies within range gain an edge on their next attack roll and +2 to Speed until the end of your next turn'
            }),
            effect: 'You can spend 1 Command Point to reroll this ability\'s power roll.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'starfleet-photon-torpedoes',
            name: 'Photon Torpedoes',
            description: 'You coordinate with your ship to launch a devastating torpedo strike.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack, AbilityKeyword.Force],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 10 })],
            target: 'One creature or object',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: '10 force damage',
                tier2: '15 force damage and the target is pushed 2 squares',
                tier3: '20 force damage, the target is pushed 3 squares, and all creatures adjacent to the target take 5 force damage'
            }),
            effect: 'You can spend 2 Command Points to reroll this ability\'s power roll.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'starfleet-shield-modulation',
            name: 'Shield Modulation',
            description: 'You quickly adjust shield frequencies to better protect against specific threats.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and one ally within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: 'Target gains resistance to one damage type of your choice until the end of your next turn',
                tier2: 'Target gains resistance to two damage types of your choice until the end of your next turn',
                tier3: 'Target gains resistance to all damage types until the end of your next turn'
            }),
            effect: 'You can spend 2 Command Points to extend the duration by 1 round.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'starfleet-command-authority',
            name: 'Command Authority',
            description: 'Your natural leadership and command presence inspires your allies to greatness.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Targets gain +2 to all defenses until the end of your next turn',
                tier2: 'Targets gain +2 to all defenses and can immediately shift 2 squares',
                tier3: 'Targets gain +3 to all defenses, can immediately shift 3 squares, and gain advantage on their next attack roll'
            }),
            effect: 'You can spend 3 Command Points to extend the duration by 1 round.',
            cost: 5
        })
    ],
    subclasses: [],
    level: 1,
    characteristics: [{
        characteristic: Characteristic.Presence,
        value: 2
    }]
};
