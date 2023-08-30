import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/useRedux';

import { Button } from '@/components/common/ui/button';
import { Separator } from '@/components/common/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/common/ui/tabs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/ui/select';
import PageEditor from '@/components/business/admin/pages/PageEditor';
import TablePageRequest from '@/components/business/admin/pages/TablePageRequest';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

import { setActiveSection } from 'src/shared/stores/pageEditorSlice';
import { ISection } from 'src/shared/schemas/typedef/ISection';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IDetailPageById } from 'src/shared/schemas/typedef/IPage';

type Props = {
  informationPage: IDetailPageById,
  sections: ISection[];
};

export function EditPage({ informationPage, sections }: Props) {
  const { pageName, activeSectionCode } = useAppSelector(state => state.pageEditorSlice);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <section className='w-full'>
      <div className='flex justify-between'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Chỉnh sửa {informationPage.name}</h2>
          <p className='text-muted-foreground'>Lần sửa gần nhất: {informationPage.updatedDate}</p>
        </div>
        <Button onClick={() => router.push('/admin/pages')}>
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
              <Select
                value={activeSectionCode}
                onValueChange={e => {
                  dispatch(setActiveSection(e));
                }}
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Lựa chọn section' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {sections && sections.map(item => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.name}
                      </SelectItem>
                    ))}
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

export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params?.id;
  try {
    const detailPageResponse = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/pages/get-by-id/${id}`);
    const dataDetailPage = await detailPageResponse.json();
    const informationPage = dataDetailPage.data
    const sectionResponse = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/section/get-by-page/${id}`);
    const dataSection = await sectionResponse.json();
    const sections = dataSection.data;
    return {
      props: {
        informationPage,
        sections,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        informationPage: undefined,
        sections: [],
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  return {
    paths: [],
    fallback: true,
  };
};
