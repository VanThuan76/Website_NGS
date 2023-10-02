import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { PreImage } from '@/components/common/customization/PreImage';
import { fakeMenu } from 'src/shared/mock/menu';
import { useRouter } from 'next/router';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/ui/sheet';
import ThemeModeToggle from '@/components/common/ToggleThemeMode';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import NavigationMenuMain from './NavigationMenuMain';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import NavigationMenuMainResponsive from './NavigationMenuMainResponsive';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 10 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.section
      initial={{ height: '85px' }}
      animate={{ height: isScrolled ? '80px' : '85px' }}
      transition={{ duration: 0.3 }}
      className={`w-full top-0 z-50 flex justify-between items-center gap-5 transition ${
        isScrolled
          ? 'sticky light:text-black border-b-[1px] border-opacity-50 border-black-300 duration-500 ease-in-out bg-[#fff] dark:bg-[#141523]'
          : 'sticky dark:bg-[#141523] bg-opacity-100 duration-500 ease-in-out'
      }`}
    >
      <div className='w-full flex justify-around items-center'>
        <div
          className='absolute w-[250px] h-[150px] -left-16 md:left-5 flex justify-center items-center gap-2 z-20 cursor-pointer'
          onClick={() => router.push('/')}
        >
          <PreImage src='/logo.png' alt='Logo' layer={false} />
        </div>
        <div className='relative hidden lg:block z-10 text-[#1C1C1C]'>
          <NavigationMenuMain
            className={`w-full top-0 z-50 gap-5 transition ${
              isScrolled
                ? 'sticky light:text-black border-opacity-50 border-black-300 duration-500 ease-in-out bg-[#fff] dark:bg-[#141523]'
                : 'sticky dark:bg-[#141523] bg-opacity-100 duration-500 ease-in-out'
            }`}
            fakeMenu={fakeMenu}
          />
        </div>
      </div>
      <div className='absolute right-0 md:right-5 flex justify-center items-center gap-2 z-20'>
        <div className='flex gap-8 items-center'>
          {/* <div className='hidden lg:flex gap-8 items-center'>
            <ThemeModeToggle />
            <LanguageSwitch />
          </div> */}
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Menu color='#FC5E03' className='cursor-pointer' />
              </SheetTrigger>
              <SheetContent className='w-full h-full overflow-y-scroll' side={'top'}>
               <NavigationMenuMainResponsive fakeMenu={fakeMenu} />
              </SheetContent>
            </Sheet>
          </div>
          <UseLinkRedirect sectionCode='ConnectUs'>
            <button className='dark:text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block'>
              Liên hệ
            </button>
          </UseLinkRedirect>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
