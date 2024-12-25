import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureLogic } from '../../../../logic/feature-logic';
import { HeroClass } from '../../../../models/class';
import { AbilityLogic } from '../../../../logic/ability-logic';
import { AbilityKeyword } from '../../../../enums/ability-keyword';
import { AbilityDistanceType } from '../../../../enums/ability-distance-type';

export const vigilante: HeroClass = {
    id: 'class-vigilante',
    name: 'Vigilante',
    description: 'You are a self-appointed guardian who fights against corruption and injustice.',
    heroicResource: 'Determination',
    subclassName: 'Specialization',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Might, Characteristic.Agility],
    level: 1,
    characteristics: [{
        characteristic: Characteristic.Presence,
        value: 2
    }],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'vigilante-stamina',
                field: FeatureField.Stamina,
                value: 18,
                valuePerLevel: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'vigilante-recoveries',
                field: FeatureField.Recoveries,
                value: 10
            }),
            FeatureLogic.createFeature({
                id: 'vigilante-1-1',
                name: 'Street Justice',
                description: 'Your experience fighting crime has taught you how to handle dangerous situations.'
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'vigilante-1-signature',
                cost: 1,
                count: 1,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'vigilante-1-3point',
                cost: 3,
                count: 2,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'vigilante-1-5point',
                cost: 5,
                count: 1,
                selectedIDs: []
            })
        ]
    }],
    abilities: [
        AbilityLogic.createAbility({
            id: 'vigilante-swift-justice',
            name: 'Swift Justice',
            description: 'Your quick reactions allow you to strike before your enemies can respond.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Agility],
                tier1: '8 damage and you can shift 1 square',
                tier2: '12 damage and you can shift 2 squares',
                tier3: '16 damage and you can shift 3 squares, ignoring opportunity attacks'
            }),
            effect: 'You can spend 1 Justice Point to make an additional attack against a different target.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'vigilante-takedown',
            name: 'Takedown',
            description: 'You use your combat training to quickly incapacitate your opponents.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Might],
                tier1: '12 damage and the target is knocked prone',
                tier2: '18 damage and the target is knocked prone and dazed',
                tier3: '24 damage and the target is knocked prone and stunned'
            }),
            effect: 'You can spend 2 Justice Points to affect an additional adjacent target.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'vigilante-interrogation',
            name: 'Interrogation',
            description: 'Your intimidating presence helps you extract information from your targets.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack, AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Might],
                tier1: '10 psychic damage and target must answer one yes/no question truthfully',
                tier2: '15 psychic damage and target must answer one question truthfully',
                tier3: '20 psychic damage and target must answer three questions truthfully'
            }),
            effect: 'You can spend 2 Justice Points to ask an additional question.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'vigilante-righteous-fury',
            name: 'Righteous Fury',
            description: 'Your sense of justice empowers you to strike down those who harm the innocent.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })],
            target: 'All adjacent enemies',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Might],
                tier1: '15 damage to each target',
                tier2: '20 damage to each target and they are pushed 1 square',
                tier3: '25 damage to each target, they are pushed 2 squares, and knocked prone'
            }),
            effect: 'You can spend 3 Justice Points to gain temporary stamina equal to the damage dealt to one target.',
            cost: 5
        }),
        AbilityLogic.createAbility({
            id: 'vigilante-guerrilla-tactics',
            name: 'Guerrilla Tactics',
            description: 'You use unconventional tactics to gain an advantage in combat.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Reach, value: 1 })],
            target: 'One creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Agility],
                tier1: '10 damage and you can move 2 squares without provoking opportunity attacks',
                tier2: '15 damage and you can move 3 squares without provoking opportunity attacks',
                tier3: '20 damage and you can move 4 squares without provoking opportunity attacks'
            }),
            effect: 'You can spend 1 Determination to gain advantage on the attack roll.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'vigilante-improvised-explosives',
            name: 'Improvised Explosives',
            description: 'You create and use improvised explosive devices.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Attack, AbilityKeyword.Area],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Burst, value: 2 })],
            target: 'All creatures in burst',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: '8 damage to each target',
                tier2: '12 damage to each target and they are knocked prone',
                tier3: '16 damage to each target, they are knocked prone, and the area becomes difficult terrain'
            }),
            effect: 'You can spend 2 Determination to increase the burst radius by 1.',
            cost: 3
        }),
    ],
    subclasses: []
};
