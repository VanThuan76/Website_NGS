import IconLineDirection from '@/components/icon/IconLineDirection';
import { useState } from 'react';

const YNGCommonPilotSubriceForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prevItems => prevItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems(prevItems => [...prevItems, item]);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Email:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Options:', selectedItems);
  };
  return (
    <div className='w-full flex flex-col justify-start items-start md:border-2 md:border-slate-300 md:rounded-lg md:shadow-md'>
      <div className='w-full flex justify-start items-start'>
        <form onSubmit={handleSubmit} className='w-full mt-4'>
          <div className='w-full mb-4'>
            <label htmlFor='fullName' className='block mb-1'>
              Họ và tên của bạn?
            </label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor='phoneNumber' className='block mb-1'>
              Số điện thoại:
            </label>
            <input
              type='tel'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor='email' className='block mb-1'>
              Email*
            </label>
            <input
              type='text'
              id='email'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor='workPosition' className='block mb-1'>
              Vi tri cong viec
            </label>
            <input
              id='workPosition'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>
          <button
            type='submit'
            className={`bg-[#fff] text-black relative flex justify-between items-center gap-3 text-left py-4 px-4 cursor-pointer mt-3 hover:bg-[#c1c0c0] hover:ease-in-out hover:transition rounded-lg`}
          >
            <p className='text-sm'>Đăng ký</p>
            <IconLineDirection color='#000' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default YNGCommonPilotSubriceForm;
