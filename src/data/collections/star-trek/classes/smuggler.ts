import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureLogic } from '../../../../logic/feature-logic';
import { HeroClass } from '../../../../models/class';
import { AbilityLogic } from '../../../../logic/ability-logic';
import { AbilityKeyword } from '../../../../enums/ability-keyword';
import { AbilityDistanceType } from '../../../../enums/ability-distance-type';

export const smuggler: HeroClass = {
    id: 'class-smuggler',
    name: 'Smuggler',
    description: 'You are a skilled pilot and trader who operates in the gray areas of the law.',
    heroicResource: 'Luck Points',
    subclassName: 'Specialization',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Agility, Characteristic.Presence],
    level: 1,
    characteristics: [{
        characteristic: Characteristic.Presence,
        value: 2
    }],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'smuggler-stamina',
                field: FeatureField.Stamina,
                value: 16,
                valuePerLevel: 7
            }),
            FeatureLogic.createBonusFeature({
                id: 'smuggler-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createFeature({
                id: 'smuggler-1-1',
                name: 'Quick Thinking',
                description: 'Your quick wit and adaptability help you survive dangerous situations.'
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'smuggler-1-signature',
                cost: 1,
                count: 1,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'smuggler-1-3point',
                cost: 3,
                count: 2,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'smuggler-1-5point',
                cost: 5,
                count: 1,
                selectedIDs: []
            })
        ]
    }],
    abilities: [
        AbilityLogic.createAbility({
            id: 'smuggler-evasive-maneuvers',
            name: 'Evasive Maneuvers',
            description: 'Your piloting skills allow you to avoid enemy attacks.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Agility],
                tier1: 'Gain +2 to Defense until the end of your next turn',
                tier2: 'Gain +4 to Defense until the end of your next turn',
                tier3: 'Gain +6 to Defense until the end of your next turn'
            }),
            effect: 'You can spend 1 Luck Point to extend the duration by 1 round.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'smuggler-luck',
            name: 'Smuggler\'s Luck',
            description: 'Your uncanny luck helps you survive dangerous situations.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Reroll one failed saving throw',
                tier2: 'Reroll one failed saving throw with advantage',
                tier3: 'Reroll one failed saving throw with advantage and add your Presence modifier'
            }),
            effect: 'You can spend 2 Luck Points to use this ability as a reaction.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'smuggler-lucky-shot',
            name: 'Lucky Shot',
            description: 'You make an improbable shot that catches your enemy off guard.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 10 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Agility],
                tier1: '10 damage and the target grants combat advantage until the end of your next turn',
                tier2: '15 damage and the target is dazed until the end of your next turn',
                tier3: '20 damage and the target is stunned until the end of your next turn'
            }),
            effect: 'You can spend 2 Luck Points to reroll this ability\'s power roll.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'smuggler-hidden-cargo',
            name: 'Hidden Cargo',
            description: 'You reveal a concealed weapon or item at just the right moment.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 5 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: '12 damage and you can draw a weapon or item as a free action',
                tier2: '18 damage and you can use a drawn item\'s ability as a free action',
                tier3: '24 damage and you can use two different items\' abilities as free actions'
            }),
            effect: 'You can spend 2 Luck Points to use this ability as a minor action.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'smuggler-impossible-escape',
            name: 'Impossible Escape',
            description: 'Your legendary luck helps you escape from seemingly impossible situations.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Targets can immediately shift 3 squares and gain +2 to all defenses until the end of your next turn',
                tier2: 'Targets can immediately shift 5 squares, gain +3 to all defenses, and remove one negative condition',
                tier3: 'Targets can immediately shift 7 squares, gain +4 to all defenses, remove all negative conditions, and gain temporary stamina equal to your Presence score'
            }),
            effect: 'You can spend 3 Luck Points to use this ability as an immediate interrupt when an enemy attacks.',
            cost: 5
        })
    ],
    subclasses: []
};
