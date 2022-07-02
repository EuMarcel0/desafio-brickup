import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideMenu } from './shared/components';
import { AppThemeProvider } from './shared/contexts';

export const App = () => {
	return (
		<AppThemeProvider>
			<BrowserRouter>
				<SideMenu>
					<AppRoutes />
				</SideMenu>
			</BrowserRouter>
		</AppThemeProvider>

	);
};
