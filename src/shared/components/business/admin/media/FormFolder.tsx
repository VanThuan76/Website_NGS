import InputText from '@/components/common/form/InputText';
import { Button } from '@/components/common/ui/button';
import { Form } from '@/components/common/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  onSubmit: (value: Partial<any>) => void;
  isLoading?: boolean;
  defaultValue?: Partial<any>;
  onBack?: () => void;
};

const formSchema = z.object({
  name: z.string({ required_error: 'Vui lòng điền tên' }).min(1, { message: 'Vui lòng điền tên' }),
  author: z.string({ required_error: 'Vui lòng điền tác giả' }).min(1, { message: 'Vui lòng điền tác giả' }),
});

export default function FormFolder({ onSubmit, isLoading, defaultValue, onBack }: Props) {
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
    //setIsSlug(slug)
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={e => {
          console.log(e);
        }}
        className='mt-5 space-y-4 text-left'
      >
        <InputText form={form} fieldName='name' label='Tên' />
        <InputText form={form} fieldName='location' label='Địa chỉ' />
        <div className='flex justify-start gap-4'>
          <Button type='submit'> {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Lưu</Button>
        </div>
      </form>
    </Form>
  );
}
