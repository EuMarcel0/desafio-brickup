import { Button, Fade, Icon, IconButton, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

import ServiceImage from '../../../../assets/images/tasks.png';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '97%',
	height: '97%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};


export const ImageModal: React.FC = () => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	return (
		<div>
			<IconButton onClick={handleOpen}>
				<Icon>insert_photo</Icon>
			</IconButton>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style} display='flex' flexDirection='column' alignItems='center' justifyContent='center' position='relative'>
						<Box
							position='fixed'
							top={3}
							right={3}
						>
							<IconButton onClick={handleClose}>
								<Icon>close</Icon>
							</IconButton>
						</Box>
						<Box
							height='40px'
							position='fixed'
							top={4}
						>
							<Typography id="transition-modal-title" variant='caption' component="h2">
								Ilustrações das tarefas
							</Typography>
						</Box>
						<Box flex='1' marginTop={4}>
							<img src={ServiceImage} style={{ width: '100%', height: 'auto' }} />
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};
