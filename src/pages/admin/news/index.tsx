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
import { IAdminNews, useDeleteNews, useGetListNews } from 'src/shared/schemas/models/INews';
import DataTable from '@/components/common/table/DataTable';
import DataTableColumnHeader from '@/components/common/table/DataTableColumnHeader';
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout';

export function NewsList() {
  const router = useRouter();
  const TABLE_NAME = 'News';
  const { data, tableConfig, getFieldValueOnSearchParam } = useGetListNews();
  const useDelete = useDeleteNews();

  const columnNews: ColumnDef<IAdminNews>[] = [
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
                onClick={() => router.push(`/news/update/${record.id}`)}
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
      id: 'title',
      accessorKey: 'title',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Tiêu đề' defaultFilter={getFieldValueOnSearchParam('title')} />
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
      id: "updatedDate",
      accessorKey: "updatedDate",
      cell: ({ row }) => {
        const record = row.original;
        return <div className='min-w-[50px]'>{dayjs(record.updatedDate).format(TIME_FORMAT_READ)}</div>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title="Updated Date" />,
    },
    // {
    //   title: "Status",
    //   dataIndex: 'isActive',
    //   key: 'isActive',
    //   filters: [
    //     {
    //       text: 'Active',
    //       value: true,
    //     },
    //     {
    //       text: 'InActive',
    //       value: false,
    //     },
    //   ],
    //   ...getColumnSearchProps({ dataIndex: 'isActive', fieldType: 'STRING', operation: 'LIKE' }),
    //   render: (value, record) => (
    //     <Switch
    //       checked={value}
    //       onClick={() => {
    //         modal.info({
    //           width: 600,
    //           footer: null,
    //           icon: null,
    //           wrapClassName: 'flex justify-center',
    //           content: (
    //             <div className='text-center'>
    //               <div className=',b-2 text-2xl font-bold'>Change status</div>
    //               <div>Change status?</div>
    //               <div className='mt-12 flex justify-center gap-4'>
    //                 <Button onClick={() => Modal.destroyAll()}>No</Button>
    //                 <Button type='primary' onClick={() => useChangeStatus.mutate({ id: record.id })}>
    //                 Yes
    //                 </Button>
    //               </div>
    //             </div>
    //           ),
    //         });
    //       }}
    //     />
    //   ),
    // },

  ];
  return (
    <section className='w-full space-y-4'>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>{TABLE_NAME}</div>
        <Button onClick={() => router.push('/admin/news/create')}>
          <PlusCircle className='mr-2' /> Add News
        </Button>
      </div>
      <DataTable data={data?.data.content || []} columns={columnNews} tableName={TABLE_NAME} {...tableConfig} />
    </section>
  );
}
NewsList.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default NewsList;
