import { Box, Drawer, useTheme } from '@mui/material';

interface ISideMenu {
	children: React.ReactNode;
}

export const SideMenu: React.FC<ISideMenu> = ({ children }) => {
	const theme = useTheme();

	return (
		<>
			<Drawer variant='permanent'>
				<Box width={theme.spacing(28)}>
					Teste
				</Box>
			</Drawer>
			<Box height='100vh' marginLeft={theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
