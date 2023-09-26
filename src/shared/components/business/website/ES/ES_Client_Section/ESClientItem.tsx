import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: IComponents[];
};
const ESClientItem = ({ title, data }: Props) => {
  return (
    <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
      <div className='flex flex-col justify-center items-center gap-2 z-20 bg-white'>
        <h1 className='w-full flex flex-col text-2xl md:text-4xl font-medium text-orange-500'>{title}</h1>
      </div>
      <div className='w-full border-t border-orange-500 transform -translate-y-4 z-10'></div>
      <div className='w-full mt-10 grid grid-cols-6 gap-5'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`${data && data?.length - 1 !== idx && 'border-clientStories-designTwo-section mx-auto pr-4'}`}
          >
            <PreImage
              src={item.image as string}
              height={100}
              width={200}
              layer={false}
              alt={item.title}
              className={`rounded-lg cursor-pointer object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ESClientItem;
