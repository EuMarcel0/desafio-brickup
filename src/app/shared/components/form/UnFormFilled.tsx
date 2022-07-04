import { PhotoCamera } from '@mui/icons-material';
import { Box, Input, TextField, TextFieldProps, InputProps, IconButton, Icon, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';

type IUnFormFilledProps = TextFieldProps & {
	name: string;
}


export const UnFormFilled: React.FC<IUnFormFilledProps> = ({ name, ...rest }) => {

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: name,
			getValue: () => value,
			setValue: (_, newValue) => (newValue),
		});
		console.log(value);
	}, []);

	return (
		<Box
			width={smDown ? '90%' : mdDown ? '75%' : '60%'}
			marginX={'auto'}
			marginTop={2}
		>
			<label>
				<Box display='none'>
					<input
						onChange={event => setValue(event.target.value)}
						value={value}
						type='file'
					/>
				</Box>
				<IconButton color="primary" aria-label="upload picture" component="span">
					<Box display='flex' flexDirection='column' alignItems='center'>
						<Icon>upload</Icon>
						<Typography variant='caption'>Imagem</Typography>
					</Box>
				</IconButton>
			</label>
		</Box>
	);

};
