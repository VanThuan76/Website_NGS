import { useTheme } from 'next-themes';
import BtnCommon from '@/components/common/customization/BtnCommon';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
interface Props {
  content: string;
  className: string;
}

const TeamDesignOneItem = ({ content, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  return (
    <div
      className={`w-full h-full flex flex-col justify-between items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
    >
        <p className='text-sm md:text-base'>{content.length > 300 ? `${content.substring(0, 250)}...` : content}</p>
        <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon cls='border-orange-500 bg-white px-2' title='Go Carrer' colorSvg={colorIcon} />
        </UseLinkRouter>
    </div>
  );
};

export default TeamDesignOneItem;
