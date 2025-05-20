// lib/useRequest.ts
import useSWR, { SWRConfiguration } from 'swr';
import axiosInstance from './http';
import useSWRMutation from "swr/mutation";



interface  BaseResponse<T> {
    data : T;
    code : number;
    message : string;
    timestamp : number;
}

export const fetcher = (url: string) =>
    axiosInstance.get(url).then(res => res.data);

export function useRequest<T = never>(url: string, options: SWRConfiguration = {}) {


    const { data, error, isLoading } = useSWR<T>(url, fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        ...options,
    });

    return {
        data,
        error,
        isLoading,
        isForbidden: data === null, // 拦截器已处理过权限不足
    };
}

export const triggerFetcher = (url: string) =>
    axiosInstance.get(url).then(res => {
        return res.data.data;
    });


export function useTrigger<T>(
    url: string
) {
    const {  error, trigger, isMutating } = useSWRMutation<T>(
        url,
        triggerFetcher,
    );

    return {
        error,
        isLoading: isMutating,
        trigger,
    };
}
