import { useRouter } from 'next/router';
import { ListBulletIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/common/ui/button';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { ICategories, useCreateCategory } from 'src/shared/schemas/models/ICategory';
import FormCategory from '@/components/business/admin/news/FormCategory';

type Props = {};

export function CreateCategory({}: Props) {
  const router = useRouter();

  const createCategory = useCreateCategory(() => router.push('/Category'));
  function onSubmit(values: Partial<ICategories>) {
    // beforeCreate(values)
    createCategory.mutate(values);
  }
  return (
    <section className='w-full'>
      <div className='mb-6 flex justify-between'>
        <div className='text-2xl font-bold'>Create Category</div>
        <Button onClick={() => router.push('/admin/Category')}>
          <ListBulletIcon className='mr-2' />
          List Category
        </Button>
      </div>
      <FormCategory onSubmit={onSubmit} isLoading={createCategory.isLoading} onBack={() => router.push('/category')} />
    </section>
  );
}
CreateCategory.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default CreateCategory;
