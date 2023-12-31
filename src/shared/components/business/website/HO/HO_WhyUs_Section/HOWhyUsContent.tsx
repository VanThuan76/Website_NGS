import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
import useTrans from '@/hooks/useTrans';
interface Props {
  setSelectedIcon: any;
  data: Partial<IComponents>[];
  selectedIcon: Partial<IComponents>;
}
const HomeWhyUsContent = ({ setSelectedIcon, selectedIcon, data }: Props) => {
  const { theme } = useTheme();
  const { trans } = useTrans();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const contentAnimated = {
    active: {
      borderBottom: '4px solid #F06426',
      borderBottomLeftRadius: '3px',
      borderBottomRightRadius: '3px',
      color: theme === 'dark' ? '#fff' : '#000',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderBottom: '2px solid #A6A6A6',
      color: '#A6A6A6',
      opacity: 0.8,
    },
  };
  return (
    <div className='flex h-full w-full flex-col items-start justify-start gap-12 pb-3'>
      <motion.div className='mt-5 flex w-full justify-center text-sm lg:text-lg'>
        {data.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial='inactive'
              animate={selectedIcon === item ? 'active' : 'inactive'}
              variants={contentAnimated}
              onClick={() => setSelectedIcon(item)}
              className={`w-full cursor-pointer border-b-4 pb-4 ${
                idx === 0 ? 'rounded-l-sm' : idx === data.length - 1 ? 'rounded-r-sm' : ''
              }`}
            >
              <div className='flex flex-col items-center justify-center text-center hover:text-slate-800'>
                {splitTextToArrayByDoubleSlash(item.title || '').map((item: string, idx: number) => (
                  <p key={idx} className='text-base'>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className='flex flex-col items-center justify-center'>
        {splitTextToArrayByDoubleSlash(selectedIcon.description || '').map((item: string, idx: number) => (
          <p key={idx} className='text-sm text-slate-500 lg:text-base'>
            {item}
          </p>
        ))}
      </div>
      <UseLinkRouter url={URLS_SYSTEM.ES}>
        <BtnCommon title={trans.common.findOutMore} cls='w-[170px] border border-orange-500' colorSvg={colorIcon} />
      </UseLinkRouter>
    </div>
  );
};

export default HomeWhyUsContent;
