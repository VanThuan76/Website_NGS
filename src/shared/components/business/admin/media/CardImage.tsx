import { ImageCommon } from '@/components/common/image/ImageCommon';
import { Badge } from '@/components/common/ui/badge';
import EditIcon from '@/components/icon/EditIcon';
import { IImageMedia } from '@/mocks/admin/media';
import { useState } from 'react';
import FormImageEdit from './FormImageEdit';
import TriggerDialogForm from './TriggerDialogForm';

interface Props {
  data: IImageMedia;
}
const CardImage = ({ data }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative flex cursor-pointer flex-col items-start justify-start gap-3 rounded-md  p-2 lg:p-4 shadow-lg bg-primary-foreground'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageCommon width={400} height={200} src={data.url} alt={`Image ${data.title}`} className='w-full rounded-md' />
      <div className='flex w-full items-center justify-between'>
        <div className='hidden md:flex lg:flex xl:flex flex-col items-start justify-start'>
          <p>{data.title}</p>
          <p className='text-sm font-thin'>{data.size}</p>
        </div>
        <Badge>IMAGE</Badge>
      </div>
      <TriggerDialogForm
        className='min-w-[1080px]'
        titleDialog='Chỉnh sửa ảnh'
        trigger={
          <EditIcon
            width={30}
            height={30}
            className={`absolute right-5 top-5 cursor-pointer rounded-md bg-white ${isHovered ? 'block' : 'hidden'}`}
          />
        }
        form={
          <FormImageEdit
            data={data}
            onSubmit={function (value: Partial<any>): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      />
    </div>
  );
};

export default CardImage;
