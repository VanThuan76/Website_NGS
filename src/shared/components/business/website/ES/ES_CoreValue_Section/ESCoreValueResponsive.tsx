import BtnCommon from '@/components/common/customization/BtnCommon';
import ImageResponsiveCoreValue from '@/components/icon/ES/ImageResponsiveCoreValue';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  data: IComponents[];
};

const ESCoreValueResponsive = ({ data }: Props) => {
  const [defaultIndex, setDefaultIndex] = useState(0);

  const handleDragEnd = () => {
    setDefaultIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex >= 3 ? 0 : newIndex;
    });
  };

  return (
    <div className='w-full md:hidden grid grid-cols-1 justify-center items-center gap-5'>
      <ImageResponsiveCoreValue className='w-full' />
      {data.map((item, idx) => (
        <div
          className={`${idx === defaultIndex ? 'flex' : 'hidden'} flex-col gap-[20px] justify-start items-start`}
          key={idx}
          draggable='true'
          onDragEnd={handleDragEnd}
        >
          {item.title.split('//').map((title, idxTitle) => (
            <div key={idxTitle} className="flex flex-col gap-1">
              <div className='w-[135px] flex justify-center items-center border border-bg-[#FC5E03] py-2 px-4 rounded-full'>
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
      <p className='my-1 font-medium leading-8 text-2xl text-center'>{`${defaultIndex + 1}/${data.length}`}</p>
      <UseLinkRedirect sectionCode={'ConnectUs'}>
        <BtnCommon title='Khám phá dịch vụ của chúng tôi' cls='text-orange-500 p-4 rounded-sm' hover={false} />
      </UseLinkRedirect>
    </div>
  );
};

export default ESCoreValueResponsive;
