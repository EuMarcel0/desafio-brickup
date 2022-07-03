import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EditTasks, ListingTasks } from '../pages';
import { useAppThemeContext, useMenuOpenContext } from '../shared/contexts';

export const AppRoutes = () => {

	const { toggleTheme } = useAppThemeContext();
	const { isMenuOpen, toggleMenuOpen } = useMenuOpenContext();

	return (
		<Routes>
			<Route path='/pagina-inicial' element={<p>Página Inicial <Button onClick={toggleMenuOpen}></Button></p>} />
			<Route path='/tasks' element={<ListingTasks />} />
			<Route path='/tasks/edit/:id' element={<EditTasks />} />
			<Route path='*' element={<Navigate to='/pagina-inicial' />} />
		</Routes>
	);
};
