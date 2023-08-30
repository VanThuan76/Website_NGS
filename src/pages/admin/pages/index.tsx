import React from 'react';
import dynamic from 'next/dynamic';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { useGetListPage } from 'src/shared/schemas/models/IPage';
import { IPage } from 'src/shared/schemas/typedef/IPage';

const PageChart = dynamic(() => import('@/components/business/admin/pages/PageChart'), { ssr: false });
export function Pages() {
  const { data: menuPageTree } = useGetListPage();
  return <React.Fragment>{menuPageTree && <PageChart menuPageTree={menuPageTree as IPage[]} />}</React.Fragment>;
}
Pages.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Pages;
