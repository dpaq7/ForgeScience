import { Button, Divider, Popover } from 'antd';
import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import { Ability } from '../../../../models/ability';
import { Ancestry } from '../../../../models/ancestry';
import { AppHeader } from '../../../panels/app-header/app-header';
import { CampaignSetting } from '../../../../models/campaign-setting';
import { Career } from '../../../../models/career';
import { Characteristic } from '../../../../enums/characteristic';
import { Complication } from '../../../../models/complication';
import { Culture } from '../../../../models/culture';
import { Domain } from '../../../../models/domain';
import { DropdownButton } from '../../../controls/dropdown-button/dropdown-button';
import { Hero } from '../../../../models/hero';
import { HeroClass } from '../../../../models/class';
import { HeroPanel } from '../../../panels/hero-panel/hero-panel';
import { Kit } from '../../../../models/kit';
import { Options } from '../../../../models/options';
import { PanelMode } from '../../../../enums/panel-mode';
import { Toggle } from '../../../controls/toggle/toggle';

import './hero-view-page.scss';

interface Props {
	hero: Hero;
	campaignSettings: CampaignSetting[];
	options: Options;
	setOptions: (options: Options) => void;
	goHome: () => void;
	showAbout: () => void;
	closeHero: () => void;
	editHero: () => void;
	exportHero: (format: 'image' | 'pdf' | 'json') => void;
	deleteHero: () => void;
	onSelectAncestry: (ancestry: Ancestry) => void;
	onSelectCulture: (culture: Culture) => void;
	onSelectCareer: (career: Career) => void;
	onSelectClass: (heroClass: HeroClass) => void;
	onSelectComplication: (complication: Complication) => void;
	onSelectDomain: (domain: Domain) => void;
	onSelectKit: (kit: Kit) => void;
	onSelectCharacteristic: (characteristic: Characteristic, hero: Hero) => void;
	onSelectAbility: (ability: Ability, hero: Hero) => void;
	onShowHeroState: (page: 'hero' | 'stats' | 'conditions') => void;
	onShowRules: () => void;
}

export const HeroPage = (props: Props) => {
	try {
		const setShowSkillsInGroups = (value: boolean) => {
			const copy = JSON.parse(JSON.stringify(props.options)) as Options;
			copy.showSkillsInGroups = value;
			props.setOptions(copy);
		};

		const setShowFreeStrikes = (value: boolean) => {
			const copy = JSON.parse(JSON.stringify(props.options)) as Options;
			copy.showFreeStrikes = value;
			props.setOptions(copy);
		};

		const setShowStandardAbilities = (value: boolean) => {
			const copy = JSON.parse(JSON.stringify(props.options)) as Options;
			copy.showStandardAbilities = value;
			props.setOptions(copy);
		};

		const setDimUnavailableAbilities = (value: boolean) => {
			const copy = JSON.parse(JSON.stringify(props.options)) as Options;
			copy.dimUnavailableAbilities = value;
			props.setOptions(copy);
		};

		return (
			<div className='hero-view-page'>
				<AppHeader subtitle='Heroes' goHome={props.goHome} showAbout={props.showAbout}>
					<Button onClick={props.closeHero}>
						Close
					</Button>
					<Button onClick={() => props.onShowHeroState('hero')}>
						State
					</Button>
					<Button onClick={props.onShowRules}>
						Rules
					</Button>
					<Popover
						trigger='click'
						placement='bottom'
						content={(
							<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
								<Toggle label='Show skills in groups' value={props.options.showSkillsInGroups} onChange={setShowSkillsInGroups} />
								<Toggle label='Show free strikes' value={props.options.showFreeStrikes} onChange={setShowFreeStrikes} />
								<Toggle label='Show standard abilities' value={props.options.showStandardAbilities} onChange={setShowStandardAbilities} />
								<Toggle label='Dim unavailable abilities' value={props.options.dimUnavailableAbilities} onChange={setDimUnavailableAbilities} />
								<Divider />
								<DropdownButton
									label='Export'
									items={[
										{
											key: 'image',
											label: <div className='ds-text centered-text'>Export As Image</div>
										},
										{
											key: 'pdf',
											label: <div className='ds-text centered-text'>Export As PDF</div>
										},
										{
											key: 'json',
											label: <div className='ds-text centered-text'>Export As Data</div>
										}
									]}
									onClick={key => props.exportHero(key as 'image' | 'pdf' | 'json')}
								/>
								<Button icon={<EditOutlined />} onClick={props.editHero}>Edit</Button>
								<Popover
									trigger='click'
									placement='bottom'
									content={(
										<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
											<div>This can't be undone; are you sure?</div>
											<Button danger={true} onClick={props.deleteHero}>Delete</Button>
										</div>
									)}
								>
									<Button icon={<DeleteOutlined />}>Delete</Button>
								</Popover>
							</div>
						)}
					>
						<Button>
							Options
							<DownOutlined />
						</Button>
					</Popover>
				</AppHeader>
				<div className='hero-view-page-content'>
					<HeroPanel
						hero={props.hero}
						campaignSettings={props.campaignSettings}
						options={props.options}
						mode={PanelMode.Full}
						onSelectAncestry={props.onSelectAncestry}
						onSelectCulture={props.onSelectCulture}
						onSelectCareer={props.onSelectCareer}
						onSelectClass={props.onSelectClass}
						onSelectComplication={props.onSelectComplication}
						onSelectDomain={props.onSelectDomain}
						onSelectKit={props.onSelectKit}
						onSelectCharacteristic={characteristic => props.onSelectCharacteristic(characteristic, props.hero)}
						onSelectAbility={ability => props.onSelectAbility(ability, props.hero)}
						onShowState={props.onShowHeroState}
					/>
				</div>
			</div>
		);
	} catch (ex) {
		console.error(ex);
		return null;
	}
};
