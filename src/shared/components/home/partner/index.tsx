import { PreImage } from '@/components/common/PreImage';
import { IPartnerData, partnerData } from '@/mocks/partner';
import { useState } from 'react';

const Partner = () => {
  const [selectedPartner, setSelectedPartner] = useState<IPartnerData>(partnerData[0]);
  return (
    <section className='bg-[#7d4aeb]'>
      <div className='flex flex-col justify-center items px-32'>
        <h1 className='mt-5 pt-10 text-3xl'>Đối tác đồng hành cùng NGSD</h1>
        <div className='relative w-full mt-5 pb-20 flex items-start justify-between gap-5' style={{ borderBottom: '1px solid #555' }}>
          {partnerData.map((item, idx) => (
            <div key={idx}>
              <PreImage
                src={item.logo}
                height={200}
                width={200}
                layer={false}
                alt={'Service'}
                className='relative rounded-lg'
                onClick={() => setSelectedPartner(item)}
              />
              {item === selectedPartner ? (
                <div className='absolute bottom-0 left-0 w-full flex justify-between items-center gap-5'>
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <p className='font-medium text-2xl'>{item.name}</p>
                    <p className="font-thin text-sm">{item.rank}</p>
                  </div>
                  <p className='w-1/2'>{item.des}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
