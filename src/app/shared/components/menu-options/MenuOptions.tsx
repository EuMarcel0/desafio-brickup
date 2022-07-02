import { Brightness4 } from '@mui/icons-material';
import { Box, Icon, IconButton, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppThemeContext } from '../../contexts';


export const MenuOptions = () => {
	const { toggleTheme } = useAppThemeContext();

	return (
		<Box display='flex' flexDirection='column' height='100%'>
			<Box>
				<Link to='/pagina-inicial'>
					<ListItemButton >
						<ListItemIcon>
							<Icon>home</Icon>
						</ListItemIcon>
						<ListItemText>
							<Typography variant='caption'>
								Página Inicial
							</Typography>
						</ListItemText>
					</ListItemButton>
				</Link>
				<Link to='/servicos'>
					<ListItemButton >
						<ListItemIcon>
							<Icon>ballot</Icon>
						</ListItemIcon>
						<ListItemText>
							<Typography variant='caption'>
								Tarefas
							</Typography>
						</ListItemText>
					</ListItemButton>
				</Link>
			</Box>
			<Box flex={1} position='fixed' top={0} right={0}>
				<IconButton onClick={toggleTheme}>
					<Brightness4 />
				</IconButton>
			</Box>
		</Box>
	);
};
