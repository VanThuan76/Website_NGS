import BtnCommon from '@/components/common/customization/BtnCommon';
import ImageResponsiveCoreValue from '@/components/icon/ES/ImageResponsiveCoreValue';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: IComponents[];
};

const ESCoreValueResponsive = ({ data }: Props) => {
  const [defaultIndex, setDefaultIndex] = useState(0);
  const handleTransform = () => {
    setDefaultIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex >= 3 ? 0 : newIndex;
    });
  };
  return (
    <div className='grid w-full grid-cols-1 items-center justify-center gap-5 md:hidden'>
      <ImageResponsiveCoreValue className='w-full' />
      {data.map((item, idx) => (
        <div
          className={`${idx === defaultIndex ? 'flex' : 'hidden'} flex-col items-start justify-start gap-[20px]`}
          key={idx}
        >
          {item.title.split('//').map((title, idxTitle) => (
            <div key={idxTitle} className='flex flex-col gap-1'>
              <div className='border-bg-[#FC5E03] flex w-[135px] items-center justify-center rounded-full border px-4 py-2'>
                <p className='text-sm font-normal text-[#FC5E03]'>{title}</p>
              </div>
              {item.description.split('//').map((description, idxDes) => (
                <p className='text-sm font-normal leading-5' key={idxDes}>
                  {idxTitle === idxDes && description}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className='flex w-full cursor-pointer items-center justify-center gap-3'>
        <ChevronLeft onClick={handleTransform} />
        <p className='my-1 text-center text-2xl font-medium leading-8'>{`${defaultIndex + 1}/${data.length}`}</p>
        <ChevronRight onClick={handleTransform} />
      </div>
      <UseLinkRedirect sectionCode={'ConnectUs'}>
        <BtnCommon title='Khám phá dịch vụ của chúng tôi' cls='w-full text-center text-orange-500 p-4 rounded-sm' />
      </UseLinkRedirect>
    </div>
  );
};

export default ESCoreValueResponsive;
