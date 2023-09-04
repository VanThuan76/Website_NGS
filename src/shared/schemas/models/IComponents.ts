import useTrans from "@/hooks/useTrans";
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IBaseResponse } from "../typedef/IBaseResponse";
import { axiosInstanceNoAuth } from '../typedef/Axios';
import { IComponentById, IComponents, IComponentsCreate } from "../typedef/IComponents";
import { IBaseSectionComponent } from "../typedef/IBaseSectionComponent";
const QUERY_KEY = 'Components'

export const useGetListComponents = ({ options }: { options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponents[]>>('/components/get-all'),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsById = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponentById[]>>('/components/get-by-id/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsByCode = ({ code, options }: { code: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponents[]>>(`/components/get-by-code?code=${code}`),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsBySectionCode = ({ code, language, options }: { code: React.Key, language:string, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IBaseSectionComponent>>(`/components/get-by-section-code?language=${language}&code=${code}`),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsBySlug = ({ slug, options }: { slug: string, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponents>>(`/components/get-by-slug?slug=${slug}`),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsByCompany = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponents[]>>('/components/get-by-company/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useGetDetailComponentsBySection = ({ id, options }: { id: React.Key, options: Partial<UseQueryOptions> }) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IComponents[]>>('/components/get-by-section/' + id),
        select(data) {
            return data.data
        },
        enabled: options.enabled
    })
}
export const useCreateComponents = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: (components: IComponentsCreate) => axiosInstanceNoAuth.post('/components/create', components),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            // notification.success({ message: trans.common.notify.createSuccess(trans.menu.article) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useUpdateComponents = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ components, id }: { components: IComponentsCreate, id: React.Key }) => axiosInstanceNoAuth.put(`/components/update/${id}`, components),
        onSuccess: () => {
            // notification.success({ message: trans.common.notify.editSuccess(trans.page.role._) })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
export const useDeleteComponents = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceNoAuth.put('/components/delete', { listIds }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            // notification.success({ message: trans.common.notify.deleteSuccess(trans.menu.article) })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}

export const useChangeStatusComponents = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { trans } = useTrans()
    return useMutation({
        mutationFn: ({ id }: { id: React.Key }) => axiosInstanceNoAuth.put(`/components/change-status/${id}`),
        onSuccess: () => {
            // notification.success({ message: trans.common.notify.changeStatusSuccess })
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
        },
    })
}
