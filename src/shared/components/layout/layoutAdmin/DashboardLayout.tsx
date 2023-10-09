import type { Metadata } from 'next';
import { Menu } from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/ui/sheet';
import { Horizontalbar } from './HorizontalBar/HorizontalBar';
import { MENULAYOUT } from '@/utils/constants/settings';
import { PreImage } from '@/components/common/customization/PreImage';
import { useAppSelector } from '@/hooks/useRedux';
import { useGetInfoByToken } from 'src/shared/schemas/models/IUser';
import { useRouter } from 'next/router';
import ThemeModeToggle from '@/components/common/ToggleThemeMode';
import SidebarNav from './SideBar/SidebarNav';
import AccountSetting from '@/components/business/admin/AccountSetting';
import classNames from 'classnames';
import useTrans from '@/hooks/useTrans';
import {
  Newspaper,
  LayoutGrid,
  Home,
  FileBox,
  Calendar,
  MessageSquare,
  Briefcase,
  Tv2,
  MonitorSmartphone,
} from 'lucide-react';
import React from 'react';

export type MenuItem = {
  title: string;
  permission?: boolean;
  external?: boolean;
  href: string;
  Icon?: React.ReactNode;
  chidren?: MenuItem[];
  isDisable?: boolean;
};

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const isCollapseMenu = useAppSelector(state => state.appSlice.isCollapseMenu);
  const router = useRouter();
  const { trans } = useTrans();
  const adminMenu = [
    {
      title: trans.admin.common.homepage,
      href: '/admin',
      Icon: <Home className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.pages,
      href: '/admin/pages-manage',
      Icon: <FileBox className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.newsManage,
      href: '/admin/news-manage',
      Icon: <Newspaper className='mr-2 h-5 w-5' />,
      chidren: [
        {
          title: trans.admin.common.article,
          href: '/admin/news-manage/article',
        },
        {
          title: trans.admin.common.category,
          href: '/admin/news-manage/category',
        },
      ],
    },
    {
      title: trans.admin.common.event,
      href: '/admin/event',
      Icon: <Calendar className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.testimonial,
      href: '/admin/testimonial',
      Icon: <MessageSquare className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.talentHub,
      href: '/admin/talent-hub',
      Icon: <Briefcase className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.media,
      href: '/admin/media',
      Icon: <Tv2 className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.contactCustomer,
      href: '/admin/contact-customer',
      Icon: <MonitorSmartphone className='mr-2 h-5 w-5' />,
    },
    {
      title: trans.admin.common.systemManage,
      href: '/admin/system-manage',
      Icon: <LayoutGrid className='mr-2 h-5 w-5' />,
      chidren: [
        {
          title: trans.admin.common.company,
          href: '/admin/system-manage/company',
        },
        {
          title: trans.admin.common.history,
          href: '/admin/system-manage/history',
        },
        {
          title: trans.admin.common.comment,
          href: '/admin/system-manage/comment',
        },
      ],
    },
    {
      title: trans.admin.common.userManage,
      href: '/admin/user-manage',
      Icon: <LayoutGrid className='mr-2 h-5 w-5' />,
      chidren: [
        {
          title: trans.admin.common.user,
          href: '/admin/user-manage/users',
        },
        {
          title: trans.admin.common.role,
          href: '/admin/user-manage/roles',
        },
      ],
    },
  ];
  useGetInfoByToken();
  return (
    <React.Fragment>
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
                  <SidebarNav menus={adminMenu} />
                </SheetContent>
              </Sheet>
            </div>
            <div
              className='absolute left-0 z-20 flex h-[150px] w-[250px] cursor-pointer items-center justify-center gap-2'
              onClick={() => router.push('/')}
            >
              <PreImage src='/logo.png' alt='Logo' layer={false} />
            </div>
            {MENULAYOUT === 'horizontal' && <Horizontalbar menus={adminMenu} />}
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
            <SidebarNav menus={adminMenu} />
          </aside>
          <main className='flex flex-grow flex-wrap overflow-hidden border-l p-2 md:p-4 lg:p-6 xl:p-8'>{children}</main>
        </div>
      )}
      {MENULAYOUT === 'horizontal' && (
        <div className='p-10'>
          <main className='w-full overflow-hidden p-2 lg:p-12'>{children}</main>
        </div>
      )}
    </React.Fragment>
  );
};

export default DashBoardLayout;
