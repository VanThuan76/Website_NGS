import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
import NewsItem from './NewsItem';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponentNews } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { useTheme } from 'next-themes';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';

type Props = {
  title: string
  data: Partial<IBaseSectionComponentNews>;
  className?: string;
};
const NewsSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={false}
        className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !text-left !gap-3'
      />
      <div className='max-w-[1440px] w-full mx-auto my-auto mt-10  grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-6'>
        <div className='dark:bg-[#1B1D35] flex flex-col justify-start items-start pb-5 rounded-lg shadow-lg'>
          <PreImage
            src={data.components[0].image}
            height={275}
            width={1980}
            layer={false}
            alt={'News'}
            className='w-full h-full relative rounded-t-lg object-cover'
          />
          <div className='mt-10 px-5 w-full flex flex-col justify-between items-start gap-3'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-orange-500'>{data.components[0].categoryName}</p>
              <p className='text-sm text-slate-500'>{data.components[0].createdDate}</p>
            </div>
            <h2 className='text-2xl'>{data.components[0].title}</h2>
            <p className='text-sm text-slatse-500'>{data.components[0].description}</p>
            <p className='w-full text-end text-sm text-slate-400'>{data.components[0].author}</p>
          <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
            <BtnCommon title='Tìm hiểu thêm' cls='w-[190px] md:w-[170px] border border-orange-500' colorSvg={colorIcon} />
          </UseLinkRouter>
          </div>
        </div>
        <div className='w-full h-full grid grid-cols-1 gap-5'>
          {data.components.slice(1, 3).map((item, idx) => (
            <NewsItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
