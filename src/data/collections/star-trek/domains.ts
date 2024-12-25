import { Domain } from '../../../models/domain';
import { FeatureLogic } from '../../../logic/feature-logic';

export class StarTrekDomainData {
    static science: Domain = {
        id: 'domain-science',
        name: 'Science',
        description: 'Masters of scientific discovery and analysis, from astrophysics to xenobiology.',
        featuresByLevel: [
            {
                level: 1,
                features: [
                    FeatureLogic.createFeature({
                        id: 'science-analysis',
                        name: 'Scientific Analysis',
                        description: 'You can use your action to analyze a creature, object, or phenomenon, gaining insight into its properties and potential weaknesses.'
                    })
                ]
            }
        ]
    };

    static engineering: Domain = {
        id: 'domain-engineering',
        name: 'Engineering',
        description: 'Experts in starship systems, technology, and mechanical problem-solving.',
        featuresByLevel: [
            {
                level: 1,
                features: [
                    FeatureLogic.createFeature({
                        id: 'engineering-jury-rig',
                        name: 'Jury Rig',
                        description: 'You can quickly improvise repairs or modifications to technological systems, even with limited resources.'
                    })
                ]
            }
        ]
    };

    static medical: Domain = {
        id: 'domain-medical',
        name: 'Medical',
        description: 'Healers and medical researchers skilled in treating diverse species.',
        featuresByLevel: [
            {
                level: 1,
                features: [
                    FeatureLogic.createFeature({
                        id: 'medical-triage',
                        name: 'Emergency Triage',
                        description: 'You can quickly assess and treat injuries in combat situations, providing additional healing to allies.'
                    })
                ]
            }
        ]
    };

    static tactical: Domain = {
        id: 'domain-tactical',
        name: 'Tactical',
        description: 'Masters of combat strategy and defensive operations.',
        featuresByLevel: [
            {
                level: 1,
                features: [
                    FeatureLogic.createFeature({
                        id: 'tactical-assessment',
                        name: 'Tactical Assessment',
                        description: 'You can analyze combat situations to provide tactical advantages to your allies.'
                    })
                ]
            }
        ]
    };

    static command: Domain = {
        id: 'domain-command',
        name: 'Command',
        description: 'Leaders skilled in strategy, decision-making, and crew management.',
        featuresByLevel: [
            {
                level: 1,
                features: [
                    FeatureLogic.createFeature({
                        id: 'command-presence',
                        name: 'Command Presence',
                        description: 'Your presence inspires allies, providing them with advantages in critical situations.'
                    })
                ]
            }
        ]
    };

    static domains: Domain[] = [
        StarTrekDomainData.science,
        StarTrekDomainData.engineering,
        StarTrekDomainData.medical,
        StarTrekDomainData.tactical,
        StarTrekDomainData.command
    ];
}
