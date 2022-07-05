import { Box, TextField, TextFieldProps, InputProps, useMediaQuery, useTheme, useAutocomplete, Input } from '@mui/material';

import { useField } from '@unform/core';
import { useEffect, useState } from 'react';


type TUnFormInputProps = TextFieldProps & {
	name: string;
}

export const UnFormInput: React.FC<TUnFormInputProps> = ({ name, ...rest }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (ref, newValue) => setValue(newValue)
		});
	}, [registerField, fieldName, value]);


	return (
		<Box
			width={smDown ? '90%' : mdDown ? '75%' : '60%'}
			marginX={'auto'}
			marginTop={2}
		>
			<TextField
				{...rest}
				fullWidth
				label='Descrição da tarefa'
				error={!!error}
				helperText={error}
				defaultValue={defaultValue}
				value={value}
				onChange={event => setValue(event.target.value)}
				onKeyDown={() => error ? clearError() : undefined}
			/>
		</Box >

	);
};
