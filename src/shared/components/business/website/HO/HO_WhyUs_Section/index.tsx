import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import TitleSection from '@/components/common/customization/TitleSection';
import HomeWhyUsIcon from './HOWhyUsIcon';
import HomeWhyUsContent from './HOWhyUsContent';
import HomeWhyUsResponsive from './HOWhyUsResponsive';

type Props = {
  title: string
  data: Partial<IBaseSectionComponent>;
  className?: string
}
const HomeWhyUsSection = ({title, data, className}: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<Partial<IComponents>|undefined >(()=> {
    if(data.components && data.components.length > 0 ) return data.components[0]
    else return undefined
  });
  if(!selectedIcon) return <React.Fragment></React.Fragment>
  return (
      <section
        id={data && data.section && data.section.code}
        className={`relative md: lg: xl: px-4 md:px-24 ${className}`}
      >
        <div className='max-w-[1440px] w-full mx-auto my-auto'>
          <div className='w-full grid grid-cols-2'>
            <div className='w-full flex flex-col justify-between items-center gap-3'>
              <TitleSection
                title={title}
                name={data.section!.name as string}
                description={data.section!.description as string}
                findMore={false}
                className='w-full'
              />
              {/* <-- Content Responsive Mobile */}
              <div className='flex md:hidden w-full lg:w-1/2 xl:w-1/2 flex-col justify-center items-center'>
                {data.components!.map((item, idx) => {
                  return <HomeWhyUsResponsive key={idx} item={item} />;
                })}
              </div>
              {/* Content Responsive Mobile --> */}
              {/* <-- HomeWhyUsIcon Responsive Tablet */}
              <div className='hidden md:block lg:hidden w-full z-40 float-right'>
                <HomeWhyUsIcon data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                <HomeWhyUsContent data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
              {/* HomeWhyUsIcon Responsive Tablet --> */}

              {/* <-- HomeWhyUsIcon Responsive Desktop */}
              <div className='hidden lg:block w-full mt-5'>
                <HomeWhyUsContent data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
              {/* HomeWhyUsIcon Responsive Desktop --> */}
            </div>
            <div className='hidden lg:block w-full z-40 float-right'>
              <HomeWhyUsIcon data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomeWhyUsSection;
