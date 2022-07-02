import { ToolbarListing } from '../../shared/components';
import { LayoutBasePage } from '../../shared/layouts';

export const ListingTasks: React.FC = () => {
	return (
		<LayoutBasePage
			title='Lista de tarefas'
			icon='assignment'
			toolbar={<ToolbarListing buttonText='Novo' />}
		>
			...
		</LayoutBasePage>
	);
};
