import React from 'react'
import classNames from 'classnames';
import { MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/router';
import { Tree, TreeNode } from 'react-organizational-chart';

import { pageAdminData } from '@/mocks/admin/page';
import { Card } from '@/components/common/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/common/ui/dropdown-menu';
import { fakeMenu } from '@/mocks/menu';
import { PreImage } from '@/components/common/customization/PreImage';


type Props = {}

export default function PageChart({ }: Props) {
    const router = useRouter()
    const Label = ({ name, image, active }: { name: string, image?: string, active?: boolean }) => {
        return <Card className='w-full py-4 px-4 relative'>
            <b >
                <div className={classNames('w-3 h-3 rounded-full', { 'bg-red-400': !active, 'bg-green-400': active })}></div>
                {name}
            </b>
            <DropdownMenu>
                <DropdownMenuTrigger><MoreHorizontal className='absolute top-1 right-1' /></DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem className='p-2 cursor-pointer' onClick={() => router.push('/admin/pages/update/1')}>Chỉnh sửa</DropdownMenuItem>
                    <DropdownMenuItem className='p-2 cursor-pointer'>Bật/Tăt hoạt động</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className='relative w-full h-20 dark:bg-slate-300 rounded-sm'>
            </div>
        </Card>
    }
    // const treeDate = buildTreeNode(fakeData)
    function findChildren(id?: React.Key) {
        if (!id) return pageAdminData.filter(item => !item.parentId)
        return pageAdminData.filter(item => item.parentId === id)
    }
    return (
        <div className='w-full text-center p-4'>
            <Tree
                lineWidth={'2px'}
                lineColor={'lightgray'}
                lineBorderRadius={'10px'}
                label={<Label name={'NGS Website'} active={true}></Label>}
                nodePadding='10px'
            >
                {fakeMenu.map(item => {
                    return <TreeNode key={item} label={<Label name={item} active={true}></Label>} />
                })}
            </Tree>
        </div>

    )
}