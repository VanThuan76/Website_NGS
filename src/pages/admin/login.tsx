import InputPassword from '@/components/common/form/InputPassword';
import InputText from '@/components/common/form/InputText';
import { Button } from '@/components/common/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/ui/card';
import { Form } from '@/components/common/ui/form';
import { Tabs, TabsContent } from '@/components/common/ui/tabs';
import BlankLayout from '@/components/layout/layoutAdmin/BlankLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useLogin } from 'src/shared/schemas/models/IUser';
import { z } from 'zod';

const Login = () => {
  const formSchema = z.object({
    username: z
      .string({ required_error: 'Vui lòng điền tên đăng nhập' })
      .min(1, { message: 'Vui lòng điền tên đăng nhập' }),
    password: z.string({ required_error: 'Vui lòng điền mật khẩu' }).min(1, { message: 'Vui lòng điền mật khẩu' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const doLogin = useLogin();
  function onSubmit(values: z.infer<typeof formSchema>) {
    doLogin.mutate(values);
  }
  return (
    <>
      <div className='relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative flex-col bg-muted p-10 text-white dark:border-r md:h-full lg:flex'>
          <div className='login-background absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <Image src='/logo.svg' width={48} height={48} alt='Logo' />
            &nbsp; {process.env.NEXT_PUBLIC_APP_NAME}
          </div>
          <div className='relative z-20 mt-auto'>
            <h1 className='text-4xl font-semibold tracking-tight'>
              <div className='text-yellow-400'>EMPOWER</div>
              <div>SUCCESS</div>
            </h1>
            <p className='mt-4 text-lg'>
              NGS nỗ lực trở thành doanh nghiệp hàng đầu Việt Nam, cung cấp các giải pháp - dịch vụ thông minh; đem lại
              giá trị lớn và phù hợp nhất cho khách hàng.
            </p>
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>Copyright &copy; NGSD 2023</p>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <Tabs defaultValue='merchant' className='mx-auto mt-4 w-[350px]'>
              {/* Merchant Login */}
              <TabsContent value='merchant'>
                <Card className='w-[350px]'>
                  <CardHeader>
                    <CardTitle>Đăng nhập</CardTitle>
                    <CardDescription>Nhập tên đăng nhập và mật khẩu để tiếp tục</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='grid w-full items-center gap-4'>
                          <InputText form={form} fieldName='username' label='Tên đăng nhập' placeHolder='@ngs.com.vn' />
                          <InputPassword
                            form={form}
                            fieldName='password'
                            label='Mật khẩu'
                            inputProps={{ type: 'password' }}
                          />
                          <div className='my-2 flex flex-col items-start'>
                            <Button variant='link' type='button' disabled className='h-auto p-0'>
                              Quên mật khẩu?
                            </Button>
                          </div>
                        </div>
                        <div className='flex justify-between'>
                          <Button className='flex w-full gap-2' type='submit'>
                            {doLogin.isLoading && <Loader2 size={16} className='animate-spin' />} Đăng nhập
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

Login.getLayout = (children: React.ReactNode) => <BlankLayout>{children}</BlankLayout>;

export default Login;
