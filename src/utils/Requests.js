import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Requests = () => {
    const navigate = useNavigate();
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api'
    });

    instance.interceptors.request.use(
        (config) => {
            // let token = '';
            // config.headers['Content-Type'] = 'application/json; charset=UTF-8';
            // config.headers['Access-Control-Allow-Origin'] = '*';
            // config.headers.withCredentials = true;
            // config.headers.Authorization = token ? token : '';
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401 || error.response.status === 400) {
                navigate("/login");
            }
            return Promise.reject(error);
        },
    );
    const get = async (url, params = {}, config = {}) => 
        await instance.get(
            url, 
            {
                headers: { ...config }, 
                params 
            }
        );
    const post = async (url, params = {}, config = {}) =>
        await instance.post(
            url, 
            {
                ...params,
                headers: { ...config },
            }
        );
    const put = async (url, params = {}, config = {}) =>
        await instance.put(
            url, 
            { 
                ...params,
            },
            {
                ...config,
            }
        );
    const del = async (url, params = {}, config = {}) =>
        await instance.delete(
            url, 
            {
                headers: { ...config },
                params
            }
        );
        
    return { get, post, put, del };
};