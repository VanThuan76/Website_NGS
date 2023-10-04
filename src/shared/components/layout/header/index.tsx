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
      className={`top-0 z-50 flex w-full items-center justify-between gap-5 transition ${
        isScrolled
          ? 'light:text-black border-black-300 sticky border-b-[1px] border-opacity-50 bg-[#fff] duration-500 ease-in-out dark:bg-[#141523]'
          : 'sticky bg-opacity-100 duration-500 ease-in-out dark:bg-[#141523]'
      }`}
    >
      <div className='flex w-full items-center justify-around'>
        <div
          className='absolute -left-16 z-20 flex h-[150px] w-[250px] cursor-pointer items-center justify-center gap-2 md:left-5'
          onClick={() => router.push('/')}
        >
          <PreImage src='/logo.png' alt='Logo' layer={false} />
        </div>
        <div className='relative z-10 hidden text-[#1C1C1C] lg:block'>
          <NavigationMenuMain
            className={`top-0 z-50 w-full gap-5 transition ${
              isScrolled
                ? 'light:text-black border-black-300 sticky border-opacity-50 bg-[#fff] duration-500 ease-in-out dark:bg-[#141523]'
                : 'sticky bg-opacity-100 duration-500 ease-in-out dark:bg-[#141523]'
            }`}
            fakeMenu={fakeMenu}
          />
        </div>
      </div>
      <div className='absolute right-0 z-20 flex items-center justify-center gap-2 md:right-5'>
        <div className='flex items-center gap-8'>
          {/* <div className='hidden lg:flex gap-8 items-center'>
            <ThemeModeToggle />
            <LanguageSwitch />
          </div> */}
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Menu color='#FC5E03' className='cursor-pointer' />
              </SheetTrigger>
              <SheetContent className='h-full w-full overflow-y-scroll' side={'top'}>
                <NavigationMenuMainResponsive fakeMenu={fakeMenu} />
              </SheetContent>
            </Sheet>
          </div>
          <UseLinkRedirect sectionCode='ConnectUs'>
            <button className='hidden cursor-pointer rounded px-4 py-2 font-bold dark:text-white lg:block'>
              Liên hệ
            </button>
          </UseLinkRedirect>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
