import { useRouter } from 'next/router';
import { useState } from 'react';

import FormFolder from './FormFolder';
import TriggerDialogForm from './TriggerDialogForm';
import EyeIcon from '@/components/icon/EyeIcon';
import EditIcon from '@/components/icon/EditIcon';
import FolderIcon from '@/components/icon/FolderIcon';
import { IFolderMedia } from '@/mocks/admin/media';

interface Props {
  data: IFolderMedia;
}
const CardFolder = ({ data }: Props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-md bg-slate-100 px-4 shadow-lg dark:bg-slate-500'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative rounded-md bg-blue-400 p-6 dark:bg-blue-600'>
        <FolderIcon className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform' />
      </div>
      <div className='flex w-full flex-col items-start justify-start py-2'>
        <h3>{data.title.length > 12 ? data.title.substring(0, 12) + '...' : data.title}</h3>
        <p>{data.imageCount} images</p>
      </div>
      <TriggerDialogForm
        titleDialog='Tạo thư mục'
        trigger={
          <EditIcon
            className={`absolute right-5 top-3 z-40 cursor-pointer text-xl ${isHovered ? 'block' : 'hidden'}`}
          />
        }
        form={
          <FormFolder
            onSubmit={function (value: Partial<any>): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      />
      <EyeIcon
        className={`absolute right-5 top-9 z-40 cursor-pointer text-xl ${isHovered ? 'block' : 'hidden'}`}
        onClick={() => {
          router.push(`/admin/media/folder/${data.id}`);
        }}
      />
    </div>
  );
};

export default CardFolder;
