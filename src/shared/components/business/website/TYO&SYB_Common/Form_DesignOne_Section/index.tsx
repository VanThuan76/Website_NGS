import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import FormDesignOneItem from './Form_DesignOne_Item';
import IconMail from '@/components/icon/IconMail';
import { useTheme } from 'next-themes';
import BorderStyleForm from '@/components/icon/TYO&SYB_Common/BorderStyleForm';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const FormDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorIcon = theme !== 'dark' ? '#FC5E03' : '#fff';
  return (
    <section
      id={data.section.code}
      className={`relative overflow-hidden ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10 pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24'>
        <div className='w-full h-full flex flex-col justify-between items-start z-30'>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
            <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <IconMail color={colorIcon}/>
              <p>help@ngs.com</p>
            </div>
          </div>
        </div>
        <FormDesignOneItem />
      </div>
      <BorderStyleForm className='absolute w-full h-full -left-1/3 -top-[13%] z-10' />
    </section>
  );
};

export default FormDesignOneSection;
