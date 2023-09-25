import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  titleItem: string;
  data: Partial<IComponents>[];
};
const ServiceDesignOneItem = ({ data, titleItem }: Props) => {
  return (
    <div className='mt-16 flex flex-col justify-start items-start'>
      <p className='text-sm md:text-2xl text-orange-500'>{titleItem}</p>
      {data.map((item, idx) => (
        <div key={idx} className='w-full flex justify-between items-center pt-6 pb-4 border-b border-slate-300'>
          <p className='text-base md:text-lg'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceDesignOneItem;
