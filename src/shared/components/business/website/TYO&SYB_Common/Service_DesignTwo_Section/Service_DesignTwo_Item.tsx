import { IComponents } from 'src/shared/schemas/typedef/IComponents';

interface Props {
  data: Partial<IComponents>;
}
const ServiceDesignTwoItem = ({ data }: Props) => {
  return (
    <div className='absolute bottom-0 right-0 w-full p-5 flex flex-col justify-between items-start gap-3 rounded-b-lg text-white'>
      <div className='flex flex-col justify-start items-start'>
        <h2 className='text-base md:text-xl lg:text-2xl'>{data.title}</h2>
        <p className='text-sm md:text-base'>{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceDesignTwoItem;
