import IconConnectUsDark from '@/components/icon/HO/connectUs/IconConnectUsDark';
import IconConnectUsLight from '@/components/icon/HO/connectUs/iconConnectUsLight';
import ConnectUsForm from './ConnectUsForm';
import { connectUsData } from '@/mocks/website/HO/connectUs';
import { useTheme } from 'next-themes';

const ConnectUsSection = () => {
  const { theme } = useTheme();
  return (
    <section id="ConnectUs" className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 md:px-24 lg:px-32 xl:px-40'>
      <div className='max-w-[1440px] w-full mx-auto my-auto p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row gap-10 justify-between items-start rounded-md bg-[#F06426] dark:bg-[#5E18F4] '>
        <div className='w-full lg:w-[50%] flex flex-col justify-between items-start gap-5 text-white'>
          <h1 className='text-3xl lg:text-4xl'>Kết nối với NGS</h1>
          <p className='text-lg lg:text-xl'>
            Hãy cho chúng tôi biết về nhu cầu của bạn, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
          </p>
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
