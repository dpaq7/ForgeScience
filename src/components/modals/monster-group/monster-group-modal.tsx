import { Button, Popover } from 'antd';
import { CampaignSetting } from '../../../models/campaign-setting';
import { MonsterGroup } from '../../../models/monster';
import { MonsterGroupPanel } from '../../panels/monster-group-panel/monster-group-panel';
import { PanelMode } from '../../../enums/panel-mode';

import './monster-group-modal.scss';

interface Props {
	monsterGroup: MonsterGroup;
	homebrewSettings: CampaignSetting[];
	isHomebrew: boolean;
	createHomebrew: (setting: CampaignSetting | null) => void;
	export: (format: 'image' | 'pdf' | 'json') => void;
	edit: () => void;
	delete: () => void;
}

export const MonsterGroupModal = (props: Props) => {
	try {
		return (
			<div className='monster-group-modal'>
				<div className='toolbar'>
					{
						props.isHomebrew ?
							<Button onClick={props.edit}>Edit</Button>
							:
							<Popover
								trigger='click'
								placement='bottom'
								content={(
									<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
										{
											props.homebrewSettings.map(cs => <Button key={cs.id} onClick={() => props.createHomebrew(cs)}>In {cs.name || 'Unnamed Collection'}</Button>)
										}
										<Button onClick={() => props.createHomebrew(null)}>In a new collection</Button>
									</div>
								)}
							>
								<Button>
									Create Homebrew Version
								</Button>
							</Popover>
					}
					<Popover
						trigger='click'
						placement='bottom'
						content={(
							<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
								<Button onClick={() => props.export('image')}>Export As Image</Button>
								<Button onClick={() => props.export('pdf')}>Export As PDF</Button>
								<Button onClick={() => props.export('json')}>Export as Data</Button>
							</div>
						)}
					>
						<Button>
							Export
						</Button>
					</Popover>
					{
						props.isHomebrew ?
							<Popover
								trigger='click'
								placement='bottom'
								content={(
									<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
										<div>This can't be undone; are you sure?</div>
										<Button danger={true} onClick={props.delete}>Delete</Button>
									</div>
								)}
							>
								<Button>
									Delete
								</Button>
							</Popover>
							: null
					}
				</div>
				<MonsterGroupPanel monsterGroup={props.monsterGroup} mode={PanelMode.Full} />
			</div>
		);
	} catch (ex) {
		console.error(ex);
		return null;
	}
};
