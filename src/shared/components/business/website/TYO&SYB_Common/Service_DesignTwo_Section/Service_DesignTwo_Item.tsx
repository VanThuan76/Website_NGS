import { IComponents } from 'src/shared/schemas/typedef/IComponents';

interface Props {
  data: Partial<IComponents>;
}
const ServiceDesignTwoItem = ({ data }: Props) => {
  return (
    <div className='absolute bottom-0 right-0 flex w-full flex-col items-start justify-between gap-3 rounded-b-lg p-5 text-white'>
      <div className='flex flex-col items-start justify-start'>
        <h2 className='text-base md:text-xl lg:text-2xl'>{data.title}</h2>
        <p className='text-sm md:text-base'>{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceDesignTwoItem;
