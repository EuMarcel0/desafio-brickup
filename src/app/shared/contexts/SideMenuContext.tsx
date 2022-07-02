import { createContext, useCallback, useContext, useState } from 'react';

interface ISideMenuDataContext {
	isMenuOpen: boolean;
	toggleMenuOpen: () => void;
}

const SideMenuContext = createContext({} as ISideMenuDataContext);

interface ISideMenuProvider {
	children: React.ReactNode;
}

export const useMenuOpenContext = () => {
	return useContext(SideMenuContext);
};

export const MenuProvider: React.FC<ISideMenuProvider> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = useCallback(() => {
		setIsMenuOpen(oldIsMenuOpen => !oldIsMenuOpen);
	}, []);

	return (
		<SideMenuContext.Provider value={{ isMenuOpen, toggleMenuOpen }}>
			{children}
		</SideMenuContext.Provider>
	);
};
