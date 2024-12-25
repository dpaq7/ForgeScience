import { KitType, KitArmor, KitWeapon, KitImplement } from '../../../enums/kit';
import { FeatureLogic } from '../../../logic/feature-logic';
import { Kit } from '../../../models/kit';
import { FeatureField } from '../../../enums/feature-field';

export class StarTrekKits {
    static engineeringKit: Kit = {
        id: 'kit-engineering',
        name: 'Engineering Kit',
        description: 'A collection of tools and diagnostic equipment used by Starfleet engineers.',
        type: KitType.Caster,
        armor: [KitArmor.Light],
        weapon: [KitWeapon.Light],
        implement: [KitImplement.Metal, KitImplement.Crystal],
        stamina: 8,
        speed: 6,
        stability: 4,
        meleeDamage: {
            tier1: 4,
            tier2: 6,
            tier3: 8
        },
        rangedDamage: null,
        magicalDamage: null,
        distance: 1,
        reach: 1,
        area: 1,
        mobility: true,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'emergency-repair',
                name: 'Emergency Repair',
                description: 'As an action, you can attempt to repair a damaged system.',
                field: FeatureField.Stamina,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'system-diagnostic',
                name: 'System Diagnostic',
                description: 'You can analyze technical systems to identify problems and solutions.',
                field: FeatureField.Speed,
                value: 1
            })
        ]
    };

    static scienceKit: Kit = {
        id: 'kit-science',
        name: 'Science Kit',
        description: 'Advanced scientific equipment used for research and analysis.',
        type: KitType.Caster,
        armor: [KitArmor.Light],
        weapon: [KitWeapon.Light],
        implement: [KitImplement.Crystal, KitImplement.Metal],
        stamina: 6,
        speed: 8,
        stability: 4,
        meleeDamage: {
            tier1: 4,
            tier2: 6,
            tier3: 8
        },
        rangedDamage: null,
        magicalDamage: null,
        distance: 1,
        reach: 1,
        area: 1,
        mobility: true,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'scientific-analysis',
                name: 'Scientific Analysis',
                description: 'You can analyze phenomena to gain insights and advantages.',
                field: FeatureField.Speed,
                value: 2
            })
        ]
    };

    static securityKit: Kit = {
        id: 'kit-security',
        name: 'Security Kit',
        description: 'Standard Starfleet security equipment for protection and defense.',
        type: KitType.Martial,
        armor: [KitArmor.Medium],
        weapon: [KitWeapon.Medium],
        implement: [KitImplement.Metal],
        stamina: 10,
        speed: 6,
        stability: 6,
        meleeDamage: {
            tier1: 6,
            tier2: 8,
            tier3: 10
        },
        rangedDamage: null,
        magicalDamage: null,
        distance: 1,
        reach: 1,
        area: 1,
        mobility: true,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'defensive-protocols',
                name: 'Defensive Protocols',
                description: 'You can enhance defensive systems and set up security measures.',
                field: FeatureField.Stability,
                value: 2
            })
        ]
    };

    static tacticalKit: Kit = {
        id: 'kit-tactical',
        name: 'Tactical Kit',
        description: 'Advanced combat and tactical equipment for military operations.',
        type: KitType.Martial,
        armor: [KitArmor.Heavy],
        weapon: [KitWeapon.Heavy],
        implement: [KitImplement.Metal],
        stamina: 12,
        speed: 4,
        stability: 8,
        meleeDamage: {
            tier1: 8,
            tier2: 10,
            tier3: 12
        },
        rangedDamage: null,
        magicalDamage: null,
        distance: 1,
        reach: 1,
        area: 1,
        mobility: true,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'combat-systems',
                name: 'Combat Systems',
                description: 'You can optimize weapon systems and tactical equipment.',
                field: FeatureField.Stability,
                value: 2
            })
        ]
    };

    static diplomatKit: Kit = {
        id: 'kit-diplomat',
        name: 'Diplomat Kit',
        description: 'Specialized equipment for diplomatic missions and negotiations.',
        type: KitType.Caster,
        armor: [KitArmor.Light],
        weapon: [KitWeapon.Light],
        implement: [KitImplement.Crystal, KitImplement.Metal],
        stamina: 6,
        speed: 6,
        stability: 4,
        meleeDamage: {
            tier1: 4,
            tier2: 6,
            tier3: 8
        },
        rangedDamage: null,
        magicalDamage: null,
        distance: 1,
        reach: 1,
        area: 1,
        mobility: true,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'universal-translation',
                name: 'Universal Translation',
                description: 'Your kit includes advanced translation capabilities.',
                field: FeatureField.Speed,
                value: 1
            })
        ]
    };

    static allKits: Kit[] = [
        StarTrekKits.engineeringKit,
        StarTrekKits.scienceKit,
        StarTrekKits.securityKit,
        StarTrekKits.tacticalKit,
        StarTrekKits.diplomatKit
    ];
}
