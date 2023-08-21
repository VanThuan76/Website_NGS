import SecurityCard from './SecurityCard';
const ResponsiveSecurity = () => {
  return (
    <div className='w-full flex lg:hidden flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
      <div className='grid grid-cols-2 justify-end items-end gap-2 md:grid-cols-3 md:gap-3'>
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
        <SecurityCard className='col-span-1' />
      </div>
    </div>
  );
};

export default ResponsiveSecurity;
