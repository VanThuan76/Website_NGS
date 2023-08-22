import { useToast } from "@/components/common/ui/use-toast";
import usePagination from "@/hooks/usePagination";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../typedef/Axios";
import { IBaseModel } from "../typedef/IBaseModel";
import { IBaseResponse, IBaseResponseWithCount } from "../typedef/IBaseResponse";
import { Filter } from "../typedef/ISearchParams";

const QUERY_KEY = 'getListRole'

export type ActionPermission = "create" | "edit" | "view" | "delete" | "approve"

export interface IRole extends IBaseModel{
    roleName: string,
    description: string
}

export interface PermissionList {
    id: string;
    categoryName: string;
    permissionDtoList: PermissionDto[];
}

export interface PermissionDto {
    id: string;
    permissionName: string;
    description: string;
}

export interface PermissionListDTO {
    id: string;
    key: string;
    categoryName: string;
    permissionName: string;
    children: PermissionDto[],
    permissionDtoList: PermissionDto[];
}


export interface IPermissionAction {
    id: string,
    permissionName: string,
    actionName: string,
    active: boolean
}

export interface IActionPermissionList {
    id: React.Key,
    categoryName: string,
    actionEditDto: {
        id: string;
        permissionName: string;
        permissionActionDtoList: {
            id: string;
            permissionName: string;
            actionName: ActionPermission;
            active: boolean;
        }[]
    }[];
}

export const mockdata: IActionPermissionList[] = [
    {
        id: "1",
        categoryName: "News Management",
        actionEditDto: [
            {
                id: "1",
                permissionName: "News",
                permissionActionDtoList: [
                    {
                        id: "1",
                        permissionName: "News",
                        actionName: "create",
                        active: true
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        categoryName: "User Management",
        actionEditDto: [
            {
                id: "2",
                permissionName: "User",
                permissionActionDtoList: [
                    {
                        id: "2",
                        permissionName: "User",
                        actionName: "approve",
                        active: true
                    }
                ]
            }
        ]
    },
    {
        id: "3",
        categoryName: "Media Management",
        actionEditDto: [
            {
                id: "3",
                permissionName: "Media",
                permissionActionDtoList: [
                    {
                        id: "3",
                        permissionName: "Media",
                        actionName: "view",
                        active: true
                    }
                ]
            }
        ]
    }
]

export const useGetListRoles = (defaultFilter?: Filter[]) => {
    return usePagination<IBaseResponse<IBaseResponseWithCount<IRole[]>>>({
        queryKey: [QUERY_KEY],
        apiFn: (params) => axiosInstance.post<IBaseResponse<IBaseResponseWithCount<IRole[]>>>('/roles/search', { ...params }),
        defaultParams: {
            page: 0,
            size: 10,
            sorts: [{ field: 'updatedDate', direction: 'DESC' }]
        },

    })
}
export const useGetDetailRole = ({ id, options }: { id: React.Key, options?: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'detail'],
        queryFn: () => axiosInstance.get<IBaseResponse<IRole>>('/roles/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}

export const useCreateRole = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (Role: Partial<IRole>) => axiosInstance.post('/roles/create', Role),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Tạo Role thành công",
            })
        },
    })
}

export const useUpdateRole = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const {toast} = useToast()
    return useMutation({
        mutationFn: ({ Role, id }: { Role: Partial<IRole>, id: React.Key }) => axiosInstance.put(`/roles/update/${id}`, Role),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Cập nhật Role thành công",
            })
        },
    })
}

export const useDeleteRole = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstance.delete('/roles/delete/' + id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Xóa Role thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Xóa Role thất bại",
            })
        }
    })
}