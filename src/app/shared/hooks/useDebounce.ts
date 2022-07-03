import { useCallback, useRef } from 'react';

export const useDebounce = (delay = 1000) =>{
	const debouncing = useRef<number>();
	const isFirstTimer = useRef(true);

	const debounce = useCallback((func: () => void) =>{
		if(isFirstTimer.current){
			isFirstTimer.current = false;
			func();
		}else{
			if(debouncing.current){
				clearTimeout(debouncing.current);
			}
			debouncing.current = setTimeout(() => func(), delay);
		}


	}, [delay]);

	return{debounce};
};
