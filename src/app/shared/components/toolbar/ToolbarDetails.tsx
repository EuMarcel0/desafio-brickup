import { Box, Icon, IconButton, MenuItem, Paper, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

interface IToolbarDetailsProps {
	showButtonSave?: boolean;
	showButtonBack?: boolean;
	showButtonClose?: boolean;

	onClickInSave?: () => void;
	onClickInBack?: () => void;
	onClickInClose?: () => void;
}

export const ToolbarDetails: React.FC<IToolbarDetailsProps> = (
	{
		showButtonSave = true,
		showButtonBack = true,
		showButtonClose = true,

		onClickInSave,
		onClickInBack,
		onClickInClose
	}) => {

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			width='100%'
			height='500px'
			component={Paper}
			paddingY={1}
			paddingX={1}
			marginY={2}
			elevation={4}
		>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				gap={3}
				marginY={3}
			>
				<TextField
					sx={smDown ? { width: '90%' } : mdDown ? { width: '80%' } : { width: '50%' }}
					label='Descrição da tarefa'
				/>
				<Select
					sx={smDown ? { width: '90%' } : mdDown ? { width: '80%' } : { width: '50%' }}
					value
					label="Age"
				>
					<MenuItem>Ten</MenuItem>
					<MenuItem>Twenty</MenuItem>
					<MenuItem>Thirty</MenuItem>
				</Select>
			</Box>
			<Box
				display='flex'
				justifyContent='center'

			>
				<IconButton sx={{ display: 'flex', flexDirection: 'column' }}>
					<Icon>upload</Icon>
					<Typography variant='caption' sx={{ fontSize: '12px' }}>Imagem</Typography>
				</IconButton>
			</Box>

		</Box>
	);
};
