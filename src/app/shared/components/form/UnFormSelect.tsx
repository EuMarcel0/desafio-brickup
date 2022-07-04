import { useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useField } from '@unform/core';

type TUnFormSelectProps = TextFieldProps & {
	name: string;
}
export const UnFormSelect: React.FC<TUnFormSelectProps> = ({ name, ...rest }) => {
	const { clearError, defaultValue, error, fieldName, registerField } = useField(name);
	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [registerField, fieldName, value]);

	return (
		<TextField
			{...rest}
			select
			error={!!error}
			helperText={error}
			defaultValue={defaultValue}
			value={value}
			onKeyDown={() => error ? clearError() : undefined}
			onChange={event => setValue(event.target.value)}
		/>
	);
};
