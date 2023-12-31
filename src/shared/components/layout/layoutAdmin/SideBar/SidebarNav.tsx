import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/tailwind/functions';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/common/ui/collapsible';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useAppSelector } from '@/hooks/useRedux';
import { useDispatch } from 'react-redux';
import { toggleMenu } from 'src/shared/stores/appSlice';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/common/ui/tooltip';
import classNames from 'classnames';
import { useEffect } from 'react';
import { MenuItem } from '../DashboardLayout';

type Props = {
  menus: MenuItem[];
};

const SidebarNav = ({ menus }: Props) => {
  const path = usePathname();
  const isCollapseMenu = useAppSelector(state => state.appSlice.isCollapseMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu(!isCollapseMenu));
  }, []);
  if (!menus?.length) {
    return null;
  }
  return (
    <nav className={classNames('relative grid items-start gap-2 transition-[width]')}>
      {menus.map((item, index) => {
        return item.chidren ? (
          <Collapsible key={item.href}>
            <CollapsibleTrigger
              className={cn(
                'group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                path.split('/')[2] === item.href.split('/')[2] ? 'bg-accent text-accent-foreground' : 'transparent',
              )}
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger className='w-full' asChild>
                    <div className='flex w-full items-center gap-2'>
                      <div
                        className={cn(
                          'group flex items-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                        )}
                      >
                        {item.Icon}
                        <span className={classNames('', { hidden: isCollapseMenu })}>{item.title}</span>
                      </div>
                      <ChevronDown
                        className={classNames(
                          'h-3.5 w-3.5 text-foreground/50 transition-all group-data-[state=open]:rotate-90',
                          { hidden: isCollapseMenu },
                        )}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side='right' className={classNames('flex flex-col', { hidden: !isCollapseMenu })}>
                    {item.chidren.map(chil => (
                      <span
                        key={chil.href}
                        className={cn(
                          'peer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                          path === chil.href ? 'bg-primary text-primary-foreground' : 'transparent',
                          item.isDisable && 'cursor-not-allowed opacity-40',
                        )}
                      >
                        {chil.Icon}
                        <span>{chil.title}</span>
                      </span>
                    ))}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-4 transition-all' hidden={isCollapseMenu}>
              {item.chidren.map(chil => (
                <Link key={chil.href} href={item.isDisable ? '' : chil.href}>
                  <span
                    className={cn(
                      'peer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === chil.href ? 'bg-primary text-primary-foreground' : 'transparent',
                      item.isDisable && 'cursor-not-allowed opacity-40',
                    )}
                  >
                    {chil.Icon}
                    <span className={classNames('', { hidden: isCollapseMenu })}>{chil.title}</span>
                  </span>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link key={index} href={item.isDisable ? '' : item.href}>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger className='w-full'>
                  <span
                    className={cn(
                      'group z-50 flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-primary text-primary-foreground' : 'transparent',
                      item.isDisable && 'cursor-not-allowed opacity-40 ',
                    )}
                  >
                    {item.Icon} <span className={classNames('', { hidden: isCollapseMenu })}>{item.title}</span>
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
      <div
        className='absolute -bottom-14 hidden cursor-pointer rounded-full border bg-primary-foreground p-2 shadow md:block lg:block xl:block'
        onClick={() => dispatch(toggleMenu(!isCollapseMenu))}
      >
        <ChevronLeft className={classNames('transition-all', { 'rotate-180': isCollapseMenu })}></ChevronLeft>
      </div>
    </nav>
  );
};

export default SidebarNav;
