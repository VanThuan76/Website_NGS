import IconConnectUsDark from '@/components/icon/HO/connectUs/IconConnectUsDark';
import IconConnectUsLight from '@/components/icon/HO/connectUs/iconConnectUsLight';
import ConnectUsForm from './ConnectUsForm';
import { connectUsData } from '@/mocks/website/HO/connectUs';
import { useTheme } from 'next-themes';

const ConnectUsSection = () => {
  const { theme } = useTheme();
  return (
    <section id='ConnectUs' className='w-screen bg-[#FC5E03] px-4 dark:bg-[#5E18F4] md:px-24'>
      <div className='mx-auto my-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 rounded-md p-2 md:p-4 lg:flex-row lg:p-8'>
        <div className='flex w-full flex-col items-start justify-between gap-5 text-white lg:w-[50%]'>
          <h1 className='text-3xl lg:text-4xl'>Kết nối với NGS</h1>
          <p className='text-lg lg:text-xl'>Hãy để chúng tôi kết nối với bạn và mang lại những trải nghiệm đầu tiên</p>
          {theme === 'dark' ? (
            <IconConnectUsDark className='hidden lg:block' />
          ) : (
            <IconConnectUsLight className='hidden lg:block' />
          )}
        </div>
        <ConnectUsForm connectUsData={connectUsData} />
      </div>
    </section>
  );
};

export default ConnectUsSection;
