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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/common/ui/select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/useRedux';
import { setActiveSection } from 'src/shared/stores/pageEditorSlice';
import { toggleMenu } from 'src/shared/stores/appSlice';

type Props = {
  id: React.Key;
};

export function EditPage({ id }: Props) {
  const { data, pageName, sections, activeSectionCode } = useAppSelector(state => state.pageEditorSlice)
  const dispatch = useDispatch()
  return (
    <section className='w-full'>
      <div className='flex justify-between'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Chỉnh sửa {pageName}</h2>
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
            <div className='space-x-2 flex justify-end items-center'>
              <Select value={activeSectionCode} onValueChange={(e) => { dispatch(setActiveSection(e)) }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lựa chọn section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {sections.map(item => <SelectItem key={item.code} value={item.code}>{item.name}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <Button variant={'outline'}>Edit</Button> */}
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
