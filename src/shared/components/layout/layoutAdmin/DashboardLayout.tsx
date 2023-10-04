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
  const isCollapseMenu = useAppSelector(state => state.appSlice.isCollapseMenu);
  return (
    <>
      <header className='sticky top-0 z-40 w-full  border-b bg-background'>
        <div className='flex h-20 w-full flex-wrap items-center justify-between px-2 py-4 lg:px-8'>
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
            <Link href='/admin/pages' className='flex items-center space-x-2'>
              <PreImage src='/logo.png' height={150} width={200} alt='Logo' />
              <span className='text-2xl font-bold sm:inline-block'>{process.env.NEXT_PUBLIC_APP_NAME}</span>
            </Link>
            {MENULAYOUT === 'horizontal' && <Horizontalbar menus={APP_MENU} />}
          </div>
          <div className='flex items-center justify-center'>
            {/* <LanguageSwitcher /> */}
            <AccountSetting />
            <span className='ml-[20px]'>
              <ThemeModeToggle />
            </span>
          </div>
        </div>
      </header>
      {MENULAYOUT === 'vertical' && (
        <div className='mt-0 flex w-full shrink-0 gap-4'>
          <aside
            className={classNames(
              'sticky top-[65px]  hidden h-[calc(100vh_-_65px)] w-[200px] min-w-[200px] flex-col overflow-y-auto bg-primary-foreground/5 px-2 py-4 transition-[width] ease-linear md:block lg:block xl:block',
              {
                'w-[50px] min-w-[50px]': isCollapseMenu,
              },
            )}
          >
            <SidebarNav menus={APP_MENU} />
          </aside>
          <main className='flex flex-grow flex-wrap overflow-hidden border-l p-2 md:p-4 lg:p-6 xl:p-8'>{children}</main>
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
