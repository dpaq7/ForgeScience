import { Ancestry } from '../../../models/ancestry';
import { FeatureField } from '../../../enums/feature-field';
import { FeatureLogic } from '../../../logic/feature-logic';
import { DamageModifierType } from '../../../enums/damage-modifier-type';

export class StarTrekAncestries {
    static human: Ancestry = {
        id: 'ancestry-human',
        name: 'Human',
        description: 'Humans from Earth are known for their adaptability, curiosity, and determination. Their greatest strength lies in their diversity and ability to work together despite their differences.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'human-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'human-adaptability',
                name: 'Human Adaptability',
                description: 'Humans are remarkably adaptable, able to thrive in various environments and situations.',
                field: FeatureField.Stability,
                value: 2
            }),
            FeatureLogic.createChoiceFeature({
                id: 'human-specialization',
                name: 'Human Specialization',
                description: 'Humans excel in their chosen fields of expertise.',
                options: [
                    {
                        feature: FeatureLogic.createBonusFeature({
                            id: 'human-diplomatic',
                            name: 'Diplomatic Prowess',
                            description: 'You have a natural talent for diplomacy and negotiation.',
                            field: FeatureField.Presence,
                            value: 2
                        }),
                        value: 1
                    },
                    {
                        feature: FeatureLogic.createBonusFeature({
                            id: 'human-tactical',
                            name: 'Tactical Insight',
                            description: 'You possess an innate understanding of combat tactics.',
                            field: FeatureField.Might,
                            value: 2
                        }),
                        value: 1
                    },
                    {
                        feature: FeatureLogic.createBonusFeature({
                            id: 'human-scientific',
                            name: 'Scientific Mind',
                            description: 'Your analytical abilities are particularly sharp.',
                            field: FeatureField.Reason,
                            value: 2
                        }),
                        value: 1
                    }
                ],
                count: 1
            })
        ]
    };

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
                id: 'vulcan-logic',
                name: 'Logical Mind',
                description: 'Vulcans are trained from birth to suppress emotion and embrace logic.',
                field: FeatureField.Reason,
                value: 2
            }),
            FeatureLogic.createFeature({
                id: 'vulcan-mind-meld',
                name: 'Mind Meld',
                description: 'You can establish a telepathic bond with a willing creature by touching them, allowing you to share thoughts and memories.'
            }),
            FeatureLogic.createDamageModifierFeature({
                id: 'vulcan-mental-discipline',
                name: 'Mental Discipline',
                description: 'Your rigorous mental training provides resistance against psychic attacks.',
                modifiers: [{
                    type: DamageModifierType.Resistance,
                    damageType: 'Psychic',
                    value: 2,
                    valuePerLevel: 0
                }]
            })
        ]
    };

    static klingon: Ancestry = {
        id: 'ancestry-klingon',
        name: 'Klingon',
        description: 'A warrior species known for their strength, honor, and combat prowess. Klingons possess enhanced physical capabilities due to their redundant organ systems.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'klingon-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'klingon-strength',
                name: 'Warrior Physique',
                description: 'Klingons are naturally stronger than most humanoids.',
                field: FeatureField.Might,
                value: 3
            }),
            FeatureLogic.createDamageModifierFeature({
                id: 'klingon-redundancy',
                name: 'Redundant Organs',
                description: 'Your backup organ systems provide enhanced survivability.',
                modifiers: [{
                    type: DamageModifierType.Resistance,
                    damageType: 'Physical',
                    value: 1,
                    valuePerLevel: 0
                }]
            }),
            FeatureLogic.createChoiceFeature({
                id: 'klingon-house',
                name: 'Great House',
                description: 'Your family belongs to one of the Great Houses of the Klingon Empire.',
                options: [
                    {
                        feature: FeatureLogic.createBonusFeature({
                            id: 'klingon-warrior',
                            name: 'House of Warriors',
                            description: 'Your house is renowned for producing legendary warriors.',
                            field: FeatureField.Might,
                            value: 1
                        }),
                        value: 1
                    },
                    {
                        feature: FeatureLogic.createBonusFeature({
                            id: 'klingon-tactician',
                            name: 'House of Tacticians',
                            description: 'Your house is known for its military strategists.',
                            field: FeatureField.Reason,
                            value: 1
                        }),
                        value: 1
                    }
                ],
                count: 1
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

    static betazoid: Ancestry = {
        id: 'ancestry-betazoid',
        name: 'Betazoid',
        description: 'A telepathic humanoid species known for their empathic and telepathic abilities. Betazoids are naturally peaceful and highly empathetic.',
        features: [
            FeatureLogic.createSizeFeature({
                id: 'betazoid-size',
                sizeValue: 1,
                sizeMod: 'M'
            }),
            FeatureLogic.createBonusFeature({
                id: 'betazoid-empathy',
                name: 'Empathic Sense',
                description: 'You can naturally sense the emotions of others around you.',
                field: FeatureField.Intuition,
                value: 2
            }),
            FeatureLogic.createFeature({
                id: 'betazoid-telepathy',
                name: 'Telepathic Communication',
                description: 'You can communicate telepathically with other willing creatures within 30 feet.'
            }),
            FeatureLogic.createChoiceFeature({
                id: 'betazoid-gift',
                name: 'Telepathic Gift',
                description: 'Your telepathic abilities have manifested in a particular way.',
                options: [
                    {
                        feature: FeatureLogic.createFeature({
                            id: 'betazoid-projection',
                            name: 'Telepathic Projection',
                            description: 'You can project your thoughts more strongly, extending your telepathic range to 60 feet.'
                        }),
                        value: 1
                    },
                    {
                        feature: FeatureLogic.createFeature({
                            id: 'betazoid-shield',
                            name: 'Mental Shield',
                            description: 'You can create a mental barrier that protects you from unwanted telepathic intrusion.'
                        }),
                        value: 1
                    }
                ],
                count: 1
            })
        ]
    };

    static ancestries: Ancestry[] = [
        StarTrekAncestries.human,
        StarTrekAncestries.vulcan,
        StarTrekAncestries.klingon,
        StarTrekAncestries.bajoran,
        StarTrekAncestries.cardassian,
        StarTrekAncestries.ferengi,
        StarTrekAncestries.trill,
        StarTrekAncestries.andorian,
        StarTrekAncestries.betazoid
    ];
}
