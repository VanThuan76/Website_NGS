import React from 'react'
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { Button } from '@/components/common/ui/button';
import { Edit, MoreHorizontal, PlusCircle, Trash2 } from 'lucide-react';
import { useRouter } from 'next/router';
import DataTable from '@/components/common/table/DataTable';
import { IUser } from 'src/shared/schemas/models/IUser';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';
import { ConfirmDialog } from '@/components/common/dialog/ConfirmDialog';
import DataTableColumnHeader from '@/components/common/table/DataTableColumnHeader';
import dayjs from 'dayjs';
import { record } from 'zod';


const generateFakeUser = (id: any) => ({
  id: id + 1,
  userName: `user${id + 1}`,
  fullName: `Full Name ${id + 1}`,
  phoneNumber: `123-456-789${id + 1}`,
  email: `user${id + 1}@example.com`,
  organizationDto: `${id + 1}`,
  roles: `Role ${id + 1}`,
  active: (id + 1) % 2 === 0, // Alternating between active and inactive
  updatedDate: new Date().toLocaleString(),
});

const data = Array.from({ length: 20 }, (_, index) => generateFakeUser(index));

const defaultFilter = {
  defaultFilter: []
}

const tableConfig = {
  queryKey: [],
  apiFn: () => {  },
  defaultParams: {
    page: 0,
    size: 10,
    filters: defaultFilter,
    sorts: [{ field: 'updatedDate', direction: 'DESC' }]
  }
}

const UserManage = () => {
  const router = useRouter();
  const TABLE_NAME = 'Users Management';
  const useDelete = () => {};
  

  
  const columnUsers: ColumnDef<IUser>[] = [
    {
      id: 'actions',
      header: 'Thao tác',
      cell:({ row }: any) => {
        const record = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem
                className='cursor-pointer pl-4 font-medium'
                onClick={() => router.push(`/admin/system-manage/users/update/${record.id}`)}
              >
                <Edit className='mr-2 h-4 w-4' /> Chỉnh sửa
              </DropdownMenuItem>
              {/* ... (other dropdown menu items) */}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    },
    {
      id: 'id',
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='id' />
      ),
    },
    {
      id: 'userName',
      accessorKey: 'userName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tên tài khoản'  />
      ),
    },
    {
      id: 'fullName',
      accessorKey: 'fullName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tên đầy đủ'  />
      ),
    },
    {
      id: 'phoneNumber',
      accessorKey: 'phoneNumber',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Số điện thoại'  />
      ),
    },
    {
      id: 'email',
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Email'  />
      ),
    },
    {
      id: 'organizationDto',
      accessorKey: 'organizationDto',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Mã Id tổ chức'  />
      ),
    },
    {
      id: 'role',
      accessorKey: 'role',
      header: ({ column }) => <DataTableColumnHeader column={column} title='Vai trò' />,
    }
  ];
  

  return (
      <section className='w-full space-y-4'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold'>{TABLE_NAME}</div>
          <Button onClick={() => router.push('/admin/system-manage/users/create')}>
            <PlusCircle className='mr-2' /> Add Users
          </Button>
        </div>
        <DataTable 
          data={data as any || [] } 
          //@ts-ignore
          columns={columnUsers} 
          tableName={TABLE_NAME} 
          {...tableConfig}
        />
        
      </section>
  )
}

UserManage.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;

export default UserManage
