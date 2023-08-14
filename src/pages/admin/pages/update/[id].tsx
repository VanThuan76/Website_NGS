import { GetServerSideProps } from 'next';
import { ChevronLeft } from 'lucide-react';
import React from 'react';

import { pageAdminData } from '@/mocks/admin/page';
import { Button } from '@/components/common/ui/button';
import { Separator } from '@/components/common/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/common/ui/tabs';
import PageEditor from '@/components/business/admin/pages/PageEditor';
import TablePageRequest from '@/components/business/admin/pages/TablePageRequest';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

type Props = {
  id: React.Key;
};

type Content = {
  title?: string;
  image?: string;
};

export function EditPage({ id }: Props) {
  const [activeSection, setActiveSection] = React.useState(pageAdminData[0]);
  const [content, setContent] = React.useState<Record<string, Content>>();

  return (
    <section className='w-full'>
      <div className='flex justify-between'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Chỉnh sửa Page</h2>
          <p className='text-muted-foreground'>Chỉnh sửa nội dung trang web</p>
        </div>
        <Button>
          <ChevronLeft /> Quay trở lại
        </Button>
      </div>

      <Separator className='my-6' />
      <div className=' p-4 w-full rounded-lg space-y-2'>
        <Tabs defaultValue='1' className='w-full h-full'>
          <TabsList className='grid w-max grid-cols-2'>
            <TabsTrigger value='1'>Hiện tại</TabsTrigger>
            <TabsTrigger value='2'>Request</TabsTrigger>
          </TabsList>
          <TabsContent value='1' className='space-y-4'>
            <div className='space-x-2 text-right'>
              <Button variant={'outline'}>Edit</Button>
              <Button>Page Preview</Button>
            </div>
            <PageEditor />
          </TabsContent>
          <TabsContent value='2' className='space-y-4'>
            <TablePageRequest />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
EditPage.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default EditPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  return { props: { id: ctx.query.id } };
};
