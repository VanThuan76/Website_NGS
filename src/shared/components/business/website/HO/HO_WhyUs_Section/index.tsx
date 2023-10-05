import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import TitleSection from '@/components/common/customization/TitleSection';
import HomeWhyUsIcon from './HOWhyUsIcon';
import HomeWhyUsContent from './HOWhyUsContent';
import HomeWhyUsResponsive from './HOWhyUsResponsive';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeWhyUsSection = ({ title, data, className }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!selectedIcon) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data && data.section && data.section.code}
      className={`relative max-w-[1440px] px-4 pb-20 md:px-24 ${className}`}
    >
      <div className='mx-auto my-auto w-full'>
        <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='flex w-full flex-col items-center justify-between gap-3'>
            <TitleSection
              title={title}
              name={data.section!.name as string}
              description={data.section!.description as string}
              findMore={false}
              className='col-span-7 w-full grid-cols-7 !gap-8 !text-left'
            />
            {/* <-- Content Responsive Mobile */}
            <div className='flex w-full flex-col items-center justify-center md:hidden lg:w-1/2 xl:w-1/2'>
              {data.components!.map((item, idx) => {
                return <HomeWhyUsResponsive key={idx} item={item} />;
              })}
            </div>
            {/* Content Responsive Mobile --> */}
            {/* <-- HomeWhyUsIcon Responsive Tablet */}
            <div className='z-40 float-right hidden w-full md:block lg:hidden'>
              <HomeWhyUsIcon
                data={data.components!}
                selectedIcon={selectedIcon && selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
              <HomeWhyUsContent
                data={data.components!}
                selectedIcon={selectedIcon && selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            </div>
            {/* HomeWhyUsIcon Responsive Tablet --> */}

            {/* <-- HomeWhyUsIcon Responsive Desktop */}
            <div className='mt-5 hidden w-full lg:block'>
              <HomeWhyUsContent
                data={data.components!}
                selectedIcon={selectedIcon && selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            </div>
            {/* HomeWhyUsIcon Responsive Desktop --> */}
          </div>
          <div className='z-40 float-right hidden w-full lg:block'>
            <HomeWhyUsIcon
              data={data.components!}
              selectedIcon={selectedIcon && selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUsSection;
