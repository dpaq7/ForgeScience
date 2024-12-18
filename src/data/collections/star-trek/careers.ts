import { FeatureField } from '../../../enums/feature-field';
import { FeatureLogic } from '../../../logic/feature-logic';
import { Career } from '../../../models/career';
import { SkillList } from '../../../enums/skill-list';
import { FeatureType } from '../../../enums/feature-type';

export const commandOfficer: Career = {
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

export const scienceOfficer: Career = {
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

export const communicationsOfficer: Career = {
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

export const pilot: Career = {
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

export const engineer: Career = {
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

export const securityOfficer: Career = {
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

export const careers = [
    commandOfficer,
    scienceOfficer,
    communicationsOfficer,
    pilot,
    engineer,
    securityOfficer
];
