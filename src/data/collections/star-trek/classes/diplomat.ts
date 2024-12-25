import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureLogic } from '../../../../logic/feature-logic';
import { HeroClass } from '../../../../models/class';
import { AbilityLogic } from '../../../../logic/ability-logic';
import { AbilityKeyword } from '../../../../enums/ability-keyword';
import { AbilityDistanceType } from '../../../../enums/ability-distance-type';

export const diplomat: HeroClass = {
    id: 'class-diplomat',
    name: 'Diplomat',
    description: 'You are a skilled negotiator and peacemaker, trained in the art of interstellar diplomacy.',
    heroicResource: 'Influence Points',
    subclassName: 'Specialization',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence, Characteristic.Intuition],
    level: 1,
    characteristics: [{
        characteristic: Characteristic.Presence,
        value: 2
    }],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'diplomat-stamina',
                field: FeatureField.Stamina,
                value: 15,
                valuePerLevel: 6
            }),
            FeatureLogic.createBonusFeature({
                id: 'diplomat-recoveries',
                field: FeatureField.Recoveries,
                value: 9
            }),
            FeatureLogic.createFeature({
                id: 'diplomat-1-1',
                name: 'Diplomatic Training',
                description: 'Your extensive diplomatic training helps you navigate complex social situations.'
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'diplomat-1-signature',
                cost: 1,
                count: 1,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'diplomat-1-3point',
                cost: 3,
                count: 2,
                selectedIDs: []
            }),
            FeatureLogic.createClassAbilityFeature({
                id: 'diplomat-1-5point',
                cost: 5,
                count: 1,
                selectedIDs: []
            })
        ]
    }],
    abilities: [
        AbilityLogic.createAbility({
            id: 'diplomat-peaceful-resolution',
            name: 'Peaceful Resolution',
            description: 'Your words can calm even the most hostile situations.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 5 })],
            target: 'One hostile creature',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Target must make a Presence save or stop attacking for 1 round',
                tier2: 'Target must make a Presence save or stop attacking and grant combat advantage for 1 round',
                tier3: 'Target must make a Presence save or become friendly until attacked'
            }),
            effect: 'You can spend 1 Influence Point to affect an additional target.',
            cost: 1
        }),
        AbilityLogic.createAbility({
            id: 'diplomat-cultural-insight',
            name: 'Cultural Insight',
            description: 'Your deep understanding of various cultures gives you an edge in social interactions.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and all allies within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Intuition],
                tier1: 'Targets gain +2 to social skill checks until the end of your next turn',
                tier2: 'Targets gain +4 to social skill checks and can reroll one failed check',
                tier3: 'Targets gain +6 to social skill checks and can reroll failed checks until the end of your next turn'
            }),
            effect: 'You can spend 2 Influence Points to extend the duration by 1 round.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'diplomat-mental-shield',
            name: 'Mental Shield',
            description: 'Your diplomatic training includes techniques to resist mental influence.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense, AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self and one ally within 5 squares',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Intuition],
                tier1: 'Targets gain resistance to psychic damage and +2 to saves vs. mental effects',
                tier2: 'Targets gain immunity to psychic damage and +4 to saves vs. mental effects',
                tier3: 'Targets gain immunity to psychic damage and mental conditions'
            }),
            effect: 'You can spend 2 Influence Points to extend the duration by 1 round.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'diplomat-diplomatic-immunity',
            name: 'Diplomatic Immunity',
            description: 'Your diplomatic status protects you from harm.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Defense],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Gain immunity to one type of damage until the end of your next turn',
                tier2: 'Gain immunity to two types of damage until the end of your next turn',
                tier3: 'Gain immunity to all damage until the end of your next turn'
            }),
            effect: 'You can spend 2 Influence Points to extend the duration by 1 round.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'diplomat-cultural-expertise',
            name: 'Cultural Expertise',
            description: 'Your deep understanding of different cultures gives you an advantage in social situations.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistanceSelf()],
            target: 'Self',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Intuition],
                tier1: 'Gain advantage on all social checks for 1 round',
                tier2: 'Gain advantage and +5 on all social checks for 1 round',
                tier3: 'Gain advantage and +10 on all social checks for 1 round'
            }),
            effect: 'You can spend 2 Influence Points to affect one ally within 5 squares.',
            cost: 3
        }),
        AbilityLogic.createAbility({
            id: 'diplomat-federation-authority',
            name: 'Federation Authority',
            description: 'You invoke the full authority of the Federation to command respect and compliance.',
            type: AbilityLogic.createTypeAction(),
            keywords: [AbilityKeyword.Psionic],
            distance: [AbilityLogic.createDistance({ type: AbilityDistanceType.Ranged, value: 10 })],
            target: 'All creatures in range',
            powerRoll: AbilityLogic.createPowerRoll({
                characteristic: [Characteristic.Presence],
                tier1: 'Targets must make a Presence save or be dazed until the end of your next turn',
                tier2: 'Targets must make a Presence save or be stunned until the end of your next turn',
                tier3: 'Targets must make a Presence save or follow one reasonable command'
            }),
            effect: 'You can spend 3 Influence Points to give an additional command on a tier 3 success.',
            cost: 5
        })
    ],
    subclasses: []
};
