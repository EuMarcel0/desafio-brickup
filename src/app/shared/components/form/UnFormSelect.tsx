import { useEffect, useState } from 'react';
import { Box, TextField, TextFieldProps, SelectProps } from '@mui/material';
import { useField } from '@unform/core';

type TUnFormSelectProps = TextFieldProps & SelectProps & {
	name: string;
}
export const UnFormSelect: React.FC<TUnFormSelectProps> = ({ name, ...rest }) => {

	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || 'Pendente');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [registerField, fieldName, value]);

	return (
		<Box width='60%'>
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
