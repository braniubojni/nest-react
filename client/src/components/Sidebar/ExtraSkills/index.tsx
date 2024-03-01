import { List, ListItem, ListItemText, SvgIcon } from "@mui/material";
import cpIcon from '../../../assets/general/skills/cp.svg';
import cls from './index.module.scss';


const ExtraSkills = () => {
	const extraSkills = [
		{ names: 'AWS S3,  Azure Blob storage' },
		{ names: 'Scss, Less, MUI' },
		{ names: 'Golang, Scraping, Puppeteer' },
		{ names: 'PrismaORM, TypeORM, knex.js' },
	];
	return (
		<List disablePadding className={cls.listWrapper}>
			<ListItem className={cls.wrapper}>
				<ListItemText className={cls.title} primary={"Extra Skills"} />
				<List disablePadding className={cls.skillWrapper}>
					{extraSkills.map(({ names }) => (
						<ListItem disablePadding className={cls.skills} key={names}>
							<SvgIcon component={cpIcon} /> <span>{names}</span>
						</ListItem>
					))}
				</List>
			</ListItem>
		</List>
	)
};

export default ExtraSkills