import usePagination from "@/hooks/usePagination";
import { axiosInstance } from "../typedef/Axios";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/common/ui/use-toast";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { IBaseModel } from "../typedef/IBaseModel";
import { Filter } from "../typedef/ISearchParams";
import { IBaseSectionComponent } from "../typedef/IBaseSectionComponent";

const QUERY_KEY = 'getListNews'

export interface IWebsiteNews extends IBaseSectionComponent {
    title: string;
    description: string;
    content: string;
    image: string;
    author: string;
    slug: string;
}
export interface IAdminNews extends IBaseModel {
    title: string;
    description: string;
    content: string;
    image: string;
    author: string;
    slug: string;
}

export const useGetListNews = (defaultFilter?: Filter[]) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IAdminNews[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstance.post<IBaseResponse<IBaseResponseWithCount<IAdminNews[]>>>('/news/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            filters: defaultFilter,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}

export const useGetDetailNews = ({ id, options }: { id: React.Key, options?: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-detail', id],
        queryFn: () => axiosInstance.get<IBaseResponse<IAdminNews>>('/news/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}


export const useCreateNews = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (News: Partial<IAdminNews>) => axiosInstance.post('/articles/create', News),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Tạo articles thành công",
            })
        },
        onError : ()=>{
            toast({
                variant: 'destructive',
                title: "Tạo articles thất bại",
            })
        }
    })
}

export const useUpdateNews = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id, news }: { id: React.Key, news: Partial<IAdminNews> }) => axiosInstance.put(`/news/update/${id}`, news),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Cập nhật News thành công",
            })
        },
    })

}

export const useDeleteNews = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.delete('/news/delete/' + id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Xóa News thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Xóa News thất bại",
            })
        }
    })
}

// export const useChangeStatusNews = (onSuccessHandle?: () => void) => {
//     const queryClient = useQueryClient()
//     return useMutation({
//         mutationFn: ({ id }: { id: React.Key }) => axiosInstance.put(`/news/change-status/${id}`),
//         onSuccess: () => {
//             notification.success({message: "Change status success"})
//             queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
//             if (onSuccessHandle) onSuccessHandle()
//         },
//     })
// }

export const useGetDetailNewsBySlug = ({ slug, options }: { slug: string, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstance.get<IBaseResponse<IAdminNews>>('/news/get-by-slug/' + slug),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}