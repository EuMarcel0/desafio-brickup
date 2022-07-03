import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IListingJobsDataType, JobService } from '../../shared/services/api/job/JobService';
import { ToolbarListing } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useAppThemeContext } from '../../shared/contexts';

export const ListingTasks: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams('');
	const [tasks, setTasks] = useState<IListingJobsDataType[]>([]);
	const [totalCount, setTotalCount] = useState(0);
	const { debounce } = useDebounce();
	const { themeName } = useAppThemeContext();

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
						console.log(response);
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
			<TableContainer component={Paper} elevation={4}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Tarefa</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Status</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Imagem</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Criar teste unitário</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Pendente</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Imagem</TableCell>
							<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Ações</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Criar teste unitário</TableCell>
							<TableCell>Pendente</TableCell>
							<TableCell>Imagem</TableCell>
							<TableCell>Ações</TableCell>
						</TableRow>

					</TableBody>
				</Table>
			</TableContainer>
		</LayoutBasePage>
	);
};
