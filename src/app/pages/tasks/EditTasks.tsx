import { Box, LinearProgress, MenuItem } from '@mui/material';
import { Form } from '@unform/web';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input, Select } from 'unform';

import { ToolbarDetails, UnFormInput } from '../../shared/components';
import { UnFormSelect } from '../../shared/components/form/UnFormSelect';
import { LayoutBasePage } from '../../shared/layouts';
import { JobService } from '../../shared/services/api/job/JobService';


interface IFormProps {
	description: string;
	status: string;
}


export const EditTasks: React.FC = () => {
	const { id = 'new' } = useParams<'id'>();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');

	useEffect(() => {
		if (id !== 'new') {
			setLoading(true);
			JobService.getById(Number(id))
				.then((response) => {
					setLoading(false);
					if (response instanceof Error) {
						alert(response.message);
						navigate('/tasks');
					} else {
						setName(response.description);
						console.log(response);
					}

				});
		}
	}, [id]);

	const handleDelete = (id: number) => {
		if (confirm('Deseja realmente apagar esta tarefa?')) {
			JobService.deleteById(id)
				.then((response) => {
					if (response instanceof Error) {
						alert(response.message);
					} else {
						alert('Tarefa apagada com sucesso!');
						navigate('/tasks');
					}
				});
		}
	};

	const handleSave = (dados: IFormProps) => {
		console.log(dados);
	};

	return (
		<Box>
			{!loading &&
				<LayoutBasePage
					title={id === 'new' ? 'Nova tarefa' : `Editando: '${name}'`}
					icon={id === 'new' ? 'add_circle' : 'edit'}
					toolbar={<ToolbarDetails
						onClickInBack={() => navigate('/tasks')}
						onClickInDelete={() => handleDelete(Number(id))}
						onClickInSave={() => handleSave}
						showButtonDelete={id !== 'new'}
					/>}
				>
					<Form onSubmit={(dados) => console.log(dados)}>
						<UnFormInput name='description' select={false} />
						<UnFormSelect name='status' defaultValue='Pendente' defaultChecked>
							<MenuItem key={1} selected={true} value='Pendente'>Pendente</MenuItem>
							<MenuItem key={2} value='Finalizado'>Finalizado</MenuItem>
						</UnFormSelect>
						<button type="submit" value='Enviar'>Enviar</button>
					</Form>
				</LayoutBasePage>
			}
			{
				loading &&
				<Box>
					<LinearProgress />
				</Box>
			}
		</Box >
	);
};
