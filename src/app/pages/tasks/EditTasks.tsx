import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ToolbarDetails } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const EditTasks: React.FC = () => {
	const { id = 'new' } = useParams<'id'>();

	return (
		<Box>
			<LayoutBasePage
				title={id === 'new' ? 'Nova tarefa' : 'Edição de tarefa'}
				icon={id === 'new' ? 'add_circle' : 'edit'}
				toolbar={<ToolbarDetails />}
			>
				<Box>
					Teste{id}
				</Box>
			</LayoutBasePage>
		</Box>
	);
};
