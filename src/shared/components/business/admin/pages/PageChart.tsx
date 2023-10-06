import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { MoreHorizontal } from 'lucide-react';
import { Tree, TreeNode } from 'react-organizational-chart';

import { IPage } from 'src/shared/schemas/typedef/IPage';

import { Card } from '@/components/common/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/common/ui/dropdown-menu';

type Props = {
  menuPageTree: IPage[];
};

type LabelProps = {
  data: IPage | undefined;
};

const Label: React.FC<LabelProps> = ({ data }) => {
  const router = useRouter();
  if (!data) return <React.Fragment></React.Fragment>;
  return (
    <Card className='relative w-full px-4 py-4'>
      <b>
        <div
          className={classNames('h-3 w-3 rounded-full', { 'bg-red-400': !data.active, 'bg-green-400': data.active })}
        ></div>
        {data.name}
      </b>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className='absolute right-1 top-1' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className='cursor-pointer p-2'
            onClick={() => router.push(`/admin/pages/update/${data.id}`)}
          >
            Chỉnh sửa
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer p-2'>Bật/Tắt hoạt động</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='relative h-20 w-full rounded-sm dark:bg-slate-300'></div>
    </Card>
  );
};

const PageChart: React.FC<Props> = ({ menuPageTree }) => {
  const homePage: IPage | undefined = menuPageTree.find(page => page.id === 1);
  return (
    <div className='w-full p-4 text-center'>
      <Tree
        lineWidth={'2px'}
        lineColor={'lightgray'}
        lineBorderRadius={'10px'}
        label={<Label data={homePage} />}
        nodePadding='10px'
      >
        {menuPageTree &&
          menuPageTree
            .filter(page => page.id !== 1)
            .map(item => {
              return <TreeNode key={item.id} label={<Label data={item} />} />;
            })}
      </Tree>
    </div>
  );
};

export default PageChart;
