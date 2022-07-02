import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext, useMenuOpenContext } from '../shared/contexts';

export const AppRoutes = () => {

	const { toggleTheme } = useAppThemeContext();
	const { isMenuOpen, toggleMenuOpen } = useMenuOpenContext();

	return (
		<Routes>
			<Route path='/pagina-inicial' element={<p>Página Inicial <Button onClick={toggleMenuOpen}></Button></p>} />
			<Route path='/servicos' element={<p>Página servicos</p>} />

			<Route path='*' element={<Navigate to='/pagina-inicial' />} />
		</Routes>
	);
};
