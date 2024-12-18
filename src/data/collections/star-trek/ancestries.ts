import { Ancestry } from '../../../models/ancestry';
import { FeatureField } from '../../../enums/feature-field';
import { FeatureLogic } from '../../../logic/feature-logic';

export class StarTrekAncestries {
    static vulcan: Ancestry = {
        id: 'ancestry-vulcan',
        name: 'Vulcan',
        description: 'A humanoid species from the planet Vulcan, known for their pointed ears, upswept eyebrows, and most notably their commitment to logic and reason over emotion. Vulcans possess great physical strength, superior mental abilities, and are capable of mind melding.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'vulcan-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'vulcan-strength',
                name: 'Superior Physiology',
                description: 'Vulcans possess greater physical strength than most humanoids.',
                field: FeatureField.Might,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'vulcan-intellect',
                name: 'Logical Mind',
                description: 'Vulcans are trained from birth to suppress emotion and rely on logic.',
                field: FeatureField.Reason,
                value: 2
            })
        ]
    };

    static klingon: Ancestry = {
        id: 'ancestry-klingon',
        name: 'Klingon',
        description: 'A warrior species from Qo\'noS, known for their great strength, honor-based culture, and distinctive forehead ridges. Klingons value combat prowess and personal honor above all else.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'klingon-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'klingon-strength',
                name: 'Warrior Physiology',
                description: 'Klingons are naturally stronger than most humanoids and possess redundant organ systems.',
                field: FeatureField.Might,
                value: 3
            }),
            FeatureLogic.createBonusFeature({
                id: 'klingon-endurance',
                name: 'Redundant Biology',
                description: 'Klingon bodies have redundant organs and systems, making them incredibly resilient.',
                field: FeatureField.Stamina,
                value: 2
            })
        ]
    };

    static bajoran: Ancestry = {
        id: 'ancestry-bajoran',
        name: 'Bajoran',
        description: 'A deeply spiritual humanoid species from Bajor, distinguished by their nose ridges. Bajorans are known for their strong faith, artistic abilities, and resilience in the face of adversity.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'bajoran-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'bajoran-spirit',
                name: 'Spiritual Insight',
                description: 'Bajorans have a deep connection to their faith and spiritual matters.',
                field: FeatureField.Presence,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'bajoran-resolve',
                name: 'Unbreakable Will',
                description: 'Years of resistance against occupation have bred incredible resilience into the Bajoran people.',
                field: FeatureField.Stability,
                value: 2
            })
        ]
    };

    static cardassian: Ancestry = {
        id: 'ancestry-cardassian',
        name: 'Cardassian',
        description: 'A humanoid species from Cardassia Prime, known for their disciplined minds, photographic memories, and complex social hierarchies. Cardassians are distinguished by their gray skin and ridged neck and facial features.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'cardassian-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'cardassian-memory',
                name: 'Photographic Memory',
                description: 'Cardassians possess exceptional memory and mental discipline.',
                field: FeatureField.Reason,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'cardassian-endurance',
                name: 'Desert Adaptation',
                description: 'Cardassians evolved on a hot, arid world, giving them natural resilience.',
                field: FeatureField.Stamina,
                value: 2
            })
        ]
    };

    static ferengi: Ancestry = {
        id: 'ancestry-ferengi',
        name: 'Ferengi',
        description: 'A humanoid species from Ferenginar, characterized by their large ears, head ridges, and sharp business acumen. Ferengi society revolves around the pursuit of profit and the Rules of Acquisition.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'ferengi-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'ferengi-hearing',
                name: 'Sensitive Hearing',
                description: 'Ferengi possess exceptionally large ears giving them acute hearing.',
                field: FeatureField.Intuition,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'ferengi-cunning',
                name: 'Business Acumen',
                description: 'Ferengi are raised from birth to understand complex business and social negotiations.',
                field: FeatureField.Presence,
                value: 2
            })
        ]
    };

    static trill: Ancestry = {
        id: 'ancestry-trill',
        name: 'Trill',
        description: 'A humanoid species from Trill, distinguished by spots running down the sides of their bodies. Some Trill are joined with a symbiont, gaining access to the memories and experiences of previous hosts.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'trill-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'trill-insight',
                name: 'Symbiotic Potential',
                description: 'Even unjoined Trill possess a natural affinity for processing complex experiences and memories.',
                field: FeatureField.Reason,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'trill-adaptability',
                name: 'Adaptive Nature',
                description: 'Trill biology is highly adaptable, allowing them to potentially join with a symbiont.',
                field: FeatureField.Agility,
                value: 2
            })
        ]
    };

    static andorian: Ancestry = {
        id: 'ancestry-andorian',
        name: 'Andorian',
        description: 'A blue-skinned humanoid species from the ice moon Andoria, distinguished by their antenna and white hair. Andorians are known for their warrior culture, passion, and heightened sense of honor.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'andorian-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'andorian-antennae',
                name: 'Sensory Antennae',
                description: 'Andorian antennae provide enhanced spatial awareness and can detect atmospheric changes.',
                field: FeatureField.Intuition,
                value: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'andorian-cold-resistance',
                name: 'Ice Moon Adaptation',
                description: 'Andorians evolved on an ice moon, giving them natural resistance to cold and excellent mobility in icy conditions.',
                field: FeatureField.Agility,
                value: 2
            })
        ]
    };
}
