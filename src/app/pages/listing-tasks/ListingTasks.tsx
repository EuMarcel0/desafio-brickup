import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { IListingJobsDataType, JobService } from '../../shared/services/api/job/JobService';
import { useAppThemeContext } from '../../shared/contexts';
import { ToolbarListing } from '../../shared/components';
import { Environment } from '../../shared/environment';
import { LayoutBasePage } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';


export const ListingTasks: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams('');
	const [tasks, setTasks] = useState<IListingJobsDataType[]>([]);
	const [totalCount, setTotalCount] = useState(0);
	const { debounce } = useDebounce();
	const { themeName } = useAppThemeContext();
	const [loading, setLoading] = useState(true);

	const search = useMemo(() => {
		return searchParams.get('search') || '';
	}, [searchParams]);

	const page = useMemo(() => {
		return Number(searchParams.get('page') || '1');
	}, [searchParams]);

	useEffect(() => {
		setLoading(true);
		debounce(() => {
			setLoading(false);
			JobService.getAll(page, search)
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
	}, [search, page]);

	return (
		<LayoutBasePage
			title='Lista de tarefas'
			icon='assignment'
			toolbar={<ToolbarListing
				buttonText='Nova'
				showInput
				textOfInput={search}
				handleTextInput={text => setSearchParams({ search: text, page: '1' }, { replace: true })}
				handleClearInput={() => setSearchParams('')}
			/>}
		>
			{loading &&
				<LinearProgress />
			}
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
					{tasks.map((item) => (
						<TableBody key={item.id}>
							<TableRow>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>{item.description}</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>{item.status_finalizado}</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Imagem</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Ações</TableCell>
							</TableRow>
						</TableBody>
					))}
					<TableFooter sx={{ paddingY: '10px' }}>
						<TableRow>
							<TableCell colSpan={4} sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>
								Loading
							</TableCell>
						</TableRow>
						<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}></TableCell>
						<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454', display: 'flex' }}>
							{totalCount > 0 && totalCount > Environment.LIMIT_OF_ROW &&
								<Pagination
									count={Math.ceil(totalCount / Environment.LIMIT_OF_ROW)}
									color="primary"
									page={page}
									onChange={(_, newPage) => setSearchParams({ search, page: newPage.toString() }, { replace: true })}
								/>
							}
						</TableCell>
					</TableFooter>
				</Table>
			</TableContainer>
		</LayoutBasePage>
	);
};
