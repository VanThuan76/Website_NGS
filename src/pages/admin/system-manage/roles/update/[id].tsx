import { useRouter } from 'next/router'
import { ListBulletIcon } from '@radix-ui/react-icons'

import FormRole from '@/components/business/admin/roles/FormRole'
import { Button } from '@/components/common/ui/button'
import { IRole, useGetDetailRole, useUpdateRole } from 'src/shared/schemas/models/IRole'
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout'
import { GetServerSideProps } from 'next'

type Props = {
    id: number
}

export function RoleUpdate ({id}: Props) {
    const router = useRouter()
    const detailRole = useGetDetailRole({id})
    const handleUpdateRole = useUpdateRole(() => {
        router.push('/roles')
    })
    function onSubmit(values: Partial<IRole>) {
        handleUpdateRole.mutate({id: id, Role: values})
    }
    return (
        <section className='w-full'>
            <div className='flex justify-between mb-6'>
            <div className='text-2xl font-bold'>Update Role</div>
            <Button onClick={() => router.push('/roles')}>
                <ListBulletIcon className='mr-2' /> List Role
            </Button>
            </div>
            <FormRole
            onSubmit={onSubmit}
            isLoading={handleUpdateRole.isLoading}
            defaultValue={detailRole.data}
            onBack={() => router.push('/roles')}
            />
        </section>
    )
}

RoleUpdate.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default RoleUpdate;

export const getServerSideProps: GetServerSideProps = async ctx => {
  return { props: { id: ctx.query.id } };
};