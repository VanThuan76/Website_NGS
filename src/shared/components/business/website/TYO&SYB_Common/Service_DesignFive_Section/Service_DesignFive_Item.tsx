import { IComponents } from 'src/shared/schemas/typedef/IComponents';
interface Props {
  item: IComponents;
  idx: number;
}

const ServiceDesignFiveItem = ({ item, idx }: Props) => {
  return (
    <div
      className=' w-full py-3 pl-5 flex flex-col gap-5 min-h-[10px] lg:min-h-[100px]  cursor-pointer'
      style={{ borderLeft: '1px solid #FC5E03' }}
    >
      <div className='relative w-full h-full flex flex-col justify-center items-centergap-4 pl-5 md:gap-8'>
        <p className='mt-5 text-xs md:text-base text-center'>{item.content}</p>
        <div className='absolute left-0 top-5 transform -translate-x-12 flex justify-center items-center w-[50px] h-[50px] rounded-full border-2 border-orange-500 bg-white z-20'>
          {idx + 1}
        </div>
      </div>
    </div>
  );
};

export default ServiceDesignFiveItem;
