import { Box, InputLabel, NativeSelect, Select, TextField, TextFieldProps, useMediaQuery, useTheme } from '@mui/material';

import { useField } from '@unform/core';
import { useEffect, useState } from 'react';


type TUnFormInputProps = TextFieldProps & {
	name: string;
}

export const UnFormInput: React.FC<TUnFormInputProps> = ({ name, ...rest }) => {
	const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue)
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
