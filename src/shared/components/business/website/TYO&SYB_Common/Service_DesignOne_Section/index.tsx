import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import useTrans from '@/hooks/useTrans';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignOneItem from './Service_DesignOne_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};

const ServiceDesignOneSection = ({ title, data, className, sectionCodeLink }: Props) => {
  const { trans, lang } = useTrans();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const checkSolution = data.components.find(item => item.slug === 'solution');
  const checkServiceAndSupport = data.components.find(item => item.slug === 'service-and-support');
  const checkReport = data.components.find(item => item.slug === 'report');
  return (
    <section id={data.section.code} className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 ${className}  `}>
      <div
        className={`mx-auto my-auto mt-10 grid w-full grid-cols-1 ${
          !checkSolution || !checkServiceAndSupport ? 'md:grid-cols-3' : 'md:grid-cols-4'
        } items-start justify-start gap-10`}
      >
        <div className='col-span-1 flex h-full w-full flex-col items-start justify-start md:col-span-2'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-3 !text-left'
          />
          <div className='flex flex-col items-start justify-start gap-3'>
            <p>{lang === 'vi' ? 'Bạn muốn kết nối với chúng tôi?' : 'Want to connect with us?'}</p>

            <UseLinkRedirect sectionCode={'FormCTA'}>
              <BtnCommon title='Kết nối với NGS' cls='border border-orange-500' />
            </UseLinkRedirect>
          </div>
        </div>
        <div className='col-span-1 grid grid-cols-1 gap-10 md:col-span-2 md:grid-cols-2'>
          {checkSolution && (
            <ServiceDesignOneItem
              titleItem={trans.common.solution}
              data={data.components.filter(item => item.slug === 'solution')}
            />
          )}
          {checkServiceAndSupport && (
            <ServiceDesignOneItem
              titleItem={`${trans.common.service}&${trans.common.support}`}
              data={data.components.filter(item => item.slug === 'service-and-support')}
            />
          )}
          {checkReport && (
            <ServiceDesignOneItem
              titleItem={trans.common.report}
              data={data.components.filter(item => item.slug === 'report')}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDesignOneSection;
