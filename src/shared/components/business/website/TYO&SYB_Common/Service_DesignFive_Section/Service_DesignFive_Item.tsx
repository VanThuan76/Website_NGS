import { IComponents } from 'src/shared/schemas/typedef/IComponents';
interface Props {
  item: IComponents;
  idx: number;
}

const ServiceDesignFiveItem = ({ item, idx }: Props) => {
  return (
    <div
      className=' flex min-h-[10px] w-full cursor-pointer flex-col gap-5 py-3 pl-5  lg:min-h-[100px]'
      style={{ borderLeft: '1px solid #FC5E03' }}
    >
      <div className='relative flex h-full w-full flex-col items-start justify-start gap-4 pl-5 md:gap-8'>
        <p className='mt-5 text-xs md:text-base'>{item.content}</p>
        <div className='absolute left-0 top-5 z-20 flex h-[50px] w-[50px] -translate-x-12 transform items-center justify-center rounded-full border-2 border-orange-500 bg-white'>
          {idx + 1}
        </div>
      </div>
    </div>
  );
};

export default ServiceDesignFiveItem;
