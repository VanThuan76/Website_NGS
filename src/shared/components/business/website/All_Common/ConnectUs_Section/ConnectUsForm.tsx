import { ToastAction } from '@/components/common/ui/toast';
import { useToast } from '@/components/common/ui/use-toast';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export interface Props {
  connectUsData: any[];
}
const ConnectUsForm = ({ connectUsData }: Props) => {
  const { theme } = useTheme();
  const { toast } = useToast();
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
    toast({
      variant: 'success',
      title: 'Chúc mừng',
      description: 'Bạn đã kết nối với NGS thành công',
    });
  };
  return (
    <div className='flex w-full flex-col items-start justify-start text-white'>
      <h1 className='text-2xl font-thin lg:pl-8 lg:text-3xl'>Bạn quan tâm đến...</h1>
      <div className='mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 lg:pl-8'>
        {connectUsData &&
          connectUsData.map((item, idx) => {
            const isSelected = selectedItems.includes(item);
            return (
              <div
                key={idx}
                className={`cursor-pointer rounded-full border p-2 text-center ${
                  isSelected ? 'border-orange-700' : 'border-[#F5F5F5]'
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            );
          })}
      </div>
      <div className='flex w-full items-start justify-start'>
        <form onSubmit={handleSubmit} className='mt-4 w-full p-2 md:p-4 lg:p-8'>
          <div className='mb-4 w-full'>
            <label htmlFor='fullName' className='mb-1 block'>
              Họ và tên của bạn?
            </label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className='w-full border-b bg-transparent px-3 py-2 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4 w-full'>
            <label htmlFor='phoneNumber' className='mb-1 block'>
              Số điện thoại:
            </label>
            <input
              type='tel'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className='w-full border-b bg-transparent px-3 py-2 focus:outline-none'
              required
            />
          </div>

          <button
            type='submit'
            className={`relative mt-3 flex cursor-pointer items-center justify-between gap-3 rounded-[12px] bg-[#fff] py-[18px] pl-[16px] pr-[12px] text-left text-orange-500 hover:bg-[#efeeee] hover:transition hover:ease-in-out`}
          >
            <p className='text-sm'>Kết nối với NGS</p>
            <IconLineDirection color={theme !== 'dark' ? '#FC5E03' : '#fff'} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectUsForm;
