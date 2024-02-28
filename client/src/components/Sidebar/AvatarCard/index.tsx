import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MyAvatar from '../../../assets/general/avatar.png';
import cls from './index.module.scss';


export default function AvatarCard() {
	return (
		<Card className={cls.avatar_wrapper}>
			<Box className={cls.header}>
				<CardMedia
					className={cls.image}
					component="img"
					height="140"
					image={MyAvatar}
					alt="green iguana"
				/>
				<Box className={cls.name}>
					Erik Harutyunyan
				</Box>
				<Box className={cls.position}>
					Full Stack Developer
				</Box>
			</Box>
		</Card>
	);
}