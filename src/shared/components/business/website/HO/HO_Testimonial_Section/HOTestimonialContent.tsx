import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

export interface Props {
  data: IComponents;
}
const HOTestimonialContent = ({ data }: Props) => {
  return (
    <div className='dark:bg-[#1B1D35] max-w-[400px] p-6 xl:p-10 rounded-lg' style={{ border: '1px solid #555' }}>
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1>{data.content}</h1>
        <div className='w-full flex justify-start items-center gap-3'>
          <div className='relative w-[50px] h-[50px] rounded-full overflow-hidden'>
            <PreImage src={data.image as string} width={50} height={50} alt={'event'} />
          </div>
          <div className='flex flex-col justify-start items-start opacity-80 text-sm'>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOTestimonialContent;
