import { ITestimonial } from '@/mocks/website/testimonial';
import { PreImage } from '@/components/common/PreImage';

export interface Props extends ITestimonial {}
const ContentTestimonial = ({ data }: any) => {
  return (
    <div className='bg-[#1B1D35] w-full text-white p-10 rounded-lg'>
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1>{data.description}</h1>
        <div className='w-full flex justify-start items-start gap-5'>
          <PreImage src={data.image} width={50} height={50} alt={'event'} className='rounded-full' />
          <div className='flex flex-col justify-start items-start opacity-80'>
            <p>{data.name}</p>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTestimonial;
