import React from 'react';
import { IBaseSectionComponentYourNextGen } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import YNGHomeSolutionSectionItem from './YNG_Home_Solution_Item';

type Props = {
  data: Partial<IBaseSectionComponentYourNextGen>;
  className?: string;
};

const YNGHomeSolutionSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`w-screen ${className}`}>
      <div className='mx-auto my-auto mt-14 flex w-full flex-col justify-between gap-6'>
        <div className='flex flex-col items-start justify-start gap-4 px-4 text-center md:px-24 md:text-left'>
          <p className='w-full text-base font-medium leading-5 text-[#FC5E03] md:text-2xl'>Giá trị cốt lõi</p>
          <h1 className='w-full border-b border-b-[#A6A6A6] pb-6 text-[32px] font-medium leading-10 tracking-[1px] md:text-5xl md:!leading-[48px]'>
            {data.section.name}
          </h1>
        </div>
        {data.components.map((item, idx) => (
          <YNGHomeSolutionSectionItem key={idx} item={item} className={`${idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default YNGHomeSolutionSection;
