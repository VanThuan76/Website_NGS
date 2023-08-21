import InputText from '@/components/common/form/InputText';
import { Button } from '@/components/common/ui/button';
import { Form } from '@/components/common/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import EditorImage from './EditorImage';
import { IImageMedia } from '@/mocks/admin/media';
import InputSelect from '@/components/common/form/InputSelect';
import AvatarEditor from 'react-avatar-editor';
import { useRef } from 'react';

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
  const cropRef = useRef(null);
  return (
    <>
      <div className='w-full grid grid-cols-2 items-start justify-start gap-5 p-6'>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
          <AvatarEditor
            ref={cropRef}
            image={data.url}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
          />
        </div>
        <div className='flex flex-col items-start justify-start gap-4'>
          <p>
            Điền thông tin ảnh:
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onError={e => {
                console.log(e);
              }}
              className='space-y-4 w-full'
            >
              <InputText form={form} fieldName='name' label='Tên File' />
              <InputText form={form} fieldName='caption' label='Chú thích' />
              <InputText form={form} fieldName='path' label='Đường dẫn' />
              <InputSelect options={[{ value: 1, label: 'folder1' }, { value: 2, label: 'folder2' }]} placeHolder='Chọn folder lưu trữ' form={form} fieldName='location' label='Địa chỉ' />
              <div className='flex justify-start gap-4'>
                <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Thay đổi ảnh</Button>
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
