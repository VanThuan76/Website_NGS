import React from 'react';
import dynamic from 'next/dynamic';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { useGetListPage } from 'src/shared/schemas/models/IPage';
import { IPage } from 'src/shared/schemas/typedef/IPage';
import Head from 'next/head';
import useTrans from '@/hooks/useTrans';
import { pageAdminData } from '@/mocks/admin/page';

const PageChart = dynamic(() => import('@/components/business/admin/pages/PageChart'), { ssr: false });
export function PagesManage() {
  const { trans } = useTrans();
  const { data: menuPageTree } = useGetListPage();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.admin.title}</title>
        <link rel='icon' href='/logo.svg' sizes='any' />
      </Head>
      {pageAdminData && <PageChart menuPageTree={pageAdminData as IPage[]} />}
    </React.Fragment>
  );
}
PagesManage.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default PagesManage;
