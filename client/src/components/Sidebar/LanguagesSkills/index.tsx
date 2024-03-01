import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import Progress from "../../common/progress";
import cls from './index.module.scss';

const LanguagesSkills = () => {
	const data = [
		{
			title: 'Languages',
			info: [
				{ name: 'English', percent: 80 },
				{ name: 'Russian', percent: 100 },
				{ name: 'Armenian', percent: 100 },
			]
		},
		{
			title: 'Skills',
			info: [
				{ name: 'TypeScript / JavaScript', percent: 95 },
				{ name: 'Express / Fastify / Nest.JS', percent: 86 },
				{ name: 'PostgreSQL / Redis / MongoDB', percent: 87 },
				{ name: 'React / Vue2-3 / PureJS', percent: 100 },
			]
		}
	];
	return (
		<List disablePadding className={cls.listWrapper}>{
			data.map(({ title, info }) => {
				return (
					<Fragment key={title}>
						<ListItem className={cls.wrapper}>
							<ListItemText className={cls.title} primary={title} />
							<List className={cls.list}>
								{info.map(({ name, percent }) => {
									return (
										<Fragment key={name}>
											<ListItem className={cls.listItem} disablePadding>
												<span className={cls.listItemName}>{name}:</span> <span className={cls.listItemNamePercent}>{percent}%</span>
											</ListItem>
											<ListItem disablePadding className={cls.progress}>
												<Progress className={cls.progressBar} value={percent} />
											</ListItem>
										</Fragment>
									)
								})}
							</List>
						</ListItem>
						<Divider />
					</Fragment>
				)
			})}</List>
	)
}

export default LanguagesSkills