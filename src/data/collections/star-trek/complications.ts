import { Complication } from '../../../models/complication';
import { FeatureLogic } from '../../../logic/feature-logic';

export class StarTrekComplicationData {
    static primeDirective: Complication = {
        id: 'complication-prime-directive',
        name: 'Prime Directive Violation',
        description: 'You have violated or are struggling with the Federation\'s Prime Directive of non-interference. This weighs heavily on your conscience and affects your decision-making.',
        features: [
            FeatureLogic.createFeature({
                id: 'prime-directive-feature',
                name: 'Moral Burden',
                description: 'You gain enhanced understanding of cultural dynamics, but must succeed on a Will save when decisions could affect pre-warp civilizations.'
            })
        ]
    };

    static borgImplants: Complication = {
        id: 'complication-borg-implants',
        name: 'Borg Implant Remnants',
        description: 'You retain some Borg implants from a previous assimilation attempt. While they grant some benefits, they also cause physical and psychological complications.',
        features: [
            FeatureLogic.createFeature({
                id: 'borg-implants-feature',
                name: 'Cybernetic Integration',
                description: 'You have enhanced technological capabilities, but must make periodic Will saves to resist the lingering influence of the Collective.'
            })
        ]
    };

    static telepathicTrauma: Complication = {
        id: 'complication-telepathic-trauma',
        name: 'Telepathic Trauma',
        description: 'Past exposure to powerful telepathic entities has left lasting mental scars, making you vulnerable to psychic influences.',
        features: [
            FeatureLogic.createFeature({
                id: 'telepathic-trauma-feature',
                name: 'Psychic Sensitivity',
                description: 'You have advantage on detecting telepathic presences, although you suffer disadvantage on saves against telepathic abilities.'
            })
        ]
    };

    static temporalIncursion: Complication = {
        id: 'complication-temporal-incursion',
        name: 'Temporal Incursion',
        description: 'You have been affected by temporal anomalies, causing occasional disconnects with the present timeline.',
        features: [
            FeatureLogic.createFeature({
                id: 'temporal-incursion-feature',
                name: 'Time Displacement',
                description: 'You gain insight into possible futures, yet experience occasional temporal displacement confusion.'
            })
        ]
    };

    static alienHeritage: Complication = {
        id: 'complication-alien-heritage',
        name: 'Mysterious Alien Heritage',
        description: 'You\'ve discovered that one of your ancestors was from an unknown alien species, causing occasional manifestations of strange abilities.',
        features: [
            FeatureLogic.createFeature({
                id: 'alien-heritage-feature',
                name: 'Latent Powers',
                description: 'You can tap into your alien heritage for enhanced abilities, though each use risks temporary physical transformation.'
            })
        ]
    };

    static quantumDuplication: Complication = {
        id: 'complication-quantum-duplication',
        name: 'Quantum Duplication',
        description: 'A transporter accident has created quantum duplicates of you across parallel universes, occasionally causing reality to blur.',
        features: [
            FeatureLogic.createFeature({
                id: 'quantum-duplication-feature',
                name: 'Quantum Resonance',
                description: 'You can glimpse actions of your alternate selves, however this risks temporary phase shifts between realities.'
            })
        ]
    };

    static holoAddiction: Complication = {
        id: 'complication-holo-addiction',
        name: 'Holodeck Addiction',
        description: 'You\'ve developed an unhealthy attachment to holodeck simulations, making it difficult to distinguish reality from fantasy.',
        features: [
            FeatureLogic.createFeature({
                id: 'holo-addiction-feature',
                name: 'Enhanced Simulation',
                description: 'While you excel in holographic environments, you must make Will saves to leave them voluntarily.'
            })
        ]
    };

    static xenoDisease: Complication = {
        id: 'complication-xeno-disease',
        name: 'Exotic Xenobiological Condition',
        description: 'You\'ve contracted a rare alien disease that causes unusual symptoms and requires constant monitoring.',
        features: [
            FeatureLogic.createFeature({
                id: 'xeno-disease-feature',
                name: 'Adaptive Symptoms',
                description: 'Your condition grants occasional beneficial mutations, though it requires regular medical attention to maintain stability.'
            })
        ]
    };

    static secretIdentity: Complication = {
        id: 'complication-secret-identity',
        name: 'Section 31 Operative',
        description: 'You\'re secretly working for Section 31, forcing you to balance your official duties with clandestine operations.',
        features: [
            FeatureLogic.createFeature({
                id: 'secret-identity-feature',
                name: 'Covert Resources',
                description: 'You have access to classified intelligence and equipment, but must maintain your cover at all costs.'
            })
        ]
    };

    static artificialConsciousness: Complication = {
        id: 'complication-artificial-consciousness',
        name: 'Artificial Consciousness Transfer',
        description: 'Your consciousness has been partially uploaded to a computer system, creating a unique hybrid state of existence.',
        features: [
            FeatureLogic.createFeature({
                id: 'artificial-consciousness-feature',
                name: 'Digital Integration',
                description: 'You can interface directly with computer systems, although you are vulnerable to electronic interference and hacking attempts.'
            })
        ]
    };

    static complications: Complication[] = [
        StarTrekComplicationData.primeDirective,
        StarTrekComplicationData.borgImplants,
        StarTrekComplicationData.telepathicTrauma,
        StarTrekComplicationData.temporalIncursion
    ];
}
