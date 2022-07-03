import { useState } from 'react';

import { Box, Icon, IconButton, InputLabel, NativeSelect, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

export const TasksForm: React.FC = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');


	return (
		<Box>
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
					value={description}
					onChange={event => setDescription(event.target.value)}
				/>
				<InputLabel id="demo-simple-select-label">Status</InputLabel>
				<NativeSelect
					variant='standard'
					sx={smDown ? { width: '90%' } : mdDown ? { width: '80%' } : { width: '50%' }}
					defaultValue={'Pendente'}
					onChange={event => setStatus(event.target.value)}
				>
					<option value={'Pendente'}>Pendente</option>
					<option>Finalizado</option>
				</NativeSelect>
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
