import { Button, Divider, Space } from 'antd';
import { AppHeader } from '../../panels/app-header/app-header';
import { HeaderText } from '../../controls/header-text/header-text';
import { SelectablePanel } from '../../controls/selectable-panel/selectable-panel';

import './welcome-page.scss';

interface Props {
	showAbout: () => void;
	showHeroes: () => void;
	showElements: () => void;
	showMonsters: () => void;
}

export const WelcomePage = (props: Props) => {
	try {
		return (
			<div className='welcome-page'>
				<AppHeader showAbout={props.showAbout}/>
				<div className='welcome-page-content'>
					<div className='welcome-column'>
						<SelectablePanel>
							<HeaderText level={1}>Welcome to FORGE STEEL</HeaderText>
							<div className='ds-text'>
								<b>FORGE STEEL</b> is an app for <b>DRAW STEEL</b>.
							</div>
							<div className='ds-text'>
								With this app you can create heroes using the DRAW STEEL backer packet.
							</div>
							<div className='ds-text'>
								You can export your heroes as PNG or PDF.
							</div>
							<div className='ds-text'>
								You can develop homebrew ancestries, classes, kits and more - anything you need to build a hero.
							</div>
							<div className='ds-text'>
								You can also create homebrew monsters for your heroes to battle.
							</div>
							<Divider />
							<Space direction='vertical' style={{ width: '100%' }}>
								<Button type='primary' block={true} onClick={props.showHeroes}>Start building heroes</Button>
								<Button block={true} onClick={props.showElements}>Browse hero-building elements</Button>
								<Button block={true} onClick={props.showMonsters}>Create homebrew monsters</Button>
							</Space>
						</SelectablePanel>
					</div>
				</div>
			</div>
		);
	} catch (ex) {
		console.error(ex);
		return null;
	}
};
