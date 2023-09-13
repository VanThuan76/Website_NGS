import React from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: Partial<IComponents>;
};
const ServiceDesignThreeItem = ({ data }: Props) => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <h1 className='text-2xl md:text-4xl font-semibold text-orange-500'>{data.title}</h1>
      <p className='font-thin mt-5'>{data.description}</p>
    </div>
  );
};

export default ServiceDesignThreeItem;
