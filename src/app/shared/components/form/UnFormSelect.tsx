import { useEffect, useState } from 'react';
import { Box, TextField, TextFieldProps, SelectProps, useTheme, useMediaQuery } from '@mui/material';
import { useField } from '@unform/core';

type TUnFormSelectProps = TextFieldProps & SelectProps & {
	name: string;
}
export const UnFormSelect: React.FC<TUnFormSelectProps> = ({ name, ...rest }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || 'Pendente');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (ref, newValue) => setValue(newValue),
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
				defaultChecked
				fullWidth
				select
				label='Status'
				error={!!error}
				helperText={error}
				defaultValue={defaultValue || 'Pendente'}
				value={value}
				onKeyDown={() => error ? clearError() : undefined}
				onChange={event => setValue(event.target.value)}
			/>
		</Box>
	);
};
