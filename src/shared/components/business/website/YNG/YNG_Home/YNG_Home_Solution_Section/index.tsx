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
    <section id={data.section.code} className={`max-w-[1440px] ${className}`}>
      <div className='w-full mx-auto my-auto mt-14 flex flex-col justify-between'>
        <div className='flex flex-col justify-start items-start gap-4 px-24'>
          <p className='text-sm md:text-2xl text-[#FC5E03] font-medium'>Giá trị cốt lõi</p>
          <h1 className='text-2xl md:text-5xl font-medium !leading-[48px] tracking-[1px]'>{data.section.name}</h1>
        </div>
        {data.components.map((item, idx) => (
          <YNGHomeSolutionSectionItem key={idx} item={item} className={`${idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default YNGHomeSolutionSection;
