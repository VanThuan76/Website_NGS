import { PlusCircle } from 'lucide-react';
import FormFolder from './FormFolder';
import FormImageCreate from './FormImageCreate';
import TriggerDialogForm from './TriggerDialogForm';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-2xl font-bold'>Thư viện ảnh</div>
      <div className='flex items-center justify-between gap-5'>
        <TriggerDialogForm
          titleDialog='Tạo thư mục'
          trigger={
            <div className='dark:bg-white dark:text-black h-9 px-4 py-2 flex justify-center items-center border-2 border-slate-300 rounded-lg'>
              <PlusCircle className='mr-2' />
              Thêm mới thư mục
            </div>
          }
          form={
            <FormFolder
              onSubmit={function (value: Partial<any>): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <TriggerDialogForm
          titleDialog='Tạo thư mục'
          trigger={
            <div className='dark:bg-white dark:text-black h-9 px-4 py-2 flex justify-center items-center border-2 border-slate-300 rounded-lg'>
              <PlusCircle className='mr-2' />
              Thêm mới ảnh
            </div>
          }
          form={
            <FormImageCreate
              onSubmit={function (value: Partial<any>): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Header;
