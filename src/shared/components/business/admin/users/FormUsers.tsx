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
import { IUser } from 'src/shared/schemas/models/IUser';
import { z } from 'zod';
import TriggerDialogForm from '../media/TriggerDialogForm';
import InputEditor from '@/components/common/form/InputEditor';
import EditorBlock from '@/components/common/editor';
import useWarnIfUnsavedChanges from '@/hooks/useWarnIfUnsavedChanges';
import _ from 'lodash'
type Props = {
    onSubmit: (value: Partial<IUser>) => void;
    isLoading?: boolean;
    defaultValue?: Partial<IUser>;
    onBack?: () => void;
};

const formSchema = z.object({
    userName: z.string({ required_error: 'Vui lòng điền tên tài khoản' }).min(1, { message: 'Vui lòng điền tên tài khoản' }),
    fullName: z.string({ required_error: 'Vui lòng điền tên đầy đủ' }).min(1, { message: 'Vui lòng điền tên đầy đủ' }),
    phoneNumber: z.string({ required_error: 'Vui lòng điền số điện thoại' }).min(1, { message: 'Vui lòng điền số điện thoại' }),
    email: z.string({ required_error: 'Vui lòng điền email' }).min(1, { message: 'Vui lòng điền email' }),
    organizationDto: z.string({ required_error: 'Vui lòng điền mã Id tổ chức' }).min(1, { message: 'Vui lòng điền mã Id tổ chức' }),
    role: z.string({ required_error: 'Vui lòng điền vai trò' }).min(1, { message: 'Vui lòng điền vai trò' }),
  });

const FormUsers = ({ onSubmit, isLoading, defaultValue, onBack }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValue,
      });
      useEffect(() => {
        if (defaultValue) {
          console.log('there is data here' + JSON.stringify(defaultValue));
          
          let data: any = (({ id,createdDate, updatedDate, createdBy, updatedBy, ...theRest }) => theRest)(defaultValue);
          console.log('data filtered' + JSON.stringify((({ id,createdDate, updatedDate, createdBy, updatedBy, ...theRest }) => theRest)(defaultValue)));
          
          
          for (const [key, value] of Object.entries(data)) {
            form.setValue(key as any, value, {
              shouldDirty: true,
            });
            console.log(`Set form field "${key}" to value "${JSON.stringify(value)}"`);
          }
          
          
        }
      }, [defaultValue, form]);
      
    
      useWarnIfUnsavedChanges(form.formState.isDirty)
      return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onError={e => {
              console.log(e);
            }}
            className='space-y-4'
          >
            <InputText form={form} fieldName='userName' label='Tên tài khoản' />
            <InputText form={form} fieldName='fullName' label='Tên đầy đủ' />
            <InputText form={form} fieldName='phoneNumber' label='Số điện thoại' />
            <InputText form={form} fieldName='email' label='Email' />
            <InputText form={form} fieldName='organizationDto' label='Mã Id tổ chức' />
            <InputText form={form} fieldName='role' label='Vai trò' />
            {/* <UploadInput /> */}
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

export default FormUsers
