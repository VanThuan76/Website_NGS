import IconConnectUsDark from '@/components/icon/HO/connectUs/IconConnectUsDark';
import IconConnectUsLight from '@/components/icon/HO/connectUs/iconConnectUsLight';
import ConnectUsForm from './ConnectUsForm';
import { useTheme } from 'next-themes';
import useTrans from '@/hooks/useTrans';

const ConnectUsSection = () => {
  const { theme } = useTheme();
  const { trans } = useTrans();
  return (
    <section id='ConnectUs' className='my-24 max-w-[1240px] rounded-lg bg-[#FC5E03] dark:bg-[#5E18F4]'>
      <div className='mx-auto my-auto grid w-full grid-cols-1 items-start justify-between gap-8 rounded-md px-4 py-10 md:grid-cols-12 md:p-20'>
        <div className='flex w-full flex-col items-start justify-between gap-5 text-white md:col-span-5'>
          <h1 className='text-3xl font-semibold lg:text-5xl'>{trans.website.formConnectUs.title}</h1>
          <p className='text-lg lg:text-xl'>{trans.website.formConnectUs.description}</p>
          {theme === 'dark' ? (
            <IconConnectUsDark className='hidden lg:block' />
          ) : (
            <IconConnectUsLight className='hidden lg:block' />
          )}
        </div>
        <div className='md:col-span-7'>
          <ConnectUsForm />
        </div>
      </div>
    </section>
  );
};

export default ConnectUsSection;
