import { Characteristic } from '../../../enums/characteristic';
import { FeatureField } from '../../../enums/feature-field';
import { FeatureLogic } from '../../../logic/feature-logic';
import { HeroClass } from '../../../models/class';

export const starfleetOfficer: HeroClass = {
    id: 'class-starfleet-officer',
    name: 'Starfleet Officer',
    description: 'A graduate of Starfleet Academy, trained in starship operations, Federation protocols, and the principles of exploration and peacekeeping.',
    heroicResource: 'Command Points',
    subclassName: 'Specialization',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'starfleet-training',
                name: 'Starfleet Training',
                description: 'Your Starfleet training has prepared you for leadership.',
                field: FeatureField.Presence,
                value: 2
            })
        ]
    }],
    abilities: [],
    subclasses: [],
    level: 1,
    characteristics: []
};

export const vigilante: HeroClass = {
    id: 'class-vigilante',
    name: 'Vigilante',
    description: `Operating outside official channels, you pursue justice in the darker corners of the galaxy. Whether you're a former Maquis resistance fighter or an independent enforcer, you believe sometimes the ends justify the means.`,
    heroicResource: 'Determination',
    subclassName: 'Methodology',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Might, Characteristic.Intuition],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'vigilante-stamina',
                field: FeatureField.Stamina,
                value: 21,
                valuePerLevel: 9
            }),
            FeatureLogic.createBonusFeature({
                id: 'vigilante-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'vigilante-combat-instincts',
                name: 'Combat Instincts',
                description: 'Years of combat experience have honed your fighting abilities.',
                field: FeatureField.Might,
                value: 2
            })
        ]
    }],
    abilities: [],
    subclasses: [],
    level: 1,
    characteristics: []
};

export const trader: HeroClass = {
    id: 'class-trader',
    name: 'Trader',
    description: 'A master of commerce and negotiation, you navigate the complex web of interstellar trade. Whether representing the Ferengi Commerce Authority or operating independently, you know that every deal is an opportunity.',
    heroicResource: 'Profit',
    subclassName: 'Business Model',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence, Characteristic.Reason],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'trader-stamina',
                field: FeatureField.Stamina,
                value: 18,
                valuePerLevel: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'trader-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'trader-negotiation',
                name: 'Master Negotiator',
                description: 'Your experience in trade negotiations gives you an edge in social interactions.',
                field: FeatureField.Presence,
                value: 2
            })
        ]
    }],
    abilities: [],
    subclasses: [],
    level: 1,
    characteristics: []
};

export const smuggler: HeroClass = {
    id: 'class-smuggler',
    name: 'Smuggler',
    description: 'You specialize in moving cargo - legal or otherwise - through the most challenging routes in the galaxy. With a mix of piloting skills and street smarts, you always find a way to complete the job.',
    heroicResource: 'Luck',
    subclassName: 'Specialty',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Agility, Characteristic.Intuition],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'smuggler-stamina',
                field: FeatureField.Stamina,
                value: 19,
                valuePerLevel: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'smuggler-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'smuggler-quick-reflexes',
                name: 'Quick Reflexes',
                description: 'Your life of evading authorities has made you exceptionally quick on your feet.',
                field: FeatureField.Agility,
                value: 2
            })
        ]
    }],
    abilities: [],
    subclasses: [],
    level: 1,
    characteristics: []
};

export const diplomat: HeroClass = {
    id: 'class-diplomat',
    name: 'Diplomat',
    description: 'As a skilled negotiator and cultural expert, you bridge the gaps between different species and civilizations. Your words can prevent wars and forge alliances that span the quadrant.',
    heroicResource: 'Influence',
    subclassName: 'Diplomatic Corps',
    subclassCount: 1,
    primaryCharacteristics: [Characteristic.Presence, Characteristic.Reason],
    featuresByLevel: [{
        level: 1,
        features: [
            FeatureLogic.createBonusFeature({
                id: 'diplomat-stamina',
                field: FeatureField.Stamina,
                value: 18,
                valuePerLevel: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'diplomat-recoveries',
                field: FeatureField.Recoveries,
                value: 8
            }),
            FeatureLogic.createBonusFeature({
                id: 'diplomat-cultural-expertise',
                name: 'Cultural Expertise',
                description: 'Your extensive diplomatic training has given you deep insight into various cultures and customs.',
                field: FeatureField.Reason,
                value: 2
            })
        ]
    }],
    abilities: [],
    subclasses: [],
    level: 1,
    characteristics: []
};

export const StarTrekClasses = {
    starfleetOfficer,
    vigilante,
    trader,
    smuggler,
    diplomat
};
