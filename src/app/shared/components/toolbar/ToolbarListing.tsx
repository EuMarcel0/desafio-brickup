import { Box, Button, Icon, Paper, TextField } from '@mui/material';

interface IToolbarListing {
	textOfInput?: string;
	buttonText: string;
	showButtonText?: boolean;
	showInput?: boolean;
	handleTextInput?: (newText: string) => void;
	onClick?: (() => void) | undefined;
	children?: React.ReactNode;
}

export const ToolbarListing: React.FC<IToolbarListing> = ({
	buttonText = 'Nova',
	textOfInput,
	showInput = true,
	showButtonText = true,
	onClick
}) => {
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
				{showInput &&
					<TextField
						size='small'
						autoFocus
						label="Pesquisar..."
						value={textOfInput}
					/>
				}

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
