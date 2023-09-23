import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';

interface Props {
  title: string;
  name: string;
  description: string;
  findMore: boolean;
  className?: string;
}
const TitleSection = (data: Partial<Props>) => {
  return (
    <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-4 mt-5'>
      <p className={`text-sm md:text-2xl text-orange-500 ${data.className}`}>{data.title}</p>
      <div className={`w-full gap-[40px] ${data.className}`}>
        <div className='w-full flex flex-col justify-start items-start'>
          {splitTextToArrayByDoubleSlash(data.name || '').map((item: string, idx: number) => (
            <h1
              style={{ lineHeight: '48px' }}
              key={idx}
              className={`text-2xl md:text-4xl font-medium ${data.className}`}
            >
              {item}
            </h1>
          ))}
        </div>
        {data.findMore ? (
          <div className={`w-[550px] flex flex-col justify-start items-start mb-10 ${data.className}`}>
            {splitTextToArrayByDoubleSlash(data.description || '').map((item: string, idx: number) => (
              <p
                key={idx}
                className='col-span-1 text-sm md:text-base font-medium not-italic text-[#757575] dark:text-[#C2C0BF]'
              >
                {item}
              </p>
            ))}
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
