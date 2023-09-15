import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import IconLineDirection from '@/components/icon/IconLineDirection';
import { defaultMenu3, IMenu, IMenuChild3 } from '@/mocks/menu';

type Props = {
  fakeMenu: IMenu[];
};
const NavigationMenuMain = ({ fakeMenu }: Props) => {
  const [isClick, setIsClick] = useState(false)
  const [selectedMenuChild3, setSelectedMenuChild3] = useState<IMenuChild3>(fakeMenu[0].menuChild[0]);
  return (
    <NavigationMenu className='NavigationMenuRoot'>
      <NavigationMenuList className='NavigationMenuList'>
        {fakeMenu.map((mainMenu, idx) => (
          <NavigationMenuItem key={idx} className='cursor-pointer'>
            <NavigationMenuTrigger className='NavigationMenuTrigger'>{mainMenu.title}</NavigationMenuTrigger>
            <NavigationMenuContent className='NavigationMenuContent'>
              <div className='List one grid grid-cols-2 gap-10'  onMouseLeave={() =>  setIsClick(false)}>
                <div className='w-full flex flex-col justify-start items-start gap-5 border-r-2 border-r-slate-200 px-8'>
                  {mainMenu.menuChild.map((menuChild2, idx) => (
                    <motion.div
                      key={idx}
                      style={{ borderBottom: '1px solid #B7B4AE' }}
                      className='w-full flex justify-between items-center cursor-pointer'
                      whileTap={{ borderBottom: '1px solid #FC5E03' }}
                      onClick={() => {
                        setIsClick(true)
                        setSelectedMenuChild3(menuChild2)
                      }}
                      onMouseEnter={() => setSelectedMenuChild3(menuChild2)}
                      onMouseLeave={() => !isClick && setSelectedMenuChild3(defaultMenu3)}
                    >
                      <p>{menuChild2.title}</p>
                      <IconLineDirection scale={0} color='#FC5E03' />
                    </motion.div>
                  ))}
                </div>
                {selectedMenuChild3 ? (
                  <div className='w-full flex flex-col justify-start items-start gap-8 px-8'>
                    <h1 className='font-semibold text-2xl'>{selectedMenuChild3.title}</h1>
                    <div className='w-full flex justify-between items-start gap-5'>
                      {selectedMenuChild3.menuChild.map((menuChild3, idx) => (
                        <div className='flex flex-col justify-between items-start'>
                          <div key={idx} style={{ borderBottom: '1px solid #B7B4AE' }} className='text-slate-400'>
                            {menuChild3.title}
                          </div>
                          {menuChild3.menuChild &&
                            menuChild3.menuChild.map((menuChild4, idx) => (
                              <NavigationMenuLink key={idx} href={`${menuChild3.path}${menuChild4.path}`}>
                                {menuChild4.title}
                              </NavigationMenuLink>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
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
