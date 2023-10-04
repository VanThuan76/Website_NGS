import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconCheck from '@/components/icon/YNG/YNG_ERP/YNG_IconCheck';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import BorderStyleForm from '@/components/icon/TYO&SYB_Common/BorderStyleForm';
import FormDesignOneItem from '../../../TYO&SYB_Common/Form_DesignOne_Section/Form_DesignOne_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const YNGCommonPilotSubriceSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id='FormYNG' className={`relative mb-4 w-screen px-8 md:mb-12 md:mb-24 md:px-24 ${className}`}>
      <div className='mx-auto my-auto grid w-full grid-cols-1 items-start justify-start gap-24 py-20 md:grid-cols-2'>
        <div className='flex w-full flex-col items-start justify-start gap-[50px]'>
          <TitleSection
            title={title}
            name={data.section.name}
            description={data.section.description}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-0 !text-left'
          />
          <div className='grid w-full grid-cols-1 items-start justify-start'>
            {data.components.map((item, idx) => (
              <div key={idx} className='flex h-8 items-start justify-start gap-4'>
                <YNG_IconCheck />
                <p className='text-[16px] font-semibold leading-[32px]'>{item.title}</p>
                <div className='flex flex-col items-start justify-start gap-2'></div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full'>
          <FormDesignOneItem />
        </div>
      </div>
      <BorderStyleForm className='absolute -left-1/3 bottom-0 z-10 h-full w-full' />
    </section>
  );
};

export default YNGCommonPilotSubriceSection;
