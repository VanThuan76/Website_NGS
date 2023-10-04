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
  className?: string;
};
const NavigationMenuMain = ({ fakeMenu, className }: Props) => {
  const { pathname } = useRouter();
  // TODO: Fix menu by parent_id
  const [selectedMenuChild3, setSelectedMenuChild3] = useState<IMenuChild3>(fakeMenu[0].menuChild[0]);
  return (
    <NavigationMenu className='NavigationMenuRoot'>
      <NavigationMenuList className='NavigationMenuList'>
        {fakeMenu.map((mainMenu, idx) => (
          <div key={idx}>
            {mainMenu.menuChild.length === 0 ? (
              <NavigationMenuItem>
                <Link href={mainMenu.path as string} legacyBehavior passHref>
                  <NavigationMenuLink
                    style={{
                      color: `${'/' + pathname.split('/')[1] === mainMenu.path ? '#FC5E03' : ''}`,
                      backgroundColor: 'transparent',
                    }}
                    className={navigationMenuTriggerStyle()}
                  >
                    {mainMenu.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className='cursor-pointer'>
                <NavigationMenuTrigger
                  style={{
                    color: `${'/' + pathname.split('/')[1] === mainMenu.path ? '#FC5E03' : ''}`,
                    backgroundColor: 'transparent',
                  }}
                  onMouseMove={() => setSelectedMenuChild3(mainMenu.menuChild[0])}
                  className='NavigationMenuTrigger'
                >
                  {mainMenu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='NavigationMenuContent'>
                  <div className='List one gap-10'>
                    <div className='flex w-full flex-col items-start justify-start gap-5 border-r-2 border-r-slate-200 px-8 pt-4'>
                      {mainMenu.menuChild.map((menuChild2, idx) => {
                        return (
                          <div className='w-full' key={idx}>
                            {menuChild2.title !== '' ? (
                              <motion.div
                                style={{
                                  borderBottom: '1px solid #E8E8E8',
                                }}
                                className='relative flex w-full cursor-pointer items-start justify-between pb-6'
                                whileHover={{
                                  borderBottom: '1px solid #FC5E03',
                                  color: '#000',
                                  x: 10,
                                }}
                                onMouseEnter={() => setSelectedMenuChild3(menuChild2)}
                              >
                                <p>{menuChild2.title}</p>
                                {selectedMenuChild3 === menuChild2 && (
                                  <div
                                    className='absolute bottom-0 h-[1px] w-full'
                                    style={{ borderBottom: '1px solid #FC5E03' }}
                                  ></div>
                                )}
                                {selectedMenuChild3 === menuChild2 && <IconLineDirection scale={0} color='#FC5E03' />}
                              </motion.div>
                            ) : (
                              <div className='flex w-full flex-col items-start justify-start'>
                                <SecureMenuIcon />
                                <p className='text-2xl text-[#a6a6a6]'>
                                  Bảo vệ toàn vẹn hệ thống Công nghệ thông tin của bạn bằng Dịch vụ An ninh mạng 24/7
                                  chuyên nghiệp
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {selectedMenuChild3 ? (
                      <div className='flex w-full flex-col items-start justify-start gap-8 px-8 pb-6 pt-4'>
                        <h1 className='text-2xl font-semibold'>{selectedMenuChild3.title}</h1>
                        <div className='flex w-full items-start justify-start gap-6'>
                          {selectedMenuChild3.menuChild.map((menuChild3, idx) => (
                            <div key={idx} className='flex w-[277px] flex-col items-start justify-start gap-5'>
                              {menuChild3.title !== '' && (
                                <div
                                  style={{ borderBottom: '1px solid #E8E8E8' }}
                                  className='w-full pb-4 text-[#a6a6a6]'
                                >
                                  {menuChild3.title}
                                </div>
                              )}
                              {menuChild3.menuChild &&
                                menuChild3.menuChild.map((menuChild4, idx) => (
                                  <NavigationMenuLink
                                    className={`text-[14px] ${
                                      '/' + pathname.split('/')[2] === menuChild4.path ? 'text-[#FC5E03]' : ''
                                    }`}
                                    style={{
                                      borderTop: `${menuChild3.title === '' && idx === 0 ? '1px solid #E8E8E8' : ''}`,
                                    }}
                                    key={idx}
                                    href={`${menuChild3.path}${menuChild4.path}`}
                                  >
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
