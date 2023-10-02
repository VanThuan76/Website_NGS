import React from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import OrganizationalSystemResponsive from './OrganizationalSystemResponsive';
type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HOOrganizationalSystemSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data && data.section && data.section.code}
      className={`relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <div className='w-full h-full flex flex-col justify-center items-center mt-20'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='text-sm md:text-2xl !text-[#FC5E03]'>{data.section.name}</h2>
          <div className='hidden md:grid mt-6 w-full grid-cols-5 justify-between items-center gap-24'>
            {data.components.map((item, idx) => (
              <div className='col-span-1 h-[55px]' key={idx}>
                <PreImage
                  key={idx}
                  src={item.image}
                  layer={false}
                  alt={item.title}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          <OrganizationalSystemResponsive data={data.components} />
        </div>
      </div>
    </section>
  );
};

export default HOOrganizationalSystemSection;
