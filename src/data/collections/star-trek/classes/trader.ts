import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureLogic } from '../../../../logic/feature-logic';
import { HeroClass } from '../../../../models/class';
import { AbilityLogic } from '../../../../logic/ability-logic';
import { AbilityKeyword } from '../../../../enums/ability-keyword';
import { AbilityDistanceType } from '../../../../enums/ability-distance-type';

export const trader: HeroClass = {
    id: 'class-trader',
    name: 'Trader',
    description: 'You are a skilled merchant who knows how to get the best deals across the galaxy.',
    heroicResource: 'Trade Points',
    subclassName: 'Specialization',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence, Characteristic.Reason],
    level: 1,
    characteristics: [{
        characteristic: Characteristic.Presence,
        value: 2
    }],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'trader-stamina',
                field: FeatureField.Stamina,
                value: 14,
                valuePerLevel: 6
            }),
            FeatureLogic.createBonusFeature({
                id: 'trader-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createFeature({
                id: 'trader-1-1',
                name: 'Business Acumen',
                description: 'Your business experience helps you identify opportunities and negotiate better deals.'
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'trader-1-signature',
                cost: 1,
                count: 1,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'trader-1-3point',
                cost: 3,
                count: 2,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'trader-1-5point',
                cost: 5,
                count: 1,
                selectedIDs: []
            })
        ]
    }],
    abilities: [
        AbilityLogic.createAbility({
            id: 'trader-negotiate-deal',
            name: 'Negotiate Deal',
            description: 'Your negotiation skills help you secure favorable deals.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and one ally within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Reduce the price of one item by 25%',
                tier2: 'Reduce the price of one item by 50%',
                tier3: 'Reduce the price of one item by 75%'
            }),
            effect: 'You can spend 1 Trade Point to affect an additional ally.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'trader-market-manipulation',
            name: 'Market Manipulation',
            description: 'You use your economic influence to manipulate market prices.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: 'Increase selling prices by 25% for 1 round',
                tier2: 'Increase selling prices by 50% for 1 round',
                tier3: 'Increase selling prices by 100% for 1 round'
            }),
            effect: 'You can spend 2 Trade Points to extend the duration by 1 round.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'trader-market-analysis',
            name: 'Market Analysis',
            description: 'Your keen business sense helps you identify valuable opportunities.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: 'Gain advantage on the next Barter or Insight check',
                tier2: 'Gain advantage on all Barter and Insight checks for 1 round',
                tier3: 'Gain advantage and +5 on all Barter and Insight checks for 1 round'
            }),
            effect: 'You can spend 1 Trade Point to extend the duration by 1 round.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'trader-profitable-venture',
            name: 'Profitable Venture',
            description: 'You identify a lucrative opportunity that benefits your entire team.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Each target gains 100 credits',
                tier2: 'Each target gains 250 credits and advantage on their next purchase',
                tier3: 'Each target gains 500 credits and can purchase one item at half price'
            }),
            effect: 'You can spend 2 Trade Points to double the credits gained.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'trader-resource-network',
            name: 'Resource Network',
            description: 'You tap into your network of contacts to acquire needed resources.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and one ally within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Reason],
                tier1: 'Acquire one common item at market price',
                tier2: 'Acquire one uncommon item at market price',
                tier3: 'Acquire one rare item at market price'
            }),
            effect: 'You can spend 2 Trade Points to reduce the item\'s price by 25%.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'trader-trade-empire',
            name: 'Trade Empire',
            description: 'You leverage your business empire to gain significant advantages.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 10 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Each target can sell one item at full market value',
                tier2: 'Each target can sell up to three items at full market value',
                tier3: 'Each target can sell any number of items at full market value and gains 1000 credits'
            }),
            effect: 'You can spend 3 Trade Points to increase market values by 50% for this ability.',
            cost: 5
        })
    ],
    subclasses: []
};
