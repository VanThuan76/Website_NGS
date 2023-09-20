import SectionCoreValue from '@/components/icon/ES/SectionCoreValue';
import React from 'react';

type Props = {
  className?: string;
};
const ESCoreValueSection = ({ className }: Props) => {
  return (
    <section
      id='ESCOREVALUE'
      className={`relative w-full h-[1105px] flex flex-col justify-center items-center ${className}`}
    >
      <SectionCoreValue className='object-cover' />
    </section>
  );
};


export default ESCoreValueSection;
