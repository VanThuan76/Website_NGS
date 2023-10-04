import useTrans from '@/hooks/useTrans';
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IBaseResponse } from '../typedef/IBaseResponse';
import { axiosInstanceNoAuth } from '../typedef/Axios';
import { ISection, ISectionCreate } from '../typedef/ISection';
const QUERY_KEY = 'Section';

// export interface ISection extends IBaseModel {
//     name: string
//     description: string,
//     order: number,
//     content: any,
//     code: string,
//     type: 'single' | 'loop'
// }
export const fakeData = [
  {
    id: 1,
    name: 'Banner',
    description: 'Junonia genoveua',
    order: 1,
    code: 'HO_banner',
  },
  {
    id: 2,
    name: 'Người NGS',
    description: 'Meles meles',
    order: 2,
    code: 'HO_solution',
  },
  {
    id: 3,
    name: 'Tin tức',
    description: 'Zonotrichia capensis',
    order: 3,
    code: 'HO_3',
  },
  {
    id: 4,
    name: 'Footer',
    description: 'Bubalus arnee',
    order: 4,
    code: 'HO_4',
  },
  {
    id: 5,
    name: 'Call us',
    description: 'unavailable',
    order: 5,
    code: 'HO_5',
  },
];
export const useGetListSection = ({ options }: { options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ISection>>('/section/get-all'),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useGetDetailSectionById = ({ id, options }: { id: React.Key; options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ISection>>('/section/get-by-id/' + id),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useGetDetailSectionByCompany = ({ id, options }: { id: React.Key; options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ISection>>('/section/get-by-company/' + id),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useGetDetailSectionByPage = ({ id, options }: { id: React.Key; options: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstanceNoAuth.get<IBaseResponse<ISection>>('/section/get-by-page/' + id),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
export const useCreateSection = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: (section: ISectionCreate) => axiosInstanceNoAuth.post('/section/create', section),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      // notification.success({ message: trans.common.notify.createSuccess(trans.menu.article) })
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};
export const useUpdateSection = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: ({ section, id }: { section: ISectionCreate; id: React.Key }) =>
      axiosInstanceNoAuth.put(`/section/update/${id}`, section),
    onSuccess: () => {
      // notification.success({ message: trans.common.notify.editSuccess(trans.page.role._) })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};
export const useDeleteSection = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: ({ listIds }: { listIds: React.Key[] }) => axiosInstanceNoAuth.put('/section/delete', { listIds }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      // notification.success({ message: trans.common.notify.deleteSuccess(trans.menu.article) })
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};

export const useChangeStatusSection = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { trans } = useTrans();
  return useMutation({
    mutationFn: ({ id }: { id: React.Key }) => axiosInstanceNoAuth.put(`/section/change-status/${id}`),
    onSuccess: () => {
      // notification.success({ message: trans.common.notify.changeStatusSuccess })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
    },
  });
};
