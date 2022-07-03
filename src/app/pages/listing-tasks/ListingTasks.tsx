import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IListingJobsDataType, JobService } from '../../shared/services/api/job/JobService';
import { ToolbarListing } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';

export const ListingTasks: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams('');
	const [tasks, setTasks] = useState<IListingJobsDataType[]>([]);
	const [totalCount, setTotalCount] = useState(0);
	const { debounce } = useDebounce();

	const search = useMemo(() => {
		return searchParams.get('search') || '';
	}, [searchParams]);

	useEffect(() => {

		debounce(() => {
			JobService.getAll(1, search)
				.then((response) => {
					if (response instanceof Error) {
						alert(response.message);
					} else {
						console.log(response.data);
						setTasks(response.data);
						setTotalCount(response.totalCount);
					}
				});
		});
	}, [search]);

	return (
		<LayoutBasePage
			title='Lista de tarefas'
			icon='assignment'
			toolbar={<ToolbarListing
				buttonText='Nova'
				showInput
				textOfInput={search}
				handleTextInput={text => setSearchParams({ search: text }, { replace: true })}
				handleClearInput={() => setSearchParams('')}
			/>}
		>
			...
		</LayoutBasePage>
	);
};
