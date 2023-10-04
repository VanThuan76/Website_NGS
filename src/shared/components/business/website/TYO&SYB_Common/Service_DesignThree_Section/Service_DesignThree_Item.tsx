import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: Partial<IComponents>;
};
const ServiceDesignThreeItem = ({ data }: Props) => {
  return (
    <div className='flex w-full flex-col items-start justify-start gap-2 rounded-lg border border-orange-500 p-6 md:p-10'>
      {data.title && <h1 className='w-full text-left text-2xl font-medium text-[#FC5E03] md:text-3xl'>{data.title}</h1>}
      <div className='flex w-full flex-col items-start justify-start gap-2'>
        {splitTextToArrayByDoubleSlash(data.description || '').map((item: string, idx: number) => (
          <p key={idx} className='w-full text-left text-xs md:text-base'>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDesignThreeItem;
