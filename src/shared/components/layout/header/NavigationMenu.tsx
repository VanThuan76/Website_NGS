import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '@/components/common/ui/navigation-menu';

type Props = {
  fakeMenu: Array<string>;
};
const NavigationMenuMain = ({ fakeMenu }: Props) => {
  return (
    <NavigationMenu className='NavigationMenuRoot'>
      <NavigationMenuList className='NavigationMenuList'>
        {fakeMenu.map((menu, idx) => (
          <NavigationMenuItem key={idx} className='cursor-pointer'>
            <NavigationMenuTrigger className='NavigationMenuTrigger'>{menu}</NavigationMenuTrigger>
            <NavigationMenuContent className='NavigationMenuContent'>
              <div className='List one grid grid-cols-2 gap-10'>
                <div className='w-full flex flex-col justify-start items-start gap-5'>
                  <p className='border-b-2 border-b-slate-200'>Digital Consulting</p>
                  <p>Digital Transformation Implementation</p>
                  <p>Digital Foundation</p>
                  <p>IT Management Service</p>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus quaerat facilis officia,
                  porro cupiditate, a cum dignissimos totam libero itaque adipisci atque at neque modi odit dolores nam
                  aliquid?
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div className='ViewportPosition'>
        <NavigationMenuViewport className='NavigationMenuViewport' />
      </div>
    </NavigationMenu>
  );
};

export default NavigationMenuMain;
