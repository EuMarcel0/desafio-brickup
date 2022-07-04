import { Box, TextField, TextFieldProps, InputProps, useMediaQuery, useTheme, useAutocomplete, Input } from '@mui/material';

import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';


type TUnFormInputProps = TextFieldProps & {
	name: string;
	onClick?: () => void;
}

export const UnFormInput: React.FC<TUnFormInputProps> = ({ name, onClick, ...rest }) => {
	const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (ref, newValue) => setValue(newValue)
		});
	}, [registerField, fieldName, value]);


	return (
		<Box>
			<TextField
				{...rest}
				value={value}
				onChange={event => setValue(event.target.value)}
				error={!!error}
				helperText={error}
				defaultValue={defaultValue}
				onKeyDown={() => error ? clearError() : undefined}

			/>
		</Box>

	);
};
