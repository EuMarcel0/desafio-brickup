import { Box, LinearProgress, MenuItem } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ToolbarDetails, UnFormFilled, UnFormInput } from '../../shared/components';
import { UnFormSelect } from '../../shared/components/form/UnFormSelect';
import { LayoutBasePage } from '../../shared/layouts';
import { JobService } from '../../shared/services/api/job/JobService';


interface IFormProps {
	status: string;
	description: string;
	image: string;
}

export const EditTasks: React.FC = () => {
	const { id = 'new' } = useParams<'id'>();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const formRef = useRef<FormHandles>(null);

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
						formRef.current?.setData(response);
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
		if (id === 'new') {
			JobService.create(dados)
				.then((response) => {
					if (response instanceof Error) {
						alert(response.message);
					} else {
						alert('Tarefa cadastrada com sucesso!');
						navigate('/tasks');
					}
				});
			console.log(dados);
		} else {
			JobService.updateById(Number(id), { id: Number(id), ...dados })
				.then((response) => {
					if (response instanceof Error) {
						alert(response.message);
					} else {
						alert('Tarefa alterada com sucesso');
					}
				});
		}
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
						onClickInSave={() => formRef.current?.submitForm()}
						showButtonDelete={id !== 'new'}
					/>}
				>

					<Form ref={formRef} onSubmit={handleSave}>
						<UnFormInput name='description' />
						<UnFormSelect name='status' defaultValue='Pendente' defaultChecked>
							<MenuItem selected={true} value='Pendente'>Pendente</MenuItem>
							<MenuItem value='Finalizado'>Finalizado</MenuItem>
						</UnFormSelect>
						<UnFormFilled name='img' />
					</Form>

				</LayoutBasePage>
			}
		</Box >
	);
};
