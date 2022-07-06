import { Avatar, Box, Button, Divider, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMenuOpenContext } from '../../contexts';
import { MenuOptions } from '../menu-options/MenuOptions';
import avatar from '../../../../assets/images/avatar.jpg';

interface ISideMenu {
	children: React.ReactNode;
	userName?: string;
}

export const SideMenu: React.FC<ISideMenu> = ({ children, userName = 'Olá, John' }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const { isMenuOpen, toggleMenuOpen } = useMenuOpenContext();
	return (
		<>
			<Drawer open={isMenuOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleMenuOpen}>
				<Box width={theme.spacing(28)}>
					<Box width='100%'
						height='100px'
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Avatar sx={{ mb: 1, width: '50px', height: '50px' }} src={avatar} />
						<Typography variant='caption' sx={{ fontSize: '12px' }}>{userName}</Typography>
					</Box>
					<Divider />
				</Box>
				<MenuOptions />
			</Drawer>
			<Box height='100vh' marginLeft={smDown ? theme.spacing(0) : theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
