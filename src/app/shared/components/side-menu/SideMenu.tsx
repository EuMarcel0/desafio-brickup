import { Avatar, Box, Divider, Drawer, Typography, useTheme } from '@mui/material';
import { MenuOptions } from '../menu-options/MenuOptions';

interface ISideMenu {
	children: React.ReactNode;
	userName?: string;
}

export const SideMenu: React.FC<ISideMenu> = ({ children, userName = 'Olá, Rafael' }) => {
	const theme = useTheme();

	return (
		<>
			<Drawer variant='permanent'>
				<Box width={theme.spacing(28)}>
					<Box width='100%'
						height='100px'
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Avatar sx={{ mb: 1 }} />
						<Typography variant='caption'>{userName}</Typography>
					</Box>
					<Divider />
				</Box>
				<MenuOptions />
			</Drawer>
			<Box height='100vh' marginLeft={theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
