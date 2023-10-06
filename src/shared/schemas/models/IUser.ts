import { IBaseModel } from '../typedef/IBaseModel';
import { IBaseResponse } from '../typedef/IBaseResponse';
import { axiosInstanceUMSNoAuth } from '../typedef/Axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@/components/common/ui/use-toast';
import { APP_SAVE_KEY } from '@/utils/constants';
import { login } from 'src/shared/stores/appSlice';
import { useAppDispatch } from '@/hooks/useRedux';

export interface IUser extends IBaseModel {
  id: number;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  role: string;
  organizationDto: string;
}
const QUERY_KEY = 'UserModel';

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (User: { username: string; password: string }) =>
      axiosInstanceUMSNoAuth.post<IBaseResponse<any>>('/auth/login', User),
    onSuccess: data => {
      if (!data.data.token) return;
      setCookie(APP_SAVE_KEY.TOKEN_KEY, data.data.token);
      dispatch(login(data.data.user));
      toast({
        variant: 'success',
        title: 'Đăng nhập thành công',
        description: 'Chào mừng bạn đăng nhập vào hệ thống',
      });
      router.push('/admin');
    },
    onError(error, variables, context) {
      toast({
        variant: 'destructive',
        title: 'Đăng nhập thất bại',
        description: 'Vui lòng kiểm tra lại thông tin đăng nhập và mật khẩu',
      });
      console.log(error);
    },
  });
};

export const useGetInfoByToken = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const whiteLists = ['/admin/login'];
  return useQuery({
    queryKey: ['GET_PROFILE'],
    queryFn: () => axiosInstanceUMSNoAuth.get<IUser>('rest/userInfo'),
    onSuccess(data) {
      setCookie(APP_SAVE_KEY.LOGIN_STATUS, 'true');
      dispatch(login({ ...data }));
    },
    enabled: !whiteLists.includes(router.pathname),
  });
};
