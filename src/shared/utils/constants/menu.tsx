import { Newspaper, LayoutGrid } from 'lucide-react';

export type MenuItem = {
  title: string;
  permission?: boolean;
  external?: boolean;
  href: string;
  Icon?: React.ReactNode;
  chidren?: MenuItem[];
  isDisable?: boolean;
};

export const APP_MENU: MenuItem[] = [
  {
    title: 'Pages',
    href: '/admin/pages',
    Icon: <LayoutGrid className='mr-2 h-5 w-5' />,
  },
  {
    title: 'News Manage',
    href: '/admin/news-manage',
    Icon: <LayoutGrid className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'News',
        href: '/admin/news-manage/news',
      }, 
      {
        title: 'Category',
        href: '/admin/news-manage/category',
      },
    ],
  },
  {
    title: 'Event',
    href: '/admin/event',
    Icon: <Newspaper className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Media',
    href: '/admin/media',
    Icon: <Newspaper className='mr-2 h-5 w-5' />,
  },
  {
    title: 'System Manage',
    href: '/admin/system-manage',
    Icon: <LayoutGrid className='mr-2 h-5 w-5' />,
    chidren: [
      {
        title: 'User',
        href: '/admin/system-manage/users',
      }, 
      {
        title: 'Role',
        href: '/admin/system-manage/roles',
      },
    ],
  },
];
