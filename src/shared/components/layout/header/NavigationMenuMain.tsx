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
  navigationMenuTriggerStyle,
} from '@/components/common/ui/navigation-menu';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { IMenu, IMenuChild3 } from '@/mocks/menu';
import Link from 'next/link';
import SecureMenuIcon from '@/components/icon/SecureMenuIcon';
import { useRouter } from 'next/router';

type Props = {
  fakeMenu: IMenu[];
};
const NavigationMenuMain = ({ fakeMenu }: Props) => {
  const {pathname} = useRouter()
  const [selectedMenuChild3, setSelectedMenuChild3] = useState<IMenuChild3>(fakeMenu[0].menuChild[0]);
  const [trigger, setTrigger] = useState<number>(NaN)
  return (
    <NavigationMenu className='NavigationMenuRoot'>
      <NavigationMenuList className='NavigationMenuList'>
        {fakeMenu.map((mainMenu, idx) => (
          <div key={idx}>
            {mainMenu.menuChild.length === 0 ? (
              <NavigationMenuItem>
                <Link href={mainMenu.path as string} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{mainMenu.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className='cursor-pointer'>
                <NavigationMenuTrigger
                  style={{color: `${("/" + pathname.split("/")[1]) === mainMenu.path && "#FC5E03"}`}}
                  onMouseMove={() => setSelectedMenuChild3(mainMenu.menuChild[0])}
                  className='NavigationMenuTrigger'
                >
                  {mainMenu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='NavigationMenuContent'>
                  <div className='List one gap-10'>
                    <div className='w-full flex flex-col justify-start items-start gap-5 border-r-2 border-r-slate-200 px-8'>
                      {mainMenu.menuChild.map((menuChild2, idx) => {
                        return (
                          <div className='w-full' key={idx}>
                            {menuChild2.title !== '' ? (
                              <motion.div
                                style={{
                                  borderBottom: `${
                                    trigger === idx ? '1px solid #FC5E03' : '1px solid #B7B4AE'
                                  }`,
                                }}
                                className='w-full flex justify-between items-start cursor-pointer'
                                whileHover={{
                                  borderBottom: '1px solid #FC5E03',
                                  color: '#000',
                                  x: 10,
                                }}
                                onMouseEnter={() => {
                                  setTrigger(idx)
                                  setSelectedMenuChild3(menuChild2)
                                }}
                                onMouseOver={() => setTrigger(NaN)}
                              >
                                  <p>{menuChild2.title}</p>
                                  {selectedMenuChild3 === menuChild2 && <IconLineDirection scale={0} color='#FC5E03' />}
                              </motion.div>
                            ) : (
                              <div className='w-full flex flex-col justify-start items-start'>
                                <SecureMenuIcon />
                                <p className='text-2xl'>We connect students to employers through real work projects.</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {selectedMenuChild3 ? (
                      <div className='w-full flex flex-col justify-start items-start gap-8 px-8'>
                        <h1 className='font-semibold text-2xl'>{selectedMenuChild3.title}</h1>
                        <div className='w-full flex justify-start items-start gap-10'>
                          {selectedMenuChild3.menuChild.map((menuChild3, idx) => (
                            <div key={idx} className='flex flex-col justify-between items-start'>
                              <div style={{ borderBottom: '1px solid #B7B4AE' }} className='text-slate-400'>
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
                      <></>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </div>
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
