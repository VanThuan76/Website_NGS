import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  titleItem: string;
  data: Partial<IComponents>[];
};
const ServiceDesignOneItem = ({ data, titleItem }: Props) => {
  return (
    <div className='mt-6 flex h-full w-full flex-col items-start justify-start'>
      <p className='text-sm text-orange-500 md:text-2xl'>{titleItem}</p>
      {data.map((item, idx) => (
        <div key={idx} className='flex w-full items-center justify-between border-b border-slate-300 pb-4 pt-6'>
          <p className='text-base md:text-lg'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceDesignOneItem;
