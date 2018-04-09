import axios from 'axios';
import { DOMAIN } from '../config/config_div';

const api = axios.create({
	baseURL: DOMAIN
});

export default api;
