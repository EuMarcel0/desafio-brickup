import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {

	const { toggleTheme } = useAppThemeContext();

	return (
		<Routes>
			<Route path='/pagina-inicial' element={<p>Página Inicial</p>} />
			<Route path='/servicos' element={<p>Página servicos</p>} />

			<Route path='*' element={<Navigate to='/pagina-inicial' />} />
		</Routes>
	);
};
