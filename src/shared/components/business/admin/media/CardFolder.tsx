import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';

import FormFolder from './FormFolder';
import TriggerDialogForm from './TriggerDialogForm';
import EyeIcon from '@/components/icon/EyeIcon';
import EditIcon from '@/components/icon/EditIcon';
import FolderIcon from '@/components/icon/FolderIcon';
import { IFolderMedia } from '@/mocks/admin/media';
import { Edit } from 'lucide-react';
import classNames from 'classnames';
import useMediaModal from '@/hooks/useMediaModal';

interface Props {
  data: IFolderMedia;
  active?: boolean;
  onClick?: (e: IFolderMedia) => void;
  viewMode: 'mutation' | 'view';
}
const CardFolder = ({ data, viewMode, active, onClick }: Props) => {
  // const router = useRouter();

  return (
    <div
      className={classNames(
        'group relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-md border bg-primary-foreground p-2 shadow-lg md:p-4 ',
        {
          'bg-blue-500 text-white': active,
        },
      )}
      onClick={() => onClick && onClick(data)}
    >
      <div className='relative rounded-md bg-blue-400 p-6 dark:bg-blue-600'>
        <FolderIcon className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform' />
      </div>
      <div className='flex w-full flex-col items-start justify-start py-2'>
        <h3>{data.title.length > 12 ? data.title.substring(0, 12) + '...' : data.title}</h3>
        <p>{data.imageCount} images</p>
      </div>
      {viewMode === 'mutation' && (
        <>
          <TriggerDialogForm
            titleDialog='Tạo thư mục'
            trigger={
              <Edit
                size={18}
                className={`absolute right-5 top-3 z-40 hidden cursor-pointer text-xl group-hover:block`}
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
            className={`absolute right-5 top-9 z-40 hidden cursor-pointer text-xl group-hover:block`}
            onClick={() => {
              // router.push(`/admin/media/folder/${data.id}`);
            }}
          />
        </>
      )}
    </div>
  );
};

export default CardFolder;
