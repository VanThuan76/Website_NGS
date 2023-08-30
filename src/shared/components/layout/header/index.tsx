import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronUp, Menu } from 'lucide-react';

import { fakeMenu } from 'src/shared/mock/menu';
import { PreImage } from '@/components/common/customization/PreImage';
import ThemeModeToggle from '@/components/common/ToggleThemeMode';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/ui/sheet';

import { HambugerMenu } from './HambugerMenu';
import { Button } from '@/components/common/ui/button';
import NavigationMenuMain from './NavigationMenu';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      initial={{ height: '100px' }}
      animate={{ height: isScrolled ? '80px' : '100px' }}
      transition={{ duration: 0.3 }}
      className={`w-full top-0 z-50 flex justify-between items-center gap-5 px-5 md:px-10 transition ${
        isScrolled
          ? 'sticky light:text-black border-b-[1px] border-opacity-50 border-black-300 duration-500 ease-in-out bg-[#fff] dark:bg-[#141523]'
          : 'sticky dark:bg-[#141523] bg-opacity-100 duration-500 ease-in-out'
      }`}
    >
      <div className='flex justify-around items-center'>
        <PreImage height={100} width={100} src={'/logo.svg'} alt={'Logo'} layer={false} />
        <NavigationMenuMain fakeMenu={fakeMenu} />
      </div>
      <div className='absolute right-5 flex justify-center items-center gap-2'>
        <div
          id='dropdown'
          className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Settings
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Earnings
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-8 items-center'>
          <div className='lg:hidden xl:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent className='w-[200px]' side={'left'}>
                <div>
                  {fakeMenu.map((item, idx) => (
                    <Link href={'#'} key={idx}>
                      <li>{item}</li>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <ThemeModeToggle />
          <LanguageSwitch />
          <button className='dark:text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block'>
            Liên hệ
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
