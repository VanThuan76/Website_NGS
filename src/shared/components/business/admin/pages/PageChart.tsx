import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { MoreHorizontal } from 'lucide-react';
import { Tree, TreeNode } from 'react-organizational-chart';

import { IPage } from 'src/shared/schemas/typedef/IPage';

import { Card } from '@/components/common/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/common/ui/dropdown-menu';

type Props = {
    menuPageTree: IPage[];
};

type LabelProps = {
    data: IPage;
};

const Label: React.FC<LabelProps> = ({ data }) => {
    const router = useRouter();

    return (
        <Card className='w-full py-4 px-4 relative'>
            <b>
                <div className={classNames('w-3 h-3 rounded-full', { 'bg-red-400': !data.active, 'bg-green-400': data.active })}></div>
                {data.name}
            </b>
            <DropdownMenu>
                <DropdownMenuTrigger><MoreHorizontal className='absolute top-1 right-1' /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='p-2 cursor-pointer' onClick={() => router.push(`/admin/pages/update/${data.id}`)}>Chỉnh sửa</DropdownMenuItem>
                    <DropdownMenuItem className='p-2 cursor-pointer'>Bật/Tắt hoạt động</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className='relative w-full h-20 dark:bg-slate-300 rounded-sm'>
            </div>
        </Card>
    );
};

const PageChart: React.FC<Props> = ({ menuPageTree }) => {
    return (
        <div className='w-full text-center p-4'>
            <Tree
                lineWidth={'2px'}
                lineColor={'lightgray'}
                lineBorderRadius={'10px'}
                label={<Label data={menuPageTree[0]} />}
                nodePadding='10px'
            >
                {menuPageTree.slice(1, menuPageTree.length).map(item => {
                    return <TreeNode key={item.id} label={<Label data={item} />} />;
                })}
            </Tree>
        </div>
    );
};

export default PageChart;
