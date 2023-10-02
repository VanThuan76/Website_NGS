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
    <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
      <div className='flex flex-col justify-center items-center gap-2 z-20 bg-white'>
        <h1 className='w-full flex flex-col text-2xl md:text-4xl font-medium text-orange-500'>{title}</h1>
      </div>
      <div className='w-full border-t border-orange-500 transform -translate-y-4 z-10'></div>
      <div className='w-full mt-10 grid grid-cols-2 md:grid-cols-6 md:gap-5 justify-between items-center'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`relative ${
              currentBreakPoint === 'sm' ? 'w-full h-[53px]' : 'w-[200px] h-[100px]'
            } cursor-pointer mx-auto ${idx % 2 === 0 && 'border-r border-r-orange-500'} ${
              data && data?.length - 1 !== idx && data?.length - 2 !== idx && 'border-b border-b-orange-500'
            } p-1 md:border-none ${
              data && data?.length - 1 !== idx && currentBreakPoint !== 'sm' && 'border-clientStories-designTwo-section'
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
