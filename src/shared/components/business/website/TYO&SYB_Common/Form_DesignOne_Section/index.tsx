import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import FormDesignOneItem from './Form_DesignOne_Item';
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
    <section id='FormCTA' className={`relative w-screen overflow-hidden ${className}  `}>
      <div className='mx-auto my-auto mt-10 grid w-full grid-cols-1 items-start justify-between gap-10 px-4 pb-4 md:grid-cols-2 md:px-24 md:pb-8 lg:pb-16 xl:pb-24'>
        <div className='z-30 flex h-full w-full flex-col items-start justify-between'>
          <div className='flex flex-col items-start justify-start gap-3'>
            <p className='text-sm text-orange-500 md:text-2xl'>{title}</p>
            <h1 className='text-2xl font-semibold md:text-4xl'>{data.section.name}</h1>
          </div>
        </div>
        <FormDesignOneItem />
      </div>
      <BorderStyleForm className='absolute -left-[50%] bottom-0 z-10 h-full w-full md:-top-[13%]' />
    </section>
  );
};

export default FormDesignOneSection;
