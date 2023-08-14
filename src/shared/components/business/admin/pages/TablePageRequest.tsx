import { ConfirmDialog } from '@/components/common/dialog/ConfirmDialog';
import DataTable from '@/components/common/table/DataTable';
import DataTableColumnHeader from '@/components/common/table/DataTableColumnHeader';
import { Button } from '@/components/common/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';

type Props = {};

export default function TablePageRequest({ }: Props) {
    const columnNews: ColumnDef<any>[] = [
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
                            <DropdownMenuItem className='cursor-pointer pl-4 font-medium'>Compare</DropdownMenuItem>
                            <DropdownMenuItem className='cursor-pointer pl-4 font-medium'>Preview</DropdownMenuItem>
                            <DropdownMenuItem className='cursor-pointer pl-4 font-medium'>Approve</DropdownMenuItem>

                            <ConfirmDialog
                                triggerCpn={
                                    <Button variant={'ghost'} className='w-full justify-start'>
                                        Decline
                                    </Button>
                                }
                                title='Xóa '
                                content='Chắc chắn Xóa'
                                onOk={() => console.log('123')}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
        {
            id: 'createDate',
            accessorKey: 'createDate',
            header: ({ column }) => <DataTableColumnHeader column={column} title='createDate' />,
        },
        {
            id: 'author',
            accessorKey: 'author',
            header: ({ column }) => <DataTableColumnHeader column={column} title='Tác giả' />,
        },
    ];
    return (
        <div>
            <DataTable
                data={[
                    {
                        id: 1,
                        createDate: '2023-08-12',
                        author: 'sypv',
                    },
                    {
                        id: 2,
                        createDate: '2023-08-12',
                        author: 'thuanvu',
                    },
                ]}
                columns={columnNews}
                tableName={'PAGE_REQUEST'}
                isClientPagination
                isLoading={false}
                pageSize={2}
                pageIndex={1}
                pageCount={2}
                handChangePagination={() => console.log('any')}
            />
        </div>
    );
}
