import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import parent_platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
 // useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => {
    const fetchPlatforms = () => {
        return apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data)}

    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms,
        staleTime: 24 * 60 * 60 * 1000, // 24 Hour
        initialData: {
            count: parent_platforms.length,
            results: parent_platforms,
        }
    })
};

export default usePlatforms;

