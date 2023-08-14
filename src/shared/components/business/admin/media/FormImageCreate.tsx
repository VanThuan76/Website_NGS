import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/common/ui/tabs';
import InputTextArea from '@/components/common/form/InputTextArea';
import { Button } from '@/components/common/ui/button';
import { Form } from '@/components/common/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import UploadImage from './UploadImage';

type Props = {
  onSubmit: (value: Partial<any>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<any>;
  onBack?: () => void;
};
const formSchema = z.object({
  path: z.string({ required_error: 'Vui lòng điền đường dẫn' }).min(1, { message: 'Vui lòng điền đường dẫn' }),
});

const FormImageCreate = ({ onSubmit, isLoading, defaultValue, onBack }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });
  return (
    <>
      <Tabs defaultValue='local' className='mt-5 w-[400px]'>
        <TabsList>
          <TabsTrigger value='local'>Tải lên từ máy</TabsTrigger>
          <TabsTrigger value='url'>Từ URL</TabsTrigger>
        </TabsList>
        <TabsContent value='local'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onError={e => {
                console.log(e);
              }}
              className='mt-5 space-y-4'
            >
              <UploadImage />
              <div className='flex justify-start gap-4'>
                <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Lưu</Button>
              </div>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value='url'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onError={e => {
                console.log(e);
              }}
              className='mt-5 space-y-4'
            >
              <InputTextArea form={form} fieldName='path' label='Đường dẫn' />
              <div className='flex justify-start gap-4'>
                <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Lưu</Button>
              </div>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default FormImageCreate;
