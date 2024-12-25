import { AncestryData } from './ancestry-data';
import { CampaignSetting } from '../models/campaign-setting';
import { CareerData } from './career-data';
import { Collections } from '../utils/collections';
import { ComplicationData } from './complication-data';
import { DomainData } from './domain-data';
import { KitData } from './kit-data';
import { SkillData } from './skill-data';
import { SkillList } from '../enums/skill-list';
import { censor } from './classes/censor';
import { conduit } from './classes/conduit';
import { elementalist } from './classes/elementalist';
import { fury } from './classes/fury';
import { nullClass } from './classes/null';
import { shadow } from './classes/shadow';
import { tactician } from './classes/tactician';
import { talent } from './classes/talent';
import { troubadour } from './classes/troubadour';
import { starTrekSetting } from './collections/star-trek/campaign-setting';

export class CampaignSettingData {
	static core: CampaignSetting = {
		id: '',
		name: 'Core',
		description: 'Core game elements.',
		isHomebrew: false,
		ancestries: [
			AncestryData.devil,
			AncestryData.dragonKnight,
			AncestryData.dwarf,
			AncestryData.wodeElf,
			AncestryData.highElf,
			AncestryData.human,
			AncestryData.orc,
			AncestryData.polder,
			AncestryData.revenant
		],
		cultures: [],
		careers: [
			CareerData.artisan,
			CareerData.criminal,
			CareerData.gladiator,
			CareerData.laborer,
			CareerData.magesApprentice,
			CareerData.performer,
			CareerData.sage,
			CareerData.soldier
		],
		classes: [
			conduit,
			elementalist,
			fury,
			shadow,
			tactician
		],
		complications: [
			ComplicationData.cultVictim,
			ComplicationData.devilDeal,
			ComplicationData.elementalAbsorption,
			ComplicationData.fireAndChaos,
			ComplicationData.primordialSickness,
			ComplicationData.punishmentCurse,
			ComplicationData.shipwrecked,
			ComplicationData.vividDreams,
			ComplicationData.ward,
			ComplicationData.warOfTheGuilds
		],
		domains: [
			DomainData.creation,
			DomainData.death,
			DomainData.fate,
			DomainData.knowledge,
			DomainData.life,
			DomainData.love,
			DomainData.nature,
			DomainData.protection,
			DomainData.storm,
			DomainData.sun,
			DomainData.trickery,
			DomainData.war
		],
		kits: [
			KitData.bloodpact,
			KitData.cloakAndDagger,
			KitData.dancer,
			KitData.frigid,
			KitData.guisarmier,
			KitData.martialArtist,
			KitData.meditator,
			KitData.missile,
			KitData.mountain,
			KitData.natureCalling,
			KitData.panther,
			KitData.pugilist,
			KitData.raider,
			KitData.ranger,
			KitData.rapidFire,
			KitData.retiarius,
			KitData.rook,
			KitData.shiningArmor,
			KitData.sniper,
			KitData.spellslinger,
			KitData.stickAndRobe,
			KitData.swashbuckler,
			KitData.wardWeaver,
			KitData.whirlwind,
			KitData.boren,
			KitData.corven,
			KitData.raden,
			KitData.vuken
		],
		perks: [],
		items: [],
		monsterGroups: [],
		skills: SkillData.getCoreSkills(),
		languages: [],
		defaultLanguages: []
	};

	static coreUnreleased: CampaignSetting = {
		id: 'core-unreleased',
		name: 'Core: Unreleased',
		description: 'Unreleased game elements.',
		isHomebrew: false,
		ancestries: [],
		cultures: [],
		careers: [],
		classes: [
			censor,
			nullClass,
			talent,
			troubadour
		],
		complications: [],
		domains: [],
		kits: [],
		perks: [],
		items: [],
		monsterGroups: [],
		skills: [],
		languages: [],
		defaultLanguages: []
	};

	static orden: CampaignSetting = {
		id: 'orden',
		name: 'Orden',
		description: 'The default setting for Draw Steel.',
		isHomebrew: false,
		ancestries: [
			AncestryData.hakaan,
			AncestryData.memonek,
			AncestryData.timeRaider
		],
		cultures: [],
		careers: [],
		classes: [],
		complications: [],
		domains: [],
		kits: [],
		perks: [],
		items: [],
		monsterGroups: [],
		skills: [
			{
				name: 'Timescape',
				description: 'Knowing about the various planets of the timescape',
				list: SkillList.Lore
			}
		],
		languages: [
			{
				name: 'Anjal',
				description: 'Spoken in the Hells and used in legal documents.'
			},
			{
				name: 'Caelian',
				description: 'The language of the ancient Caelian Empire.'
			},
			{
				name: 'Higaran',
				description: 'Spoken in Higara.'
			},
			{
				name: 'Hyrallic',
				description: 'The primary language of the high elves in Orden.'
			},
			{
				name: 'Kalliak',
				description: 'Spoken by orcs; an offshoot of Zaliac.'
			},
			{
				name: 'Khemharic',
				description: 'Spoken in Khemhara.'
			},
			{
				name: 'Khoursirian',
				description: 'Spoken in Koursir.'
			},
			{
				name: 'Oaxuatl',
				description: 'Spoken in Ix.'
			},
			{
				name: 'Phaedran',
				description: 'Spoken in Phaedros.'
			},
			{
				name: 'Riojan',
				description: 'Spoken in Rioja.'
			},
			{
				name: 'Uvalic',
				description: 'Spoken by the Gol.'
			},
			{
				name: 'Vaniric',
				description: 'Spoken in Vanigar.'
			},
			{
				name: 'Vaslorian',
				description: 'Spoken in Vasloria.'
			},
			{
				name: 'Yllyric',
				description: 'The cultural language of wode elves, and also the common language among those who defend and protect the natural forests of Orden.'
			},
			{
				name: 'Zaliac',
				description: 'Spoken by dwarves and used in engineering.'
			}
		],
		defaultLanguages: [
			'Caelian'
		]
	};

	static starTrek: CampaignSetting = starTrekSetting;

	static getCampaignSettings = (homebrewSettings: CampaignSetting[]) => {
		return [
			CampaignSettingData.core,
			CampaignSettingData.orden,
			CampaignSettingData.starTrek,
			...homebrewSettings
		];
	};

	static getLanguages = (settings: CampaignSetting[]) => {
		return Collections.distinct(settings.flatMap(cs => cs.languages), l => l.name);
	};
}
