import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import IconLocation from '@/components/icon/HO/event/IconLocation';
import IconSchedule from '@/components/icon/HO/event/IconSchedule';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import FormDesignOneItem from './Form_DesignOne_Item';
import IconMail from '@/components/icon/IconMail';
import { useTheme } from 'next-themes';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const FormDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorIcon = theme !== 'dark' ? '#FC5E03' : '#fff';
  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='relative w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10'>
        <div className='w-full h-full flex flex-col justify-between items-start z-30'>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
            <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <IconSchedule color={colorIcon} />
              <p>20 thg 7 2023 - 20 thg 7 2023</p>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <IconMail color={colorIcon}/>
              <p>help@ngs.com</p>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <IconLocation color={colorIcon}/>
              <p>6th Element Tower, Tây Hồ, Hà Nội</p>
            </div>
          </div>
        </div>
        <FormDesignOneItem />
        {/* <BorderStyleOneLight className='absolute top-0 z-10' /> */}
      </div>
    </section>
  );
};

export default FormDesignOneSection;
