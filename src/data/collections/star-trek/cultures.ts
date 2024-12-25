import { Culture } from '../../../models/culture';
import { FeatureLogic } from '../../../logic/feature-logic';
import { SkillList } from '../../../enums/skill-list';
import { StarTrekLanguages } from './languages';

export class StarTrekEnvironments {
    static starship = FeatureLogic.createSkillChoiceFeature({
        id: 'env-starship',
        name: 'Starship',
        description: 'You were raised aboard a starship, accustomed to the hum of warp engines and the close-knit community of a crew. You\'re comfortable with advanced technology and confined spaces.',
        listOptions: [
            SkillList.Exploration,
            SkillList.Lore
        ]
    });

    static spaceStation = FeatureLogic.createSkillChoiceFeature({
        id: 'env-space-station',
        name: 'Space Station',
        description: 'Growing up on a space station exposed you to diverse species and cultures. You\'re adept at navigating complex social environments and understanding different perspectives.',
        listOptions: [
            SkillList.Interpersonal,
            SkillList.Intrigue
        ]
    });

    static federation = FeatureLogic.createSkillChoiceFeature({
        id: 'env-federation',
        name: 'Federation World',
        description: 'You were raised on a Federation member world, immersed in the ideals of peace, scientific advancement, and cultural exchange.',
        listOptions: [
            SkillList.Lore,
            SkillList.Interpersonal
        ]
    });

    static colony = FeatureLogic.createSkillChoiceFeature({
        id: 'env-colony',
        name: 'Colony World',
        description: 'Life on a colony world taught you resourcefulness and adaptability. Whether a thriving settlement or a struggling outpost, you learned to make do with what you had.',
        listOptions: [
            SkillList.Crafting,
            SkillList.Exploration
        ]
    });

    static getEnvironments = () => {
        return [
            this.starship,
            this.spaceStation,
            this.federation,
            this.colony
        ];
    }
}

export class StarTrekOrganizations {
    static starfleet = FeatureLogic.createSkillChoiceFeature({
        id: 'org-starfleet',
        name: 'Starfleet',
        description: 'You were raised in a family with strong ties to Starfleet, understanding its principles of exploration, scientific discovery, and peacekeeping.',
        listOptions: [
            SkillList.Lore,
            SkillList.Exploration
        ]
    });

    static diplomatic = FeatureLogic.createSkillChoiceFeature({
        id: 'org-diplomatic',
        name: 'Diplomatic Corps',
        description: 'Growing up in the Federation Diplomatic Corps, you learned the art of negotiation and cultural sensitivity.',
        listOptions: [
            SkillList.Interpersonal,
            SkillList.Lore
        ]
    });

    static merchant = FeatureLogic.createSkillChoiceFeature({
        id: 'org-merchant',
        name: 'Merchant Fleet',
        description: 'Your family worked in interstellar trade, exposing you to various cultures and teaching you the value of commerce.',
        listOptions: [
            SkillList.Interpersonal,
            SkillList.Intrigue
        ]
    });

    static scientific = FeatureLogic.createSkillChoiceFeature({
        id: 'org-scientific',
        name: 'Scientific Institute',
        description: 'Raised among scientists and researchers, you developed a deep appreciation for discovery and empirical thinking.',
        listOptions: [
            SkillList.Lore,
            SkillList.Crafting
        ]
    });

    static getOrganizations = () => {
        return [
            this.starfleet,
            this.diplomatic,
            this.merchant,
            this.scientific
        ];
    }
}

export class StarTrekUpbringings {
    static academic = FeatureLogic.createSkillChoiceFeature({
        id: 'up-academic',
        name: 'Academic',
        description: 'You were raised in an environment that valued education and scientific inquiry, attending prestigious institutions like the Vulcan Science Academy or the Daystrom Institute.',
        listOptions: [
            SkillList.Lore
        ]
    });

    static frontier = FeatureLogic.createSkillChoiceFeature({
        id: 'up-frontier',
        name: 'Frontier',
        description: 'Growing up on the edges of Federation space taught you self-reliance and adaptability in challenging situations.',
        listOptions: [
            SkillList.Exploration,
            SkillList.Intrigue
        ]
    });

    static military = FeatureLogic.createSkillChoiceFeature({
        id: 'up-military',
        name: 'Military',
        description: 'Raised in a military family, you learned discipline, strategy, and the importance of duty from an early age.',
        listOptions: [
            SkillList.Exploration,
            SkillList.Interpersonal
        ]
    });

    static civilian = FeatureLogic.createSkillChoiceFeature({
        id: 'up-civilian',
        name: 'Civilian',
        description: 'Your civilian upbringing gave you a grounded perspective on life in the Federation and its values.',
        listOptions: [
            SkillList.Crafting,
            SkillList.Interpersonal
        ]
    });

    static getUpbringings = () => {
        return [
            this.academic,
            this.frontier,
            this.military,
            this.civilian
        ];
    }
}

export class StarTrekCultures {
    static bespokeCulture: Culture = {
        id: 'culture-bespoke-trek',
        name: 'Star Trek Culture',
        description: 'Create your own unique background in the Star Trek universe by choosing your language, environment, organization, and upbringing.',
        languages: StarTrekLanguages.getLanguages().map(lang => lang.name),
        environment: FeatureLogic.createChoiceFeature({
            id: 'culture-environment-choice',
            name: 'Environment',
            description: 'Choose the environment where you were raised.',
            options: StarTrekEnvironments.getEnvironments().map(env => ({ feature: env, value: 1 })),
            count: 1
        }),
        organization: FeatureLogic.createChoiceFeature({
            id: 'culture-organization-choice',
            name: 'Organization',
            description: 'Choose the organization that influenced your upbringing.',
            options: StarTrekOrganizations.getOrganizations().map(org => ({ feature: org, value: 1 })),
            count: 1
        }),
        upbringing: FeatureLogic.createChoiceFeature({
            id: 'culture-upbringing-choice',
            name: 'Upbringing',
            description: 'Choose how you were raised.',
            options: StarTrekUpbringings.getUpbringings().map(up => ({ feature: up, value: 1 })),
            count: 1
        })
    }

    static getLanguages = () => {
        return StarTrekLanguages.getLanguages();
    }

    static cultures: Culture[] = [
        StarTrekCultures.bespokeCulture
    ];
}
