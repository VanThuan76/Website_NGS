import { PreImage } from '@/components/common/customization/PreImage';
import useBreakPoint from '@/hooks/useBreakPoint';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: IComponents[];
};
const ESClientItem = ({ title, data }: Props) => {
  const currentBreakPoint = useBreakPoint();
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-between'>
      <div className='z-20 flex flex-col items-center justify-center gap-2 bg-white'>
        <h1 className='flex w-full flex-col text-2xl font-medium text-orange-500 md:text-4xl'>{title}</h1>
      </div>
      <div className='z-10 w-full -translate-y-4 transform border-t border-orange-500'></div>
      <div className='mt-10 grid w-full grid-cols-2 items-center justify-between md:grid-cols-6 md:gap-5'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`relative ${currentBreakPoint === 'sm' ? 'h-[53px] w-full' : 'h-[75px] w-full'} cursor-pointer ${
              idx % 2 === 0 && 'border-card-client-es-right'
            } ${
              data &&
              data?.length - 1 !== idx &&
              data?.length - 2 !== idx &&
              idx &&
              currentBreakPoint === 'sm' &&
              'border-card-client-es-bottom'
            } p-1 md:border-none ${
              data && data?.length - 1 !== idx && currentBreakPoint !== 'sm' && 'border-card-client-es-right'
            }`}
          >
            <PreImage
              src={item.image as string}
              layer={false}
              alt={item.title}
              objectFit='contain'
              objectPosition='center'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ESClientItem;
