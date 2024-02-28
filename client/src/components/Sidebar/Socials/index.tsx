import Github from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { List, ListItem, ListItemButton, ListItemIcon, SvgIcon } from "@mui/material";
import { cloneElement } from 'react';
import Gitlab from '../../../assets/general/socials/gitlab.svg';
import cls from './index.module.scss';
import clsx from 'clsx';


const Socials = () => {
	return <List disablePadding className={cls.socials}>
		{[
			{ label: 'Github', icon: <Github /> },
			{ label: 'LinkedIn', icon: <LinkedIn /> },
			{ label: 'Gitlab', icon: <SvgIcon component={Gitlab} /> }
		].map(({ label, icon }) => (
			<ListItem className={clsx(cls[label], cls.listItem)} key={label} disablePadding>
				<ListItemButton className={cls.iconWrapper} disableRipple>
					<ListItemIcon className={cls.icon}>
						{cloneElement(icon, { className: cls[label] })}
					</ListItemIcon>
				</ListItemButton>
			</ListItem>
		))}
	</List>
};

export default Socials