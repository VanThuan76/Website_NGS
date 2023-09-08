import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ListBulletIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/common/ui/button';
import { IAdminNews, useGetDetailNews, useUpdateNews } from 'src/shared/schemas/models/INews';
import FormNews from '@/components/business/admin/news/FormNews';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

type Props = {
  id: number;
};

export function NewsUpdate({ id }: Props) {
  const data = useGetDetailNews({ id });
  const handleUpdateNews = useUpdateNews(() => {
    router.push('/news');
  });
  function onSubmit(values: Partial<IAdminNews>) {
    handleUpdateNews.mutate({ id: id, news: values });
  }
  const router = useRouter();
  return (
    <section className='w-full'>
      <div className='flex justify-between mb-6'>
        <div className='text-2xl font-bold'>Update News</div>
        <Button onClick={() => router.push('/news')}>
          <ListBulletIcon className='mr-2' /> List News
        </Button>
      </div>
      <FormNews
        onSubmit={onSubmit}
        isLoading={handleUpdateNews.isLoading}
        defaultValue={data.data}
        onBack={() => router.push('/news')}
      />
    </section>
  );
}

NewsUpdate.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default NewsUpdate;

export const getServerSideProps: GetServerSideProps = async ctx => {
  return { props: { id: ctx.query.id } };
};
