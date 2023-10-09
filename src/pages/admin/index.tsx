import React from 'react';
import dynamic from 'next/dynamic';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import Head from 'next/head';
import useTrans from '@/hooks/useTrans';
export function Admin() {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.admin.title}</title>
        <link rel='icon' href='/logo.svg' sizes='any' />
      </Head>
      <div>Trang chủ</div>
    </React.Fragment>
  );
}
Admin.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Admin;
