import { useRouter } from 'next/router';
import { ListBulletIcon } from '@radix-ui/react-icons';

import FormRole from '@/components/business/admin/roles/FormRole';
import { Button } from '@/components/common/ui/button';
import { IRole, useCreateRole } from 'src/shared/schemas/models/IRole';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

type Props = {};

export function CreateRole({}: Props) {
  const router = useRouter();

  const createRole = useCreateRole(() => router.push('./roles'));
  function onSubmit(values: Partial<IRole>) {
    // beforeCreate(values)
    createRole.mutate(values);
  }
  return (
    <section className='w-full'>
      <div className='mb-6 flex justify-between'>
        <div className='text-2xl font-bold'>Create Role</div>
        <Button onClick={() => router.push('/admin/system-manage/roles')}>
          <ListBulletIcon className='mr-2' />
          List Role
        </Button>
      </div>
      <FormRole
        onSubmit={onSubmit}
        isLoading={createRole.isLoading}
        onBack={() => router.push('/admin/system-manage/roles')}
      />
    </section>
  );
}
CreateRole.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default CreateRole;
