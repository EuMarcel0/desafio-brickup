import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Bg from '../../../assets/images/bg.png';
import Bg2 from '../../../assets/images/undraw_teaching_re_g7e3.svg';
import { LayoutBasePage } from '../../shared/layouts';

export const Home: React.FC = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			paddingX={1}
			display='flex'
			flexDirection='column'
		>
			<LayoutBasePage
				title='Bem-vindo, Dev'
				icon='person'

			>
			</LayoutBasePage>
			<Box
				width='100%'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Box
					display='flex'
					justifyContent='center'
					marginY={3}
					width='100%'
					maxWidth='964px'
				>
					<img src={Bg2} />
				</Box>
				<Box
					width='100%'
					maxWidth='300px'
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
