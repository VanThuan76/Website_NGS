import usePagination from '@/hooks/usePagination';
import { axiosInstance } from '../typedef/Axios';
import { UseQueryOptions, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/common/ui/use-toast';
import { IBaseResponse, IBaseResponseWithCount } from '../typedef/IBaseResponse';
import { IBaseModel } from '../typedef/IBaseModel';
import { Filter } from '../typedef/ISearchParams';

const QUERY_KEY = 'getListCategories';

export interface ICategories extends IBaseModel {
  name: string;
  description: string;
  image: string;
  active: boolean;
}

export const useGetListCategories = (defaultFilter?: Filter[]) => {
  return usePagination<IBaseResponse<IBaseResponseWithCount<ICategories[]>>>({
    queryKey: [QUERY_KEY],
    apiFn: params =>
      axiosInstance.post<IBaseResponse<IBaseResponseWithCount<ICategories[]>>>('/categories/search', { ...params }),
    defaultParams: {
      page: 0,
      size: 10,
      filters: defaultFilter,
      sorts: [{ field: 'updatedDate', direction: 'DESC' }],
    },
  });
};

export const useGetDetailCategories = ({ id, options }: { id: React.Key; options?: Partial<UseQueryOptions> }) => {
  return useQuery({
    queryKey: [QUERY_KEY, 'get-detail', id],
    queryFn: () => axiosInstance.get<IBaseResponse<ICategories>>('/categories/get-by-id/' + id),
    select(data) {
      return data.data;
    },
    enabled: options?.enabled,
  });
};

export const useCreateCategory = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (categories: Partial<ICategories>) => axiosInstance.post('/categories/create', categories),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Tạo categories thành công',
      });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Tạo categories thất bại',
      });
    },
  });
};

export const useUpdateCategories = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: ({ id, categories }: { id: React.Key; categories: Partial<ICategories> }) =>
      axiosInstance.put(`/categories/update/${id}`, categories),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Cập nhật categories thành công',
      });
    },
  });
};

export const useDeleteCategory = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: ({ id }: { id: React.Key }) => axiosInstance.delete('/categories/delete/' + id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Xóa categories thành công',
      });
    },
    onError: (err: any) => {
      console.log(err);
      toast({
        variant: 'destructive',
        title: err?.data?.data || 'Xóa Categories thất bại',
      });
    },
  });
};

export const useChangeStatusCategories = (onSuccessHandle?: () => void) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: ({ id }: { id: React.Key }) => axiosInstance.put(`/Categories/change-status/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      if (onSuccessHandle) onSuccessHandle();
      toast({
        variant: 'success',
        title: 'Thay doi galleries thành công',
      });
    },
  });
};

export const useGetDetailCategoriesBySlug = ({
  slug,
  options,
}: {
  slug: string;
  options: Partial<UseQueryOptions>;
}) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axiosInstance.get<IBaseResponse<ICategories>>('/categories/get-by-slug/' + slug),
    select(data) {
      return data.data;
    },
    enabled: options.enabled,
  });
};
