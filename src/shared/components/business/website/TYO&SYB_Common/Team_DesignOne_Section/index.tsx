import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import TeamDesignOneItem from './Team_DesignOne_Item';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const TeamDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState<IComponents>();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-3'
      />
      <div className='max-w-[1440px] mx-auto my-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-10 bg-transparent overflow-hidden gap-1'>
        {data &&
          data.components.map((item, idx) => (
            <div className='relative max-w-[310px] min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden' key={idx}>
              <motion.div
                className='absolute top-0 left-0 w-full h-full'
                initial={{ display: 'hidden' }}
                animate={{ display: hoveredItem === item ? 'block' : 'hidden' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? <BackgroundDark /> : <BackgroundLight />}
              </motion.div>
              {hoveredItem === item ? (
                <TeamDesignOneItem content={item.content || ''} className='absolute top-0 left-0 w-full h-full' />
              ) : (
                <>
                  <PreImage
                    src={item.image}
                    width={1980}
                    height={350}
                    alt={title}
                    className='w-full h-full rounded-lg object-cover'
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(undefined)}
                  />
                  <div className='absolute left-5 bottom-5 flex flex-col justify-start items-start text-white'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default TeamDesignOneSection;
