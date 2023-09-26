import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: Partial<IComponents>;
};
const ServiceDesignThreeItem = ({ data }: Props) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-start items-start p-10 rounded-lg border border-orange-500'>
      {data.title && <h1 className='w-full text-2xl md:text-3xl font-medium text-[#FC5E03] text-left'>{data.title}</h1>}
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        {splitTextToArrayByDoubleSlash(data.description || '').map((item: string, idx: number) => (
          <p key={idx} className='w-full text-xs md:text-base text-left'>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDesignThreeItem;
