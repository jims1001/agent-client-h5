// lib/axios.ts
import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    (response) => {
        // 权限字段过滤
        if (response.data?.code === 'FORBIDDEN') {
            console.warn('权限不足，数据被过滤');
            return { ...response, data: null };
        }
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // 处理未授权
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;

