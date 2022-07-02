import axios from 'axios';
import { Environment } from '../../environment';
import { errorInterceptor } from './intercepetors/ErroInterceptor';
import { responseInterceptor } from './intercepetors/ResponseInterceptor';

const Api = axios.create({
	baseURL: Environment.BASE_URL,
});

Api.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error)
);

export default Api;
