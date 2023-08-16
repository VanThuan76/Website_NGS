import { folderMedia, imageMedia } from '@/mocks/admin/media';
import Header from '@/components/business/admin/media/Header';
import CardFolder from '@/components/business/admin/media/CardFolder';
import CardImage from '@/components/business/admin/media/CardImage';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { useState } from 'react';
import useMediaModal from '@/hooks/useMediaModal';
import Pagination from '@/components/common/ui/pagination';

type Props = {
  viewMode: 'mutation' | 'view'
}

const Media = ({ viewMode = 'mutation' }: Props) => {
  return (
    <section className='w-full'>
      {viewMode === 'mutation'
        && <Header />}
      <div className='my-12 flex w-full flex-col gap-5'>
        <h2>Thư mục ({folderMedia.length})</h2>
        <div className='grid w-full grid-cols-2 items-start justify-start gap-3 border-b-2 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 max-h-[400px] lg:max-h-[600px] overflow-y-auto'>
          {folderMedia.map(item => {
            return <CardFolder data={item} key={item.id} viewMode={viewMode} />;
          })}
        </div>
        <div className='grid w-full grid-cols-2 items-start justify-start gap-2 md:gap-4 lg:gap-10 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 max-h-[400px] lg:max-h-[600px] overflow-y-auto'>
          {imageMedia.map(item => {
            return <CardImage data={item} key={item.url} viewMode={viewMode} />;
          })}
        </div>
        <Pagination totalPage={10} currentPage={1} pageSize={10} onChangeFunc={(value, page) => console.log(value, page)} />
      </div>
    </section>
  );
};

Media.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Media;
