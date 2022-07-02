import { Environment } from '../../../environment';
import Api from '../Api';

interface IListingJobsDataType {
	id: number;
	description: string;
	status_pendente: string;
	status_finalizado: string;
}

interface IDetailsJobsDataType {
	id: number;
	description: string;
	status_pendente: string;
	status_finalizado: string;
}

type TJobsData = {
	data: IListingJobsDataType[];
	totalCount: number;
}

/**
 * Requisition for get all data of Jobs
 */
const getAll = async (page = 1, filter = '') : Promise<TJobsData | Error> => {
	const relativeUrl = `/job?_page=${page}&_limit=${Environment.LIMIT_OF_ROW}&descricao=${filter}`;
	try{
		const { data, headers } = await Api.get(relativeUrl);
		if(data){
			return{
				data,
				totalCount: Number(headers['x-total-count'] || Environment.LIMIT_OF_ROW)
			};
		}
		return new Error('Erro ao consultar tarefas');
	}catch( error ){
		console.error(error);
		return new Error((error as {message: string}).message || 'Erro ao consultar tarefas');
	}
};
/**
 * Requisition for created new item in database
 */
const create = async (jobData: Omit<IDetailsJobsDataType,'id'>) : Promise<number | Error> => {

	try{
		const { data } = await Api.post<IDetailsJobsDataType>('/job', jobData);
		if(data){
			return data.id;
		}
		return new Error('Erro ao criar tarefas');
	}catch( error ){
		console.error(error);
		return new Error((error as {message: string}).message || 'Erro ao criar tarefas');
	}
};

export const JobService = {
	getAll,
	create
};
