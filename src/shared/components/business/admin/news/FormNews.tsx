import InputText from '@/components/common/form/InputText';
import InputTextArea from '@/components/common/form/InputTextArea';
import { Button } from '@/components/common/ui/button';
import { Form } from '@/components/common/ui/form';
import convertSlug from '@/utils/functions/convertSlug';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, MoveLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Media from 'src/pages/admin/media';
import { IAdminNews } from 'src/shared/schemas/models/INews';
import { z } from 'zod';
import TriggerDialogForm from '../media/TriggerDialogForm';

type Props = {
  onSubmit: (value: Partial<IAdminNews>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<IAdminNews>;
  onBack?: () => void;
};

const formSchema = z.object({
  title: z.string({ required_error: 'Vui lòng điền tiêu đề' }).min(1, { message: 'Vui lòng điền tiêu đề' }),
  description: z.string({ required_error: 'Vui lòng điền phần mô tả' }).min(1, { message: 'Vui lòng điền phần mô tả' }),
  content: z
    .string({ required_error: 'Vui lòng điền phần nội dung' })
    .min(1, { message: 'Vui lòng điền phần nội dung' }),
  image: z.string(),
  author: z.string({ required_error: 'Vui lòng điền tác giả' }).min(1, { message: 'Vui lòng điền tác giả' }),
});

export default function FormNews({ onSubmit, isLoading, defaultValue, onBack }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });
  useEffect(() => {
    if (defaultValue) {
      for (const [key, value] of Object.entries(defaultValue)) {
        form.setValue(key as any, value, {
          // shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }, [defaultValue, form]);

  const [isSlug, setIsSlug] = useState<string>();
  const handleSlug = () => {
    const slug = convertSlug(form.getValues('title') as string);
    console.log(form);
    //setIsSlug(slug)
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={e => {
          console.log(e);
        }}
        className='space-y-4'
      >
        <InputText form={form} fieldName='title' label='Title' />
        <InputText form={form} fieldName='slug' label='Slug' />
        {/* <UploadInput /> */}
        <TriggerDialogForm
          titleDialog='Trình ảnh'
          trigger={
            <div className='dark:bg-white dark:text-black h-9 px-4 py-2 flex justify-center items-center border-2 border-slate-300 rounded-lg'>
              Tải ảnh
            </div>
          }
          form={<Media />}
        />
        <InputTextArea form={form} fieldName='description' label='Description' />
        <InputTextArea form={form} fieldName='content' label='Content' />
        <InputText form={form} fieldName='author' label='Author' />
        <div className='flex justify-start gap-4'>
          <Button type='reset' onClick={() => onBack && onBack()} variant={'outline'}>
            <MoveLeft className='mr-2 h-4 w-4 ' /> Hủy
          </Button>
          <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Lưu</Button>
        </div>
      </form>
    </Form>
  );
}
