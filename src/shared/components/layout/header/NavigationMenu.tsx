import React from 'react';
import classNames from 'classnames';
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

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  { className?: string; children: React.ReactNode; title: string; href: string }
>(({ className, children, title, href, ...props }, forwardedRef) => (
  <li>
    <NavigationMenuLink asChild>
      <a className={classNames('ListItemLink', className)} href={href} {...props} ref={forwardedRef}>
        <div className='ListItemHeading'>{title}</div>
        <p className='ListItemText'>{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
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
        {/* <NavigationMenuItem className='cursor-pointer'>
          <NavigationMenuTrigger className='NavigationMenuTrigger'>Chuyển đổi số</NavigationMenuTrigger>
          <NavigationMenuContent className='NavigationMenuContent'>
            <div className='List one grid grid-cols-2 gap-10'>
              <div className='w-full flex flex-col justify-start items-start gap-5'>
                <p className='border-b-2 border-b-slate-200'>Digital Consulting</p>
                <p>Digital Transformation Implementation</p>
                <p>Digital Foundation</p>
                <p>IT Management Service</p>
              </div>
              <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus quaerat facilis officia, porro cupiditate, a cum dignissimos totam libero itaque adipisci atque at neque modi odit dolores nam aliquid?
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='NavigationMenuTrigger'>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className='NavigationMenuContent'>
            <ul className='List two'>
              <ListItem title='Introduction' href='/primitives/docs/overview/introduction'>
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title='Getting started' href='/primitives/docs/overview/getting-started'>
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title='Styling' href='/primitives/docs/guides/styling'>
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title='Animation' href='/primitives/docs/guides/animation'>
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title='Accessibility' href='/primitives/docs/overview/accessibility'>
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title='Releases' href='/primitives/docs/overview/releases'>
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
{/* 
        <NavigationMenuItem>
          <NavigationMenuLink className='NavigationMenuLink' href='https://github.com/radix-ui'>
            Github
          </NavigationMenuLink>
        </NavigationMenuItem> */}

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
