import { PreImage } from '@/components/common/customization/PreImage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/common/ui/accordion';
import { SheetClose } from '@/components/common/ui/sheet';
import SecureMenuIcon from '@/components/icon/SecureMenuIcon';
import useTrans from '@/hooks/useTrans';
import { IMenuChild3 } from '@/mocks/menu';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { useRouter } from 'next/router';
import React from 'react';

const NavigationMenuMainResponsive = () => {
  const { pathname } = useRouter();
  const { trans, lang } = useTrans();
  const router = useRouter();
  return (
    <div className='mx-auto w-full'>
      <SheetClose
        className='relative -left-20 top-0 z-20 flex h-[50px] w-[250px] cursor-pointer items-center justify-center gap-2'
        onClick={() => router.push('/')}
      >
        <PreImage src='/logo.png' alt='Logo' layer={false} />
      </SheetClose>
      {trans.website.menu.map((mainMenu, index) => (
        <div className='h-full w-full' key={index}>
          {mainMenu.menuChild.length === 0 ? (
            <div className='w-full py-4'>
              <SheetClose>
                <UseLinkRouter url={mainMenu.path || ''}>
                  <p className='text-base font-medium leading-6'>{mainMenu.title}</p>
                </UseLinkRouter>
              </SheetClose>
            </div>
          ) : (
            <Accordion type='multiple' className='cursor-pointer'>
              <AccordionItem value={mainMenu.title}>
                <AccordionTrigger className='text-base font-medium leading-6'>{mainMenu.title}</AccordionTrigger>
                <AccordionContent>
                  {mainMenu.menuChild.map((menuChild2, index) => {
                    return (
                      <div key={index}>
                        {menuChild2.title !== '' ? (
                          <Accordion type='multiple'>
                            <AccordionItem value={menuChild2.title}>
                              <AccordionTrigger className='text-sm font-medium leading-6'>
                                {menuChild2.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                {menuChild2.menuChild.map((menuChild3, index) => (
                                  <div
                                    key={index}
                                    className='ml-5 mt-5 flex w-full flex-col items-start justify-start gap-5'
                                  >
                                    <p
                                      className='h-[5px] w-full pb-4 text-[#a6a6a6]'
                                      style={{ borderBottom: '1px solid #E8E8E8' }}
                                    >
                                      {menuChild3.title}
                                    </p>
                                    {menuChild3.menuChild &&
                                      menuChild3.menuChild.map((menuChild4: IMenuChild3, index: number) => (
                                        <UseLinkRouter
                                          url={`${
                                            menuChild4.path === '/update-soon'
                                              ? menuChild4.path
                                              : menuChild3.path + menuChild4.path
                                          }`}
                                          key={index}
                                        >
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
                          <div className='items-star flex w-full flex-col justify-start gap-8'>
                            <SecureMenuIcon className='h-[56px] w-[56px]' />
                            <p className='text-base font-semibold leading-6'>
                              {lang === 'vi'
                                ? 'Bảo vệ toàn vẹn hệ thống Công nghệ thông tin của bạn bằng Dịch vụ An ninh mạng 24/7 chuyên nghiệp'
                                : 'Ensure the integrity of your Information Technology system with 24/7 Professional Cybersecurity Services.'}
                            </p>
                            {menuChild2.menuChild.map((menuChild3, index) => (
                              <div key={index} className='mt-5 flex w-full flex-col items-start justify-start gap-5'>
                                <p
                                  className='h-[5px] w-full pb-4 text-[#a6a6a6]'
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
