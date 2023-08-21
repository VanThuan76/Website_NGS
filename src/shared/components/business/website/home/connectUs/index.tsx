import IconConnectUsDark from '@/components/icon/connectUs/IconConnectUsDark';
import IconConnectUsLight from '@/components/icon/connectUs/iconConnectUsLight';
import { connectUsData } from '@/mocks/website/connectUs';
import { useTheme } from 'next-themes';
import FormConnectUs from './FormConnectUs';

const ConnectUs = () => {
  const { theme } = useTheme();
  return (
    <section className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <div className='w-full p-4 md:p-6 lg:p-12 flex flex-col lg:flex-row justify-between items-start bg-[#F06426] dark:bg-[#5E18F4] rounded-md'>
        <div className='w-full lg:w-[50%] flex flex-col justify-between items-start gap-5 text-white'>
          <h1 className='text-2xl lg:text-3xl'>Kết nối với NGS</h1>
          <p className='text-lg lg:text-xl'>
            Hãy cho chúng tôi biết về nhu cầu của bạn, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
          </p>
          {theme === 'dark' ? (
            <IconConnectUsDark className='hidden lg:block' />
          ) : (
            <IconConnectUsLight className='hidden lg:block' />
          )}
        </div>
        <FormConnectUs connectUsData={connectUsData} />
      </div>
    </section>
  );
};

export default ConnectUs;
