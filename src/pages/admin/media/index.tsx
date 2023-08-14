import { folderMedia, imageMedia } from '@/mocks/admin/media';
import Header from '@/components/business/admin/media/Header';
import CardFolder from '@/components/business/admin/media/CardFolder';
import CardImage from '@/components/business/admin/media/CardImage';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

const Media = () => {
  return (
    <section className='w-full'>
      <Header />
      <div className='my-12 flex w-full flex-col gap-5'>
        <h2>Thư mục ({folderMedia.length})</h2>
        <div className='grid w-full grid-cols-1 items-start justify-start gap-10 border-b-2 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {folderMedia.map(item => {
            return <CardFolder data={item} />;
          })}
        </div>
        <div className='grid w-full grid-cols-1 items-start justify-start gap-10 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {imageMedia.map(item => {
            return <CardImage data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

Media.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Media;
