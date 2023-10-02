import { PreImage } from '@/components/common/customization/PreImage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/common/ui/accordion';
import { SheetClose } from '@/components/common/ui/sheet';
import SecureMenuIcon from '@/components/icon/SecureMenuIcon';
import { IMenu, IMenuChild3 } from '@/mocks/menu';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  fakeMenu: IMenu[];
};
const NavigationMenuMainResponsive = ({ fakeMenu }: Props) => {
  const { pathname } = useRouter();
  const router = useRouter()
  return (
    <div className='w-full mx-auto'>
      <SheetClose
        className='relative w-[250px] h-[50px] -left-20 top-0 flex justify-center items-center gap-2 z-20 cursor-pointer'
        onClick={() => router.push('/')}
      >
        <PreImage src='/logo.png' alt='Logo' layer={false} />
      </SheetClose>
      {fakeMenu.map((mainMenu, index) => (
        <div className='w-full h-full' key={index}>
          {mainMenu.menuChild.length === 0 ? (
            <div className='w-full py-4'>
              <SheetClose>
                <UseLinkRouter url={mainMenu.path || ''}>
                  <p className='text-base leading-6 font-medium'>{mainMenu.title}</p>
                </UseLinkRouter>
              </SheetClose>
            </div>
          ) : (
            <Accordion type='multiple' className='cursor-pointer'>
              <AccordionItem value={mainMenu.title}>
                <AccordionTrigger className='text-base leading-6 font-medium'>{mainMenu.title}</AccordionTrigger>
                <AccordionContent>
                  {mainMenu.menuChild.map((menuChild2, index) => {
                    return (
                      <div key={index}>
                        {menuChild2.title !== '' ? (
                          <Accordion type='multiple'>
                            <AccordionItem value={menuChild2.title}>
                              <AccordionTrigger className='text-sm leading-6 font-medium'>
                                {menuChild2.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                {menuChild2.menuChild.map((menuChild3, index) => (
                                  <div
                                    key={index}
                                    className='mt-5 ml-5 w-full flex flex-col justify-start items-start gap-5'
                                  >
                                    <p
                                      className='h-[5px] w-full text-[#a6a6a6] pb-4'
                                      style={{ borderBottom: '1px solid #E8E8E8' }}
                                    >
                                      {menuChild3.title}
                                    </p>
                                    {menuChild3.menuChild &&
                                      menuChild3.menuChild.map((menuChild4: IMenuChild3, index: number) => (
                                        <UseLinkRouter url={`${menuChild3.path}${menuChild4.path}`} key={index}>
                                          <p
                                            className={`${
                                              '/' + pathname.split('/')[2] === menuChild4.path ? 'text-[#FC5E03]' : ''
                                            }`}
                                          >
                                            {menuChild4.title}
                                          </p>
                                        </UseLinkRouter>
                                      ))}
                                  </div>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <div className='w-full flex flex-col justify-start items-star gap-8'>
                            <SecureMenuIcon className='w-[56px] h-[56px]' />
                            <p className='text-base font-semibold leading-6'>
                              Bảo vệ toàn vẹn hệ thống Công nghệ thông tin của bạn bằng Dịch vụ An ninh mạng 24/7 chuyên
                              nghiệp
                            </p>
                            {menuChild2.menuChild.map((menuChild3, index) => (
                              <div key={index} className='mt-5 w-full flex flex-col justify-start items-start gap-5'>
                                <p
                                  className='h-[5px] w-full text-[#a6a6a6] pb-4'
                                  style={{ borderBottom: '1px solid #E8E8E8' }}
                                >
                                  {menuChild3.title}
                                </p>
                                {menuChild3.menuChild &&
                                  menuChild3.menuChild.map((menuChild4: IMenuChild3, index: number) => (
                                    <SheetClose key={index}>
                                      <UseLinkRouter url={`${menuChild3.path}${menuChild4.path}`}>
                                        <p>{menuChild4.title}</p>
                                      </UseLinkRouter>
                                    </SheetClose>
                                  ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationMenuMainResponsive;
