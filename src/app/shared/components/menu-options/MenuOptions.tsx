import { ArrowBackIos, ArrowLeft, Brightness4 } from '@mui/icons-material';
import { Box, Icon, IconButton, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useMenuOpenContext } from '../../contexts';

interface IMenuItemLink {
	to: string;
	label: string;
	icon: string;
	onClick: (() => void) | undefined;
}

const MenuItemLink: React.FC<IMenuItemLink> = ({ to, label, icon, onClick }) => {
	const navigate = useNavigate();
	const resolvedPath = useResolvedPath(to);
	const match = useMatch({ path: resolvedPath.pathname, end: false });

	const handleClick = () => {
		navigate(to);
		onClick?.();
	};

	return (
		<ListItemButton onClick={handleClick} selected={!!match}>
			<ListItemIcon>
				<Icon>{icon}</Icon>
			</ListItemIcon>
			<ListItemText>
				<Typography variant='caption'>
					{label}
				</Typography>
			</ListItemText>
		</ListItemButton>
	);
};

export const MenuOptions = () => {
	const { toggleTheme } = useAppThemeContext();
	const { toggleMenuOpen } = useMenuOpenContext();
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box display='flex' flexDirection='column' height='100%'>
			<Box>
				<MenuItemLink
					to='/pagina-inicial'
					icon='home'
					label='Página inicial'
					onClick={toggleMenuOpen}
				/>
				<MenuItemLink
					to='/tarefas'
					icon='assignment'
					label='Tarefas'
					onClick={toggleMenuOpen}
				/>
			</Box>
			<Box flex={1} position='absolute' top={0} right={0}>
				<IconButton onClick={toggleTheme}>
					<Brightness4 sx={{ fontSize: '17px' }} />
				</IconButton>
				{smDown &&
					<IconButton onClick={toggleMenuOpen}>
						<ArrowLeft sx={{ fontSize: '17px' }} />
					</IconButton>
				}
			</Box>
		</Box >
	);
};
