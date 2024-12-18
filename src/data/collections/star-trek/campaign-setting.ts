import { CampaignSetting } from '../../../models/campaign-setting';
import { StarTrekAncestries } from './ancestries';
import { starfleetOfficer } from './classes';
import { StarTrekKits } from './kits';

export const starTrekSetting: CampaignSetting = {
    id: 'setting-star-trek',
    name: 'Star Trek: The Next Generation',
    description: 'Explore the final frontier in the era of The Next Generation, where diplomacy, discovery, and occasional combat shape the future of the Federation.',
    isHomebrew: true,
    ancestries: [
        StarTrekAncestries.vulcan,
        StarTrekAncestries.klingon,
        StarTrekAncestries.bajoran,
        StarTrekAncestries.cardassian,
        StarTrekAncestries.ferengi,
        StarTrekAncestries.trill,
        StarTrekAncestries.andorian
    ],
    cultures: [],
    careers: [],
    classes: [
        starfleetOfficer
    ],
    complications: [],
    domains: [],
    kits: [
        StarTrekKits.phaser
    ],
    perks: [],
    items: [],
    monsterGroups: [],
    skills: [],
    languages: [],
    defaultLanguages: ['Federation Standard']
};
