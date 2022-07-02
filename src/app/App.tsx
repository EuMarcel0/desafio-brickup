import { ThemeProvider } from '@mui/material';
import { LigthTheme } from './shared/theme';

export const App = () => {

	return (
		<ThemeProvider theme={LigthTheme}>
			<div>Teste</div>
		</ThemeProvider>
	);
};
