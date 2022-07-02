import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideMenu } from './shared/components';
import { AppThemeProvider, MenuProvider } from './shared/contexts';

export const App = () => {
	return (
		<AppThemeProvider>
			<MenuProvider>
				<BrowserRouter>
					<SideMenu>
						<AppRoutes />
					</SideMenu>
				</BrowserRouter>
			</MenuProvider>
		</AppThemeProvider>

	);
};
