import { useTheme } from 'next-themes';
import BtnCommon from '@/components/common/customization/BtnCommon';
interface Props {
  content: string;
  className: string;
}

const TeamDesignOneItem = ({ content, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  return (
    <div
      className={`flex flex-col justify-start items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
    >
      <div className='w-full h-[80%] lg:h-full flex flex-col justify-between items-start gap-5'>
        <p className='text-sm md:text-base'>{content}</p>
        <BtnCommon cls='border-orange-500 bg-white px-2' title='Go Carrer' colorSvg={colorIcon} />
      </div>
    </div>
  );
};

export default TeamDesignOneItem;