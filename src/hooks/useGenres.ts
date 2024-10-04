import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { FetchResponse } from './useData';
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => ({data: genres, isLoading: false, error: null});
debugger;
const useGenres = () => {

    const fetchGenres = () => {
        return apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data)}

    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: fetchGenres,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {
            count: genres.length,
            results: genres
        }
    })
}

export default useGenres;