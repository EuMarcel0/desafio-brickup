import { Box, Button, Icon, Paper, TextField } from '@mui/material';

export const ToolbarListing: React.FC = () => {
	return (
		<Box
			width='100%'
			component={Paper}
			paddingY={1}
			paddingX={1}
		>
			<Box
				display='flex'
				justifyContent='space-between'
			>
				<TextField
					size='small'
					autoFocus
					placeholder='Pesquisar...'
				/>
				<Button
					size='small'
					variant='contained'
					startIcon={<Icon>add</Icon>}
				>
					Nova
				</Button>
			</Box>
		</Box>
	);
};
