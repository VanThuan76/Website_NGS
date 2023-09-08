import usePagination from "@/hooks/usePagination";
import { axiosInstance } from "../typedef/Axios";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/common/ui/use-toast";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { Filter } from "../typedef/ISearchParams";

const QUERY_KEY = 'getListsMedia'

export interface Media {
    id: React.Key,
    src: string,
    alt: string,
    ext: string // '.png, .mp4'
    width: number,
    height: number
}
export interface Folders {
    id: number;
    name: string;
    description: string;
    galleries: Galleries[];
}

export interface Galleries {
    id: React.Key,
    image: string,
}
export const useGetListFolders = (defaultFilter?: Filter[]) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<Folders[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstance.post<IBaseResponse<IBaseResponseWithCount<Folders[]>>>('/folders/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            filters: defaultFilter,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}

export const useGetDetailFolders = ({ id, options }: { id: React.Key, options?: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-detail', id],
        queryFn: () => axiosInstance.get<IBaseResponse<Folders>>('/folders/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}


export const useCreateFolders = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (folders: Partial<Media>) => axiosInstance.post('/folders/create', folders),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Tạo folders thành công",
            })
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: "Tạo folders thất bại",
            })
        }
    })
}

export const useUpdateFolders = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id, folders }: { id: React.Key, folders: Partial<Media> }) => axiosInstance.put(`/folders/update/${id}`, folders),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Cập nhật folders thành công",
            })
        },
    })

}

export const useDeleteFolders = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.delete('/folders/delete/' + id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Xóa folders thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Xóa folders thất bại",
            })
        }
    })
}

export const useChangeStatusFolders = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.put(`/folders/change-status/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Thay doi folders thành công",
            })
        },
    })
}

export const useGetListGalleries = (defaultFilter?: Filter[]) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<Galleries[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstance.post<IBaseResponse<IBaseResponseWithCount<Galleries[]>>>('/galleries/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            filters: defaultFilter,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        }
    })
}

export const useGetDetailGalleries = ({ id, options }: { id: React.Key, options?: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-detail', id],
        queryFn: () => axiosInstance.get<IBaseResponse<Galleries>>('/galleries/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}


export const useCreateGalleries = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (galleries: Partial<Media>) => axiosInstance.post('/galleries/create', galleries),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Tạo galleries thành công",
            })
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: "Tạo galleries thất bại",
            })
        }
    })
}

export const useUpdateGalleries = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id, galleries }: { id: React.Key, galleries: Partial<Media> }) => axiosInstance.put(`/galleries/update/${id}`, galleries),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Cập nhật galleries thành công",
            })
        },
    })

}

export const useDeleteGalleries = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.delete('/galleries/delete/' + id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Xóa galleries thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Xóa galleries thất bại",
            })
        }
    })
}

export const useChangeStatusGalleries = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.put(`/galleries/change-status/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Thay doi galleries thành công",
            })
        },
    })
}
