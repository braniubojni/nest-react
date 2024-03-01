import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface IProgressProps {
	className?: string
	value: number
}

const Progress: React.FC<IProgressProps> = ({ className, value }) => {

	return (
		<Box className={className} sx={{ width: '100%' }}>
			<LinearProgress variant="determinate" value={value} />
		</Box>
	);
}

export default Progress;
