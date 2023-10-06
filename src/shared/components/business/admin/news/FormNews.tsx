import InputText from '@/components/common/form/InputText';
import InputTextArea from '@/components/common/form/InputTextArea';
import { Button } from '@/components/common/ui/button';
import { Form, FormField, FormLabel } from '@/components/common/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, MoveLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAdminNews } from 'src/shared/schemas/models/INews';
import { z } from 'zod';
import TriggerDialogForm from '../media/TriggerDialogForm';
import InputEditor from '@/components/common/form/InputEditor';
import Media from 'src/pages/admin/media';
import useWarnIfUnsavedChanges from '@/hooks/useWarnIfUnsavedChanges';
import convertSlug from '@/utils/functions/convertSlug';
import _ from 'lodash';

type Props = {
  onSubmit: (value: Partial<IAdminNews>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<IAdminNews>;
  onBack?: () => void;
};

const formSchema = z.object({
  title: z.string({ required_error: 'Vui lòng điền tiêu đề' }).min(1, { message: 'Vui lòng điền tiêu đề' }),
  description: z
    .string({ required_error: 'Vui lòng điền phần mô tả' })
    .min(1, { message: 'Vui lòng điền phần mô tả' })
    .optional(),
  content: z.string().optional(),

  image: z.string().optional(),
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
          shouldDirty: true,
        });
      }
    }
  }, [defaultValue, form]);
  const title = form.watch('title');

  useWarnIfUnsavedChanges(form.formState.isDirty);
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
        <div>
          <FormLabel>Slug của bài viết</FormLabel> : {convertSlug(title)}
        </div>
        {/* <UploadInput /> */}
        <TriggerDialogForm
          titleDialog='Trình ảnh'
          className='lg:min-w-[1080px] xl:min-w-[1080px]'
          trigger={
            <div
              className='flex h-9 cursor-pointer items-center justify-center rounded-lg border-2 border-slate-300 px-4 py-2 dark:bg-white dark:text-black'
              data-value='image/123123asdasd'
            >
              Tải ảnh
            </div>
          }
          form={<FormField control={form.control} name={'image'} render={({ field }) => <Media viewMode='view' />} />}
        />
        <InputTextArea form={form} fieldName='description' label='Description' />
        <InputEditor form={form} fieldName='content' label='Content' />

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
