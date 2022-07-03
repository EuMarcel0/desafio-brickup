import { Box, Button, Icon, Paper, TextField } from '@mui/material';

interface IToolbarListing {
	textOfInput?: string;
	buttonText: string;
	showButtonText?: boolean;
	showInput?: boolean;
	children?: React.ReactNode;
	handleTextInput?: (newText: string) => void;
	handleClearInput?: () => void;
	onClick?: (() => void) | undefined;
}

export const ToolbarListing: React.FC<IToolbarListing> = ({
	buttonText = 'Nova',
	textOfInput = '',
	showInput = true,
	showButtonText = true,
	children,
	handleTextInput,
	handleClearInput,
	onClick
}) => {
	return (
		<Box
			width='100%'
			component={Paper}
			paddingY={1}
			paddingX={1}
			elevation={4}
		>
			<Box
				display='flex'
				justifyContent='space-between'
			>
				<Box display='flex' alignItems='center' gap={2}>
					{showInput &&
						<TextField
							size='small'
							autoFocus
							label="Pesquisar..."
							value={textOfInput}
							onChange={(e) => handleTextInput?.(e.target.value)}
						/>
					}
					{textOfInput.length > 0 &&
						<Button variant='contained' onClick={handleClearInput}>
							Limpar
						</Button>
					}
				</Box>
				{showButtonText &&
					<Button
						size='small'
						variant='contained'
						startIcon={<Icon>add</Icon>}
						onClick={onClick}
					>
						{buttonText}
					</Button>
				}
			</Box>
		</Box>
	);
};
