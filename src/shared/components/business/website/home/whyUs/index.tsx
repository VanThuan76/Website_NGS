import { useState } from 'react';
import IconNGS from './IconNGS';
import { motion } from 'framer-motion';
import { IWhyUsData, WhyUsData } from '@/mocks/website/whyUs';
import Background from '@/components/icon/whyUs/background/Background';
import ContentWhyUs from './ContentWhyUs';
import { partnerData } from '@/mocks/website/partner';
import { PreImage } from '@/components/common/PreImage';
import TitleSection from '@/components/common/TitleSection';

const WhyUs = () => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0]);
  return (
    <>
      <section id="WhyUs" className='pb-24'>
        <div className='w-full min-h-[800px]'>
          <div className='relative w-full h-full'>
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Background />
            </motion.div>
            <div className='absolute top-0 left-0 w-full px-32'>
              <div className='w-full flex justify-between items-center'>
                <div className='w-full flex flex-col justify-between items-center gap-3'>
                  <TitleSection
                    title='Điều gì tạo nên NGS'
                    description='Tại sao nên chọn đồng hành cùng chúng tôi!'
                    findMore={false}
                    className="w-[80%]"
                  />
                  <div className='w-full mt-5'>
                    <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                  </div>
                </div>
                <div className='w-full z-40 float-right'>
                  <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mt-20'>
                <h2 className='text-2xl'>Công ty thành viên</h2>
                <div className='w-full flex items-start justify-between gap-5'>
                  {partnerData.map((item, idx) => (
                    <PreImage
                      key={idx}
                      src={item.logo}
                      height={200}
                      width={200}
                      layer={false}
                      alt={'Service'}
                      className='relative rounded-lg'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;