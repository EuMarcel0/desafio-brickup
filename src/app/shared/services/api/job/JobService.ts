import { Environment } from '../../../environment';
import Api from '../Api';

export interface IListingJobsDataType {
	id: number;
	description: string;
	status: string;
}

export interface IDetailsJobsDataType {
	id: number;
	description: string;
	status: string;
}

type TJobsDataProps = {
	data: IListingJobsDataType[];
	totalCount: number;
}

/**
 * Requisition for get all data of Jobs
 */
const getAll = async (page = 1, filter = '') : Promise<TJobsDataProps | Error> => {
	const relativeUrl = `/job?_page=${page}&_limit=${Environment.LIMIT_OF_ROW}&description_like=${filter}`;
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
 * Requisition for get item by ID
 */
const getById = async (id: number) : Promise<IDetailsJobsDataType | Error> => {
	try{
		const {data} = await Api.get(`/job/${id}`);
		if(data){
			return data;
		}
		return new Error('Erro ao consultar tarefas');
	}catch(error){
		return new Error((error as { message: string }).message || 'Erro ao consultar os registros');
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
		return new Error((error as {message: string}).message || 'Erro ao criar tarefa');
	}
};
/**
 * Requisition for updated register by id
 */
const updateById = async (id: number, jobData: IDetailsJobsDataType) : Promise<void | Error> => {
	try{
		await Api.put(`/job/${id}`, jobData);
	}catch(error){
		return new Error((error as { message: string }).message || 'Erro ao alterar o registro');
	}
};
/**
 * Requisition for delete item by id
 */
const deleteById = async (id: number) : Promise<void | Error> => {
	try{
		await Api.delete(`/job/${id}`);
	}catch(error){
		console.log(error);
		return new Error((error as { message: string }).message || 'Erro ao deletar o registro');
	}
};



export const JobService = {
	getAll,
	create,
	updateById,
	getById,
	deleteById
};
