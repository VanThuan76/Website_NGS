import HomeSecurityCard from './HO_security_card';
const HomeSecurityResponsive = () => {
  return (
    <div className='max-w-[1440px] w-full my-auto flex lg:hidden flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
      <div className='grid grid-cols-2 justify-end items-end gap-2 md:grid-cols-3 md:gap-3'>
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
        <HomeSecurityCard className='col-span-1' />
      </div>
    </div>
  );
};

export default HomeSecurityResponsive;
