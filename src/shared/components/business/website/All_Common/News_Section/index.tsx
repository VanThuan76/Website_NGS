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
  title: string;
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
      className={`mx-auto flex w-full flex-col items-center justify-around px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={false}
        className='col-span-7 w-full grid-cols-7 !gap-3 !text-left md:col-span-5 md:grid-cols-12'
      />
      <div className='mx-auto my-auto mt-10 grid w-full  max-w-[1440px] grid-cols-1 items-start justify-start gap-6 lg:grid-cols-2'>
        <div className='flex flex-col items-start justify-start rounded-lg pb-5 shadow-lg dark:bg-[#1B1D35]'>
          <PreImage
            src={data.components[0].image}
            height={275}
            width={1980}
            layer={false}
            alt={'News'}
            className='relative h-full w-full rounded-t-lg object-cover'
          />
          <div className='mt-10 flex w-full flex-col items-start justify-between gap-3 px-5'>
            <div className='flex w-full items-center justify-between'>
              <p className='text-orange-500'>{data.components[0].categoryName}</p>
              <p className='text-sm text-slate-500'>{data.components[0].createdDate}</p>
            </div>
            <h2 className='text-2xl'>{data.components[0].title}</h2>
            <p className='text-slatse-500 text-sm'>{data.components[0].description}</p>
            <p className='w-full text-end text-sm text-slate-400'>{data.components[0].author}</p>
            <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
              <BtnCommon
                title='Tìm hiểu thêm'
                cls='w-[190px] md:w-[170px] border border-orange-500'
                colorSvg={colorIcon}
              />
            </UseLinkRouter>
          </div>
        </div>
        <div className='grid h-full w-full grid-cols-1 gap-5'>
          {data.components.slice(1, 3).map((item, idx) => (
            <NewsItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
