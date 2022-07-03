import { Box, Button, Paper } from '@mui/material';

interface IToolbarDetailsProps {
	showButtonSave?: boolean;
	showButtonBack?: boolean;
	showButtonDelete?: boolean;

	onClickInSave?: () => void;
	onClickInBack?: () => void;
	onClickInDelete?: () => void;
}

export const ToolbarDetails: React.FC<IToolbarDetailsProps> = (
	{
		showButtonSave = true,
		showButtonBack = true,
		showButtonDelete = true,

		onClickInSave,
		onClickInBack,
		onClickInDelete
	}) => {

	return (
		<>
			<Box
				width='100%'
				component={Paper}
				paddingY={1}
				paddingX={1}
				marginY={2}
				elevation={4}
			>
				<Box
					width='100%'
					paddingY={1}
					paddingX={1}
					marginY={2}
					display='flex'
					justifyContent='center'
					gap={3}
				>
					{showButtonSave &&
						<Button
							sx={{ borderRadius: '0' }}
							variant='contained'
							onClick={onClickInSave}
						>
							Salvar
						</Button>
					}
					{showButtonBack &&
						<Button
							sx={{ borderRadius: '0' }}
							variant='contained'
							onClick={onClickInBack}
						>
							Voltar
						</Button>
					}
					{showButtonDelete &&
						<Button
							sx={{ borderRadius: '0' }}
							variant='contained'
							onClick={onClickInDelete}
						>
							Deletar
						</Button>
					}
				</Box>
			</Box>
		</>
	);
};
