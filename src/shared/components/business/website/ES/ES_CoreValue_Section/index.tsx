import SectionCoreValue from '@/components/icon/ES/SectionCoreValue';
import React from 'react';

type Props = {
  className?: string;
};
const ESCoreValueSection = ({ className }: Props) => {
  return (
    <section
      id='ESCOREVALUE'
      className={`relative w-full h-[1105px] px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <SectionCoreValue className='absolute bottom-0 -left-20 object-cover' />
    </section>
  );
};

export default ESCoreValueSection;
