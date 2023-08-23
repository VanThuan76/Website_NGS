import React from 'react';
import FormNews from '@/components/business/admin/news/FormNews';
import { useRouter } from 'next/router';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { ListBulletIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/common/ui/button'
import FormUsers from '@/components/business/admin/users/FormUsers';
import { IUser } from 'src/shared/schemas/models/IUser';



const CreateUser = () => {
    const router = useRouter();

    const createUsers = (() =>
        router.push('/users')
    )
    function onSubmit(values: Partial<IUser>) {
    
    }
    
    return (
        <section className='w-full'>
                <div className='flex justify-between mb-6'>
                    <div className='text-2xl font-bold'>Create Users</div>
                    <Button onClick={() => router.push('/admin/system-manage/users')}><ListBulletIcon className='mr-2' />List Users</Button>
                </div>
                <FormUsers onSubmit={onSubmit} onBack={() => router.push('/users')} />
            </section>
    )
}

CreateUser.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default CreateUser
