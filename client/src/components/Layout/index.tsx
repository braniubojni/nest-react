import Container from '@mui/material/Container';
import * as React from 'react';
import cls from './index.module.scss';
import Sidebar from '../Sidebar';

interface IMainLayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<IMainLayoutProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Container className={cls.container}>
				<Sidebar />
				{children}
			</Container>
		</React.Fragment>
	);
}

export default Layout
