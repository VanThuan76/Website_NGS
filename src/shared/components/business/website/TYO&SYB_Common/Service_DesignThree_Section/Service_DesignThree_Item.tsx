import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: Partial<IComponents>;
};
const ServiceDesignThreeItem = ({ data }: Props) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-start items-start p-10 rounded-lg border border-orange-500 text-left'>
      <h1 className='text-2xl md:text-3xl font-medium text-[#FC5E03]'>{data.title}</h1>
      <div className='mt-8 flex flex-col justify-center items-center gap-2'>
        {splitTextToArrayByDoubleSlash(data.description || "").map((item: string, idx: number) => (
          <p key={idx} className='text-xs md:text-base'>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDesignThreeItem;
