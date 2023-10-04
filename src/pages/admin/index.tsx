import React from 'react';
import dynamic from 'next/dynamic';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

const PageChart = dynamic(() => import('@/components/business/admin/pages/PageChart'), { ssr: false });

export function Admin() {
  return <div>Admin page</div>;
}
Admin.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Admin;
