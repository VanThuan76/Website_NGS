import { PreImage } from '@/components/common/customization/PreImage';
import BorderCard from '@/components/icon/HO/security/BorderCard';

interface Props {
  title: string;
  image: string
  className: string;
}
const HOSecurityCard = ({ title, image, className }: Props) => {
  return (
    <div
      className={`relative max-w-[310px] h-full px-12 md:px-16 py-10 flex flex-col justify-center items-center dark:bg-[#222442] rounded-lg shadow-md  overflow-hidden ${className}`}
    >
      <PreImage
        src={image as string}
        width={72}
        height={72}
        alt={title}
      />
      <p className='text-center font-semibold'>{title}</p>
      <div className='absolute top-0 left-0 w-full h-full'>
        <BorderCard />
      </div>
    </div>
  );
};

export default HOSecurityCard;
