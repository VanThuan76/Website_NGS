import useTrans from '@/hooks/useTrans';
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IBaseResponse } from '../typedef/IBaseResponse';
import { axiosInstance, axiosInstanceNoAuth } from '../typedef/Axios';
import { IDetailPageById, IPage, IDetailPageByCompany } from '../typedef/IPage';
const QUERY_KEY = 'Page';

export const useGetListPage = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstance.get<IBaseResponse<IPage[]>>('/pages/get-all'),
    select(data) {
      return data.data;
    },
  });
};
export const useGetDetailPageById = ({ id, options }: { id: React.Key; options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IDetailPageById>>('/pages/get-by-id/' + id),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useGetDetailPageByCompany = ({ id, options }: { id: React.Key; options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<IDetailPageByCompany>>('/pages/get-by-company/' + id),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useCreatePage = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: (page: IDetailPageByCompany) => axiosInstanceNoAuth.post('/pages/create', page),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      // notification.success({ message: trans.common.notify.createSuccess(trans.menu.article) })
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};

export const useDeletePage = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceNoAuth.put('/pages/delete', { listIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      // notification.success({ message: trans.common.notify.deleteSuccess(trans.menu.article) })
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};

export const useChangeStatusPage = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: ({ id }: { id: React.Key }) => axiosInstanceNoAuth.put(`/pages/change-status/${id}`),
    onSuccess: () => {
      // notification.success({ message: trans.common.notify.changeStatusSuccess })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};
