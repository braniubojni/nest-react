import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AvatarCard from './AvatarCard';
import LanguagesSkills from './LanguagesSkills';
import PersonalInfo from './PersonalInfo';
import Socials from './Socials';
import cls from './index.module.scss';
import ExtraSkills from './ExtraSkills';

const drawerWidth = 305;

export default function Sidebar() {
	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Box sx={{ overflow: 'auto' }}>
					<AvatarCard />
					<Socials />
					<Divider className={cls.divider} />
					<PersonalInfo />
					<Divider />
					<LanguagesSkills />
					<ExtraSkills />
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			</Box>
		</Box>
	);
}