import React from 'react'
import dynamic from 'next/dynamic';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

const PageChart = dynamic(() => import("@/components/business/admin/pages/PageChart"), { ssr: false })

export function Pages() {
  return (
    <PageChart />
  )
}
Pages.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Pages;