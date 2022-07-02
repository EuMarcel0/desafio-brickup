import { Box, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DarkTheme, LigthTheme } from '../theme';

interface IThemeContextData {
	themeName: 'Light' | 'Dark';
	toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IAppThemeProvider {
	children: React.ReactNode;
}

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {

	const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');

	const toggleTheme = useCallback(() => {
		setThemeName(themeName => themeName === 'Light' ? 'Dark' : 'Light');
	}, []);

	const theme = useMemo(() => {
		if (themeName === 'Light') {
			return LigthTheme;
		}
		return DarkTheme;

	}, [themeName]);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
