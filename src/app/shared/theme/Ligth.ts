import { createTheme } from '@mui/material';

export const LigthTheme = createTheme({
	palette:{
		primary:{
			main: '#1565c0',
			dark: '#1976d2',
			light: '#01579b',
			contrastText: '#FFFFFF',
		},
		secondary:{
			main: '#1565c0',
			dark: '#1976d2',
			light: '#1976d2',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#f7f7f7',
			paper: '#e0e0e0',
		}
	}
});
