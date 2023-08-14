import CardImage from "@/components/business/admin/media/CardImage";
import Header from "@/components/business/admin/media/Header";
import DashBoardLayout from "@/components/layout/layoutAdmin/DashboardLayout";
import { imageMedia } from "@/mocks/admin/media";

const Folder = () => {
  return (
    <section className='w-full'>
    <Header />
    <div className='my-12 grid w-full grid-cols-1 items-start justify-start gap-10 border-b-2 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {imageMedia.map(item => {
        return <CardImage data={item} />;
      })}
    </div>
    </section>
  );
};

Folder.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default Folder;
