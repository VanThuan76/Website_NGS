import { FormLabel } from '@/components/common/ui/form';
import { useAppSelector } from '@/hooks/useRedux';
import { mockdata } from 'src/shared/schemas/models/IRole';
import Row from './Row';

type Props = { hideButtonSubmit?: boolean; disable?: boolean; isRootRole?: boolean };

export default function TableRole({}: Props) {
  //const catePermissions = useAppSelector(state => state.roleSlice.catePermissions)
  return (
    <div>
      <div>
        <FormLabel>Bảng phân quyền</FormLabel>
        <div className='w-full  rounded-t-lg'>
          <div className='grid grid-cols-6 place-items-center bg-gray-100  py-4  '>
            <span className=''></span>
            {/* CHECK ALL ACTION */}
            <span className='text-center font-bold'>
              <div>Tạo</div>
            </span>
            <span className='text-center font-bold'>
              <div>Chỉnh sửa</div>
            </span>
            <span className='text-center font-bold'>
              <div>Xem</div>
            </span>
            <span className='text-center font-bold'>
              <div>Xóa</div>
            </span>
            <span className='text-center font-bold'>
              <div>Xác nhận</div>
            </span>
          </div>
          {mockdata.map(category => (
            <Row key={category.id} permisions={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
