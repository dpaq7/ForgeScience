import { CampaignSetting } from '../../../models/campaign-setting';
import { StarTrekAncestries } from './ancestries';
import { StarTrekCareers } from './careers';
import { StarTrekClasses } from './classes';
import { StarTrekCultures } from './cultures';
import { StarTrekKits } from './kits';
import { StarTrekLanguages } from './languages';
import { SkillList } from '../../../enums/skill-list';
import { StarTrekComplicationData } from './complications';
import { StarTrekDomainData } from './domains';
import { Skill } from '../../../models/skill';
import { Language } from '../../../models/language';

export const starTrekSetting: CampaignSetting = {
    id: 'star-trek-setting',
    name: 'Star Trek',
    description: 'Explore the final frontier in this science fiction setting based on Star Trek. Command starships, explore strange new worlds, and boldly go where no one has gone before.',
    isHomebrew: true,
    ancestries: StarTrekAncestries.ancestries,
    classes: StarTrekClasses.starTrekClasses,
    careers: StarTrekCareers.careers,
    cultures: StarTrekCultures.cultures,
    kits: StarTrekKits.allKits,
    complications: StarTrekComplicationData.complications,
    domains: StarTrekDomainData.domains,
    skills: Object.values(SkillList).map(skill => ({
        id: skill,
        name: skill,
        description: `Proficiency in ${skill}`,
        list: skill
    })) as Skill[],
    languages: [
        { name: 'Federation Standard', description: 'The common language of the United Federation of Planets' },
        { name: 'Klingon', description: 'The language of the Klingon Empire' },
        { name: 'Romulan', description: 'The language of the Romulan Star Empire' },
        { name: 'Vulcan', description: 'The ancient language of Vulcan' }
    ] as Language[],
    defaultLanguages: ['Federation Standard'],
    perks: [],
    items: [],
    monsterGroups: []
};
