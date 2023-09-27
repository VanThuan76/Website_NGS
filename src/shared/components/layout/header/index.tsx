import Link from 'next/link';
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
        <div className='absolute left-5 flex justify-center items-center gap-2 z-20'>
          <PreImage
            height={100}
            width={100}
            src='/logo.svg'
            alt='Logo'
            layer={false}
            onClick={() => router.push('/')}
            className='cursor-pointer'
          />
        </div>
        <div className='relative hidden lg:block z-10 text-[#1C1C1C]'>
          <NavigationMenuMain fakeMenu={fakeMenu} />
        </div>
      </div>
      <div className='absolute right-5 flex justify-center items-center gap-2 z-20'>
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
          <div className='hidden lg:flex gap-8 items-center'>
            <ThemeModeToggle />
            <LanguageSwitch />
          </div>
          <div className='lg:hidden xl:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent className='w-[70%] cursor-pointer' side={'right'}>
                <div>
                  {fakeMenu.map((mainMenu, idx) => (
                    <Link href={'#'} key={idx}>
                      <li>{mainMenu.title}</li>
                    </Link>
                  ))}
                </div>
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
