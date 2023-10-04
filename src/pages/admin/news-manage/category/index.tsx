import dayjs from 'dayjs';
import { ColumnDef } from '@tanstack/react-table';
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
import { ICategories, useDeleteCategory, useGetListCategories } from 'src/shared/schemas/models/ICategory';

export function CategoryList() {
  const router = useRouter();
  const TABLE_NAME = 'Category';
  const { data, tableConfig, getFieldValueOnSearchParam } = useGetListCategories();
  const useDelete = useDeleteCategory();

  const columnCategory: ColumnDef<ICategories>[] = [
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
                onClick={() => router.push(`/admin/Category/update/${record.id}`)}
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
      id: 'name',
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tên' defaultFilter={getFieldValueOnSearchParam('name')} />
      ),
    },
    {
      id: 'author',
      accessorKey: 'author',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tác giả' defaultFilter={getFieldValueOnSearchParam('title')} />
      ),
    },
    {
      id: 'slug',
      accessorKey: 'slug',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Slug' defaultFilter={getFieldValueOnSearchParam('title')} />
      ),
    },
    {
      id: 'Description',
      accessorKey: 'description',
      cell(props) {
        return <div className='w-[400px] truncate'>{props.getValue() as string}</div>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Mô tả ' />,
    },
    {
      id: 'updatedDate',
      accessorKey: 'updatedDate',
      cell: ({ row }) => {
        const record = row.original;
        return <div className='min-w-[50px]'>{dayjs(record.updatedDate).format(TIME_FORMAT_READ)}</div>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='Updated Date' />,
    },
  ];
  return (
    <section className='w-full space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl font-bold'>{TABLE_NAME}</div>
        <div
          className='flex h-9 cursor-pointer items-center justify-center rounded-lg border-2 border-slate-300 px-4 py-2 dark:bg-white dark:text-black'
          onClick={() => router.push('/admin/Category-manage/category/create')}
        >
          <PlusCircle className='mr-2' />
          Thêm mới thể loại
        </div>
      </div>
      <DataTable data={data?.data.content || []} columns={columnCategory} tableName={TABLE_NAME} {...tableConfig} />
    </section>
  );
}
CategoryList.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default CategoryList;
