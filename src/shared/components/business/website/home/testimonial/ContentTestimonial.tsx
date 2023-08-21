import { ITestimonial } from '@/mocks/website/testimonial';
import { PreImage } from '@/components/common/PreImage';

export interface Props {
  data: ITestimonial;
}
const ContentTestimonial = ({ data }: Props) => {
  return (
    <div className='dark:bg-[#1B1D35] w-full p-6 xl:p-10 rounded-lg' style={{ border: '1px solid #555' }}>
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1>{data.description}</h1>
        <div className='w-full flex justify-start items-center gap-3'>
          <PreImage src={data.image} width={50} height={50} alt={'event'} className='w-full rounded-full' />
          <div className='flex flex-col justify-start items-start opacity-80 text-sm'>
            <p>{data.name}</p>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTestimonial;
