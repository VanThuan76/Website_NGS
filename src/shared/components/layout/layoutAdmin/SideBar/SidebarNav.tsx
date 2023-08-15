import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/tailwind/functions';
import { MenuItem } from '@/utils/constants/menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/common/ui/collapsible';
import { ArrowDown, ArrowDown01, ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/useRedux';
import { useDispatch } from 'react-redux';
import { toggleMenu } from 'src/shared/stores/appSlice';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/common/ui/tooltip';

type Props = {
  menus: MenuItem[];
};

const SidebarNav = ({ menus }: Props) => {
  const path = usePathname();
  const isCollapseMenu = useAppSelector(state => state.appSlice.isCollapseMenu)
  const dispatch = useDispatch()
  if (!menus?.length) {
    return null;
  }
  return (
    <nav className={classNames('grid items-start gap-2 relative transition-[width]')}>
      {menus.map((item, index) => {
        return item.chidren ? (
          <Collapsible key={item.href}>
            <CollapsibleTrigger className='group flex w-full justify-between items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'>
              <TooltipProvider delayDuration={200}>
                <Tooltip >
                  <TooltipTrigger className='w-full' asChild >
                    <div className='w-full flex items-center gap-2'>
                      <div className='flex '>
                        {item.Icon}
                        <span className={classNames('', { 'hidden': isCollapseMenu })}>
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown className={classNames('text-foreground/50 w-3.5 h-3.5 transition-all group-data-[state=open]:rotate-90', { 'hidden': isCollapseMenu })} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side='right' hidden={isCollapseMenu} className='flex flex-col'>
                    {
                      item.chidren.map(chil =>
                        <span key={chil.href}
                          className={cn(
                            'peer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                            path === chil.href ? 'bg-primary text-primary-foreground' : 'transparent',
                            item.isDisable && 'cursor-not-allowed opacity-40'
                          )}
                        >
                          {chil.Icon}
                          <span>{chil.title}</span>
                        </span>
                      )
                    }
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-4 transition-all' hidden={isCollapseMenu}>
              {item.chidren.map(chil => <Link key={chil.href} href={item.isDisable ? '' : chil.href}>
                <span
                  className={cn(
                    'peer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                    path === chil.href ? 'bg-primary text-primary-foreground' : 'transparent',
                    item.isDisable && 'cursor-not-allowed opacity-40'
                  )}
                >
                  {chil.Icon}
                  <span className={classNames('', { 'hidden': isCollapseMenu })}>{chil.title}</span>
                </span>
              </Link>)}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link key={index} href={item.isDisable ? '' : item.href} >
            <TooltipProvider delayDuration={200}>
              <Tooltip >
                <TooltipTrigger className='w-full'>
                  <span
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-primary text-primary-foreground' : 'transparent',
                      item.isDisable && 'cursor-not-allowed opacity-40 '
                    )}
                  >
                    {item.Icon} <span className={classNames('', { 'hidden': isCollapseMenu })}>{item.title}</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side='right' hidden={!isCollapseMenu}>
                  <span>{item.title}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        );
      })}
      <div className='shadow p-2 cursor-pointer rounded-full bg-primary-foreground border absolute -bottom-14 hidden lg:block md:block xl:block' onClick={() => dispatch(toggleMenu(!isCollapseMenu))}>
        <ChevronLeft className={classNames('transition-all', { 'rotate-180': isCollapseMenu })}></ChevronLeft>
      </div>
    </nav>
  );
};

export default SidebarNav;
