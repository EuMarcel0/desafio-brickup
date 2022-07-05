import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Bg2 from '../../../assets/images/undraw_teaching_re_g7e3.svg';
import { LayoutBasePage } from '../../shared/layouts';
import { JobService } from '../../shared/services/api/job/JobService';

export const Home: React.FC = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		JobService.getAll()
			.then((response) => {

				if (response instanceof Error) {
					alert(response.message);
				} else {
					console.log(response);
					setTotalCount(response.totalCount);
				}
			});

	}, []);

	return (
		<Box
			paddingX={1}
			display='flex'
			flexDirection='column'
		>
			<LayoutBasePage
				title={`Bem-vindo, John. Há ${totalCount === 1 ? totalCount + ' tarefa' : totalCount + ' tarefas'}`}
				icon=' '

			>
			</LayoutBasePage>
			<Box
				width='100%'
				height={mdDown ? 'calc(100vh - 100px)' : smDown ? 'calc(100vh - 1px)' : 'calc(100vh - 100px)'}
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Box
					display='flex'
					justifyContent='center'
					marginY={3}
					width={mdDown ? '300px' : smDown ? '200px' : 'auto'}
					height={mdDown ? 'calc(100vh - 100px)' : smDown ? 'calc(100vh - 1px)' : 'calc(100vh - 100px)'}
				>
					<img src={Bg2} style={{ width: '90%' }} />
				</Box>
				<Box
					width='100%'
					maxWidth='300px'
					display='flex'
					justifyContent='center'
				>
					<a href='https://github.com/EuMarcel0/' target='_blank' rel="noreferrer" >
						<IconButton>
							<GitHub fontSize='small' />
						</IconButton>
					</a>
					<a href='https://www.linkedin.com/in/marcelo-ribeiro-da-silva-aa444921b/' target='_blank' rel="noreferrer">
						<IconButton>
							<LinkedIn fontSize='small' />
						</IconButton>
					</a>
					<a href='https://api.whatsapp.com/send/?phone=5577991776299&text=Ol%C3%A1%2C+tudo+bem%3F&app_absent=0' target='_blank' rel="noreferrer">
						<IconButton>
							<WhatsApp fontSize='small' />
						</IconButton>
					</a>
				</Box>
			</Box>
		</Box>
	);
};
