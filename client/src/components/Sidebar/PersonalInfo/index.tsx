import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import cls from './index.module.scss';


export default function PersonalInfo() {
	return (
		<List disablePadding className={cls.list}>
			{[
				{ title: 'Age', val: '28' },
				{ title: 'Residence', val: 'AM' },
				{ title: 'Freelance', val: 'Available' },
				{ title: 'Address', val: 'Erevan, Armenai' },
			]
				.map(({ title, val }) => (
					<ListItem className={cls.listItem} key={title} disablePadding>
						<ListItemButton className={cls.listItemBtn}>
							<span className={cls.listItemTxt}>{title}:</span> <span className={cls[val]}>{val}</span>
						</ListItemButton>
					</ListItem>
				))}
		</List>
	);
}