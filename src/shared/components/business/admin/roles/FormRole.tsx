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
import { z } from 'zod';
import TriggerDialogForm from '../media/TriggerDialogForm';
import InputEditor from '@/components/common/form/InputEditor';
import EditorBlock from '@/components/common/editor';
import useWarnIfUnsavedChanges from '@/hooks/useWarnIfUnsavedChanges';
import _ from 'lodash';
import { IRole } from 'src/shared/schemas/models/IRole';
import TableRole from './TableRole';

type Props = {
  onSubmit: (value: Partial<IRole>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<IRole>;
  onBack?: () => void;
};
const formSchema = z.object({
  roleName: z.string({ required_error: 'Vui lòng điền tên vai trò' }).min(1, { message: 'Vui lòng điền tên vai trò' }),
  description: z.string({ required_error: 'Vui lòng điền phần mô tả' }).min(1, { message: 'Vui lòng điền phần mô tả' }),
});

export default function FormRole({ onSubmit, isLoading, defaultValue, onBack }: Props) {
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
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={e => {
          console.log(e);
        }}
        className='space-y-4'
      >
        <InputText form={form} fieldName='roleName' label='Role Name' />
        <InputTextArea form={form} fieldName='description' label='Description' />
        <TableRole />
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
