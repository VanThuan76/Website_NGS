import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ESEnvironment = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative w-full px-4 md:px-24 lg:px-32 bg-[#FFF8F5] ${className}`}>
      <div className='w-[80%] mx-auto my-auto flex flex-col lg:flex-row gap-5 justify-between items-center pt-16 pb-4 md:pb-8 lg:pb-16 xl:pb-24'>
        <div className='w-full flex flex-col justify-center items-center gap-3'>
          <h1 className='text-xl lg:text-2xl text-orange-500'>{data.section.name}</h1>
          <p className='text-center'>{data.section.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ESEnvironment;
