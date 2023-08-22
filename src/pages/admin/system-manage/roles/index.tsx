import dayjs from 'dayjs';
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/router';
import { Edit, MoreHorizontal, PlusCircle, Trash2 } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';
import { Button } from '@/components/common/ui/button';
import { ConfirmDialog } from '@/components/common/dialog/ConfirmDialog';

import { TIME_FORMAT_READ } from '@/utils/constants/settings';
import DataTable from '@/components/common/table/DataTable';
import DataTableColumnHeader from '@/components/common/table/DataTableColumnHeader';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';
import { useGetListRoles, useDeleteRole, IRole } from 'src/shared/schemas/models/IRole';

export function RoleList() {
    const router = useRouter();
    const TABLE_NAME = 'Role';
    const { data, tableConfig, getFieldValueOnSearchParam } = useGetListRoles()
    const useDelete = useDeleteRole();

    const columnRole: ColumnDef<IRole>[] = [
        {
            id: 'actions',
            header: 'Thao tác',
            cell: ({ row }) => {
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
                        onClick={() => router.push(`./roles/update/${record.id}`)}
                    >
                        <Edit className='mr-2 h-4 w-4' /> Chỉnh sửa
                    </DropdownMenuItem>
        
                    <ConfirmDialog
                        triggerCpn={
                        <Button variant={'ghost'} className='w-full justify-start'>
                            <Trash2 className='mr-2 h-4 w-4' />
                            Xóa
                        </Button>
                        }
                        title='Xóa '
                        content='Chắc chắn Xóa'
                        onOk={() => useDelete.mutate({ id: record.id })}
                    />
                    </DropdownMenuContent>
                </DropdownMenu>
                );
            },
        },
        {
            id: 'roleName',
            accessorKey: 'roleName',
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title='Tên vai trò' defaultFilter={getFieldValueOnSearchParam('roleName')} />
            ),
        },
        {
            id: 'description',
            accessorKey: 'description',
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title='Mô tả' defaultFilter={getFieldValueOnSearchParam('description')} />
            ),
        },
        {
            id: "createdDate",
            accessorKey: "createdDate",
            cell: ({ row }) => {
              const record = row.original;
              return <div className='min-w-[50px]'>{dayjs(record.createdDate).format(TIME_FORMAT_READ)}</div>;
            },
            header: ({ column }) => <DataTableColumnHeader column={column} title="Created Date" />,
        },
        {
            id: "updatedDate",
            accessorKey: "updatedDate",
            cell: ({ row }) => {
              const record = row.original;
              return <div className='min-w-[50px]'>{dayjs(record.updatedDate).format(TIME_FORMAT_READ)}</div>;
            },
            header: ({ column }) => <DataTableColumnHeader column={column} title="Updated Date" />,
          },
        
    ]
    return (
        <section className='w-full space-y-4'>
          <div className='flex justify-between'>
            <div className='text-2xl font-bold'>{TABLE_NAME}</div>
            <Button onClick={() => router.push('./roles/create')}>
              <PlusCircle className='mr-2' /> Add Role
            </Button>
          </div>
          <DataTable data={data?.data.content || []} columns={columnRole} tableName={TABLE_NAME} {...tableConfig} />
        </section>
    );
}
RoleList.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default RoleList;