import { PreImage } from '@/components/common/customization/PreImage';

interface Props {
  title: string;
  description: string,
  image: string
  className: string;
}
const HOSecurityCard = ({ title,description, image, className }: Props) => {
  return (
    <div
      className={`border-card-security-home relative max-w-[310px] h-full p-3 flex flex-col justify-start items-center dark:bg-[#222442] rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <PreImage
        src={image as string}
        width={72}
        height={72}
        alt={title}
      />
      <p className='text-center font-semibold'>{title}</p>
      <p className='mt-2'>{description}</p>
    </div>
  );
};

export default HOSecurityCard;
