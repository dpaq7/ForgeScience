import { FeatureField } from '../../../enums/feature-field';
import { FeatureLogic } from '../../../logic/feature-logic';
import { Career } from '../../../models/career';
import { SkillList } from '../../../enums/skill-list';
import { FeatureType } from '../../../enums/feature-type';

export class StarTrekCareers {
    static commandOfficer: Career = {
        id: 'career-command-officer',
        name: 'Command Officer',
        description: 'You are trained in leadership and tactical decision-making, responsible for commanding starships and coordinating crew operations. Your expertise lies in strategy, diplomacy, and crisis management.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'command-officer-feature-1',
                listOptions: [SkillList.Interpersonal, SkillList.Intrigue],
                count: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'command-officer-feature-2',
                field: FeatureField.Presence,
                value: 1
            })
        ],
        title: {
            id: 'command-officer-title',
            name: 'Command Officer Title',
            description: 'Your rank and title within Starfleet Command',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [],
            selectedID: null
        }
    };

    static scienceOfficer: Career = {
        id: 'career-science-officer',
        name: 'Science Officer',
        description: 'As a science officer, you specialize in scientific analysis, research, and exploration. Your expertise spans multiple scientific disciplines, from xenobiology to quantum physics.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'science-officer-feature-1',
                listOptions: [SkillList.Science, SkillList.Medicine, SkillList.Technology],
                count: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'science-officer-feature-2',
                field: FeatureField.Reason,
                value: 1
            })
        ],
        title: {
            id: 'science-officer-title',
            name: 'Science Officer Title',
            description: 'Your rank and title within Starfleet Science Division',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [],
            selectedID: null
        }
    };

    static communicationsOfficer: Career = {
        id: 'career-communications-officer',
        name: 'Communications Officer',
        description: 'You are an expert in interstellar communications, linguistics, and cultural interpretation. Your role is crucial in facilitating understanding between different species and maintaining clear channels of communication.',
        title: FeatureLogic.createFeature({
            id: 'communications-officer-title',
            name: 'Communications Officer',
            description: ''
        }),
        incitingIncidents: {
            options: [],
            selectedID: null
        },
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'communications-officer-feature-1',
                listOptions: [SkillList.Interpersonal, SkillList.Lore],
                count: 2
            }),
            FeatureLogic.createLanguageChoiceFeature({
                id: 'communications-officer-feature-2'
            })
        ]
    };

    static pilot: Career = {
        id: 'career-pilot',
        name: 'Pilot',
        description: 'You excel at navigating vessels through space, from small shuttlecraft to massive starships. Your skills include stellar cartography, combat maneuvers, and emergency flight procedures.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'pilot-feature-1',
                listOptions: [SkillList.Technology, SkillList.Exploration],
                count: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'pilot-feature-2',
                field: FeatureField.Agility,
                value: 1
            })
        ],
        title: FeatureLogic.createFeature({
            id: 'pilot-title',
            name: 'Pilot',
            description: 'Expert in spacecraft navigation and flight operations'
        }),
        incitingIncidents: {
            options: [
                {
                    id: 'pilot-incident-1',
                    name: 'Emergency Landing',
                    description: 'You successfully landed a damaged vessel, saving the crew'
                },
                {
                    id: 'pilot-incident-2',
                    name: 'Navigation Challenge',
                    description: 'You plotted a course through a dangerous stellar phenomenon'
                }
            ],
            selectedID: null
        }
    };

    static engineer: Career = {
        id: 'career-engineer',
        name: 'Engineer',
        description: 'You are a skilled technician and problem solver, responsible for maintaining and improving the complex systems aboard starships. Your expertise ranges from warp drive mechanics to transporter systems.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'engineer-feature-1',
                listOptions: [SkillList.Technology, SkillList.Crafting],
                count: 2
            })
        ],
        title: {
            id: 'engineer-title',
            name: 'Engineering Officer Title',
            description: 'Your rank and title within Starfleet Engineering Division',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [],
            selectedID: null
        }
    };

    static securityOfficer: Career = {
        id: 'career-security-officer',
        name: 'Security Officer',
        description: 'You are responsible for the safety and protection of your crew and vessel. Your training encompasses combat tactics, threat assessment, and internal security protocols, making you the first line of defense against any dangers.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'security-officer-feature-1',
                listOptions: [SkillList.Technology, SkillList.Exploration],
                count: 2
            })
        ],
        title: {
            id: 'security-officer-title',
            name: 'Security Officer Title',
            description: 'Your rank and title within Starfleet Security Division',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [],
            selectedID: null
        }
    };

    static medicalOfficer: Career = {
        id: 'career-medical-officer',
        name: 'Medical Officer',
        description: 'As a medical officer, you are trained in advanced xenobiology and emergency medicine. Your expertise spans multiple species and includes both routine healthcare and critical emergency response.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'medical-officer-feature-1',
                listOptions: [SkillList.Medicine, SkillList.Science],
                count: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'medical-officer-feature-2',
                field: FeatureField.Reason,
                value: 1
            })
        ],
        title: {
            id: 'medical-officer-title',
            name: 'Medical Officer Title',
            description: 'Your rank and title within Starfleet Medical',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [
                {
                    id: 'medical-incident-1',
                    name: 'Emergency Response',
                    description: 'You successfully treated a critical patient during a crisis situation'
                },
                {
                    id: 'medical-incident-2',
                    name: 'Xenobiological Discovery',
                    description: 'You made a breakthrough in understanding an alien species\' biology'
                }
            ],
            selectedID: null
        }
    };

    static diplomat: Career = {
        id: 'career-diplomat',
        name: 'Diplomat',
        description: 'You are a skilled negotiator and cultural expert, representing the Federation in diplomatic missions. Your role involves mediating conflicts, establishing relationships with new species, and maintaining peace between different civilizations.',
        features: [
            FeatureLogic.createSkillChoiceFeature({
                id: 'diplomat-feature-1',
                listOptions: [SkillList.Interpersonal, SkillList.Intrigue],
                count: 2
            }),
            FeatureLogic.createBonusFeature({
                id: 'diplomat-feature-2',
                field: FeatureField.Presence,
                value: 1
            }),
            FeatureLogic.createLanguageChoiceFeature({
                id: 'diplomat-feature-3'
            })
        ],
        title: {
            id: 'diplomat-title',
            name: 'Diplomatic Title',
            description: 'Your position within the Federation Diplomatic Corps',
            type: FeatureType.Text,
            data: null
        },
        incitingIncidents: {
            options: [
                {
                    id: 'diplomat-incident-1',
                    name: 'Peace Treaty',
                    description: 'You helped broker peace between warring factions'
                },
                {
                    id: 'diplomat-incident-2',
                    name: 'First Contact',
                    description: 'You were part of a first contact mission with a new species'
                }
            ],
            selectedID: null
        }
    };

    static careers: Career[] = [
        StarTrekCareers.commandOfficer,
        StarTrekCareers.scienceOfficer,
        StarTrekCareers.communicationsOfficer,
        StarTrekCareers.pilot,
        StarTrekCareers.engineer,
        StarTrekCareers.securityOfficer,
        StarTrekCareers.medicalOfficer,
        StarTrekCareers.diplomat
    ];
}
