import IconLineDirection from '@/components/icon/IconLineDirection';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export interface Props {
  connectUsData: any[];
}
const ConnectUsForm = ({ connectUsData }: Props) => {
  const { theme } = useTheme();
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
    <div className='w-full flex flex-col justify-start items-start text-white'>
      <h1 className='text-2xl lg:text-3xl font-thin lg:pl-8'>Bạn quan tâm đến...</h1>
      <div className='mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 lg:pl-8'>
        {connectUsData &&
          connectUsData.map((item, idx) => {
            const isSelected = selectedItems.includes(item);
            return (
              <div
                key={idx}
                className={`text-center p-2 rounded-full border cursor-pointer ${
                  isSelected ? 'border-orange-700' : 'border-[#F5F5F5]'
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            );
          })}
      </div>
      <div className='w-full flex justify-start items-start'>
        <form onSubmit={handleSubmit} className='w-full p-2 md:p-4 lg:p-8 mt-4'>
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

          <button
            type='submit'
            className={`bg-[#fff] text-orange-500 relative flex justify-between items-center gap-3 text-left py-4 px-4 cursor-pointer mt-3 hover:bg-[#c1c0c0] hover:ease-in-out hover:transition rounded-full`}
          >
            <p className='text-sm'>Đăng ký</p>
            <IconLineDirection color={theme !== 'dark' ? '#FC5E03' : '#fff'} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectUsForm;
