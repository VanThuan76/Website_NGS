import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ListBulletIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/common/ui/button';
import FormUsers from '@/components/business/admin/users/FormUsers';
import { IUser } from 'src/shared/schemas/models/IUser';

import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

type Props = {
  id: number;
};

export function UsersUpdate({ id }: Props) {
  const generateFakeUser = (id: any) => ({
    id: id + 1,
    userName: `user${id + 1}`,
    fullName: `Full Name ${id + 1}`,
    phoneNumber: `123-456-789${id + 1}`,
    email: `user${id + 1}@example.com`,
    organizationDto: `${id + 1}`,
    role: `Role ${id + 1}`,
  });

  const data = Array.from({ length: 20 }, (_, index) => generateFakeUser(index));

  const filteredData = data.find(user => id == user.id);

  console.log('No ID heres' + JSON.stringify(filteredData));

  function onSubmit(values: Partial<IUser>) {}
  const router = useRouter();
  return (
    <section className='w-full'>
      <div className='mb-6 flex justify-between'>
        <div className='text-2xl font-bold'>Update users</div>
        <Button onClick={() => router.push('/admin/system-manage/users')}>
          <ListBulletIcon className='mr-2' /> List Users
        </Button>
      </div>
      <FormUsers
        onSubmit={onSubmit}
        defaultValue={filteredData as any}
        onBack={() => router.push('/admin/system-manage/users')}
      />
    </section>
  );
}

UsersUpdate.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default UsersUpdate;

export const getServerSideProps: GetServerSideProps = async ctx => {
  return { props: { id: ctx.query.id } };
};
