import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconCheck from '@/components/icon/YNG/YNG_ERP/YNG_IconCheck';
import YNGCommonPilotSubriceForm from './YNGCommonPilotSubriceForm';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import FormDesignOneItem from '../../../TYO&SYB_Common/Form_DesignOne_Section/Form_DesignOne_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const YNGCommonPilotSubriceSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`w-full mb-4 md:mb-12 lg:mb-24 px-8 lg:px-24 py-20 ${className}`}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='w-full flex flex-col justify-start items-start'>
          <TitleSection
            title={title}
            name={data.section.name}
            description={data.section.description}
            findMore={true}
            className='w-full flex justify-start items-start font-medium'
          />
        </div>
        <div className={`w-full flex flex-col lg:flex-row justify-between items-center gap-16`}>
          <div className='w-full grid grid-cols-1 justify-start items-start'>
            {data.components.map((item, idx) => (
              <div key={idx} className='flex justify-start items-start gap-4 h-8'>
                <YNG_IconCheck />
                <p className='text-[16px] leading-[32px] font-semibold'>{item.title}</p>
                <div className='flex flex-col justify-start items-start gap-2'>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full'>
            <FormDesignOneItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YNGCommonPilotSubriceSection;
