import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

export interface Props {
  data: IComponents;
}
const HOTestimonialContent = ({ data }: Props) => {
  return (
    <div className='max-w-[400px] rounded-lg p-6 dark:bg-[#1B1D35] xl:p-10' style={{ border: '1px solid #555' }}>
      <div className='flex flex-col items-start justify-start gap-5'>
        <h1>{data.content}</h1>
        <div className='flex w-full items-center justify-start gap-3'>
          <div className='relative h-[50px] w-[50px] overflow-hidden rounded-full'>
            <PreImage src={data.image as string} width={50} height={50} alt={'event'} />
          </div>
          <div className='flex flex-col items-start justify-start text-sm opacity-80'>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOTestimonialContent;
