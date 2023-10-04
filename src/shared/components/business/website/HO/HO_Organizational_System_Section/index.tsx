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
      className={`relative w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <div className='mt-20 flex h-full max-w-[1440px] flex-col items-center justify-center'>
        <div className='flex w-full flex-col items-center justify-center'>
          <h2 className='text-sm !text-[#FC5E03] md:text-2xl'>{data.section.name}</h2>
          <div className='mt-6 hidden w-full grid-cols-5 items-center justify-between gap-24 md:grid'>
            {data.components.map((item, idx) => (
              <div className='col-span-1 h-[55px]' key={idx}>
                <PreImage key={idx} src={item.image} layer={false} alt={item.title} objectFit='contain' />
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
