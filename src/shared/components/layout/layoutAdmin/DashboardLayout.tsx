import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

import { Button } from '@/components/common/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/ui/sheet';
import ThemeModeToggle from '@/components/common/ToggleThemeMode';

// import LanguageSwitcher from '../business/LanguageSwitch';
import SidebarNav from './SideBar/SidebarNav';
import { Horizontalbar } from './HorizontalBar/HorizontalBar';
import { APP_MENU } from '@/utils/constants/menu';
import AccountSetting from '@/components/business/admin/AccountSetting';
import { MENULAYOUT } from '@/utils/constants/settings';
import { PreImage } from '@/components/common/customization/PreImage';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/useRedux';

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const isCollapseMenu = useAppSelector(state => state.appSlice.isCollapseMenu)
  return (
    <>
      <header className='w-full sticky top-0 z-40  border-b bg-background'>
        <div className='w-full flex-wrap flex h-20 items-center justify-between px-2 lg:px-8 py-4'>
          <div className='flex items-center  gap-2 lg:gap-4'>
            <div className='lg:hidden xl:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className='lg:hidden' variant={'outline'} size={'sm'}>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent className='w-[200px] px-1 py-8' side={'left'}>
                  <SidebarNav menus={APP_MENU} />
                </SheetContent>
              </Sheet>
            </div>
            <Link href='/admin/pages' className='items-center space-x-2 flex'>
              <PreImage src='/logo.svg' width={100} height={50} alt='Logo' />
              <span className='font-bold text-2xl sm:inline-block'>{process.env.NEXT_PUBLIC_APP_NAME}</span>
            </Link>
            {MENULAYOUT === 'horizontal' && <Horizontalbar menus={APP_MENU} />}
          </div>
          <div className='flex justify-center items-center'>
            {/* <LanguageSwitcher /> */}
            <AccountSetting />
            <span className='ml-[20px]'>
              <ThemeModeToggle />
            </span>
          </div>
        </div>
      </header>
      {MENULAYOUT === 'vertical' && (
        <div className='mt-0 flex gap-4 w-full shrink-0'>
          <aside
            className={classNames('min-w-[200px] w-[200px]  lg:block md:block xl:block hidden flex-col bg-primary-foreground/5 py-4 px-2 sticky top-[65px] h-[calc(100vh_-_65px)] overflow-y-auto transition-[width] ease-linear', {
              'min-w-[50px] w-[50px]': isCollapseMenu
            })}
          >
            <SidebarNav menus={APP_MENU} />
          </aside>
          <main className='flex flex-grow flex-wrap overflow-hidden p-2 md:p-4 lg:p-6 xl:p-8 border-l'>{children}</main>
        </div>
      )}
      {MENULAYOUT === 'horizontal' && (
        <div className='p-10'>
          <main className='w-full overflow-hidden p-2 lg:p-12'>{children}</main>
        </div>
      )}
    </>
  );
};

export default DashBoardLayout;
