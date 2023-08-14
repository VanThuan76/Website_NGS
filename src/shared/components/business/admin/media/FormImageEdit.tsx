import InputText from '@/components/common/form/InputText';
import { Button } from '@/components/common/ui/button';
import { Form } from '@/components/common/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import EditorImage from './EditorImage';
import { IImageMedia } from '@/mocks/admin/media';

type Props = {
  data: IImageMedia;
  onSubmit: (value: Partial<any>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<any>;
  onBack?: () => void;
};
const formSchema = z.object({
  path: z.string({ required_error: 'Vui lòng điền đường dẫn' }).min(1, { message: 'Vui lòng điền đường dẫn' }),
});

const FormImageEdit = ({ data, onSubmit, isLoading, defaultValue, onBack }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });
  return (
    <>
      <div className='w-full grid grid-cols-2 items-start justify-start gap-5 p-6'>
        <div className='w-full'>
          <EditorImage image={data.url} />
        </div>
        <div className='flex flex-col items-start justify-start'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptas dolorum aliquid totam facilis
            fugiat earum rerum quis enim nihil itaque nam, dolores quam vitae quas quia obcaecati accusantium ipsa?
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onError={e => {
                console.log(e);
              }}
              className='mt-5 space-y-4 grid grid-cols-2 justify-start items-start'
            >
              <InputText form={form} fieldName='name' label='Tên File' />
              <InputText form={form} fieldName='caption' label='Chú thích' />
              <InputText form={form} fieldName='path' label='Đường dẫn' />
              <InputText form={form} fieldName='location' label='Địa chỉ' />
              <div className='flex justify-start gap-4'>
                <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Lưu</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormImageEdit;
