import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ToolbarDetails } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const EditTasks: React.FC = () => {
	const { id = 'new' } = useParams<'id'>();
	const navigate = useNavigate();

	return (
		<Box>
			<LayoutBasePage
				title={id === 'new' ? 'Nova tarefa' : 'Edição de tarefa'}
				icon={id === 'new' ? 'add_circle' : 'edit'}
				toolbar={<ToolbarDetails
					onClickInBack={() => navigate('/tasks')}
				/>}
			>

			</LayoutBasePage>
		</Box>
	);
};
