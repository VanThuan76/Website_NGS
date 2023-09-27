import Footer from './footer';
import Header from './header';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='max-w-[1440px] min-h-screen dark:bg-[#141523]'>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWebsite;
