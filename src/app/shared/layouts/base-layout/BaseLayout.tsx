import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMenuOpenContext } from '../../contexts';

interface IListingTasks {
	title: string;
	icon: React.ReactNode;
	toolbar?: React.ReactNode | undefined;
	children: React.ReactNode;
}

export const LayoutBasePage: React.FC<IListingTasks> = ({ title, icon, toolbar, children }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const { toggleMenuOpen } = useMenuOpenContext();

	return (
		<Box height='100%' display='flex' flexDirection='column' padding={2}>

			<Box
				overflow='hidden'
				textOverflow='ellipsis'
				display='flex'
				alignItems='center'
				gap={1}
			>
				{smDown &&
					<IconButton onClick={toggleMenuOpen}>
						<Icon>menu</Icon>
					</IconButton>
				}
				<Typography display='flex' alignItems='center'><Icon>{icon}</Icon></Typography>
				<Typography variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}>
					{title}
				</Typography>
			</Box>
			{toolbar &&
				<Box>{toolbar}</Box>
			}
			<Box flex={''}>
				{children}
			</Box>
		</Box>
	);
};
