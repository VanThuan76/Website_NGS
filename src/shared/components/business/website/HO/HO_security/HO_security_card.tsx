import { PreImage } from '@/components/common/customization/PreImage';
import BorderCard from '@/components/icon/HO/security/BorderCard';
import { ISecurityData } from '@/mocks/website/HO/security';

interface Props {
  item:Partial<ISecurityData>
  className: string;
}
const HomeSecurityCard = ({ item,className }: Props) => {
  return (
    <div
      className={`relative max-w-[310px] h-full px-12 md:px-16 xl:px-20 py-10 flex flex-col justify-center items-center dark:bg-[#222442] rounded-lg shadow-md  overflow-hidden ${className}`}
    >
      <PreImage
        src={item && item.image as string}
        width={80}
        height={80}
        alt='security'
      />
      <p className='text-center'>{item && item.title}</p>
      <div className='absolute top-0 left-0 w-full h-full'>
        <BorderCard />
      </div>
    </div>
  );
};

export default HomeSecurityCard;
