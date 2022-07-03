import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
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
			JobService.getAll(page, search)
				.then((response) => {
					setLoading(false);
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
				<LinearProgress sx={{ mY: '10px' }} />
			}
			<TableContainer component={Paper} elevation={4}>
				<Table>
					{Environment.LIMIT_OF_ROW > 0 && totalCount > 0 &&
						<TableHead>
							<TableRow>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Tarefas</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Status</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Imagem</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Ações</TableCell>
							</TableRow>
						</TableHead>
					}

					<TableBody >
						{tasks.map((item) => (
							<TableRow key={item.id}>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>{item.description}</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>{item.status_finalizado}</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Imagem</TableCell>
								<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454' }}>Ações</TableCell>
							</TableRow>
						))}
					</TableBody>
					{totalCount === 0 && !loading &&
						<caption>{Environment.LISTING_EMPTY}</caption>
					}
					{totalCount > 0 && Environment.LIMIT_OF_ROW > 0 &&
						<TableFooter sx={{ paddingY: '10px' }}>
							{totalCount > 0 && totalCount > Environment.LIMIT_OF_ROW &&
								<TableRow>
									<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454', border: 'none' }}></TableCell>
									<TableCell sx={themeName === 'Light' ? { borderColor: '#CCC' } : { borderColor: '#545454', border: 'none' }}>
										<Pagination
											count={Math.ceil(totalCount / Environment.LIMIT_OF_ROW)}
											color="primary"
											page={page}
											onChange={(_, newPage) => setSearchParams({ search, page: newPage.toString() }, { replace: true })}
										/>
									</TableCell>
								</TableRow>
							}
						</TableFooter>
					}
				</Table>
			</TableContainer>
		</LayoutBasePage>
	);
};
