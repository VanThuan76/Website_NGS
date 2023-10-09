import React, { useState } from 'react';
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
import { URLS_SYSTEM } from '@/utils/constants';

type Props = {
  menuPageTree: IPage[];
};

type LabelProps = {
  setIdPage2?: any;
  setIdPage3?: any;
  data: IPage | undefined;
};

const Label: React.FC<LabelProps> = ({ setIdPage2, setIdPage3, data }) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  if (!data) return <React.Fragment></React.Fragment>;
  return (
    <Card
      className='relative w-full cursor-pointer px-4 py-4'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <b>
        <div
          className={classNames('h-3 w-3 rounded-full', { 'bg-red-400': !data.active, 'bg-green-400': data.active })}
        ></div>
        {data.parent_id ? '' : data.name}
      </b>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className='absolute right-1 top-1' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className='cursor-pointer p-2'
            onClick={() => router.push(`${URLS_SYSTEM.ADMIN.PAGES_MANAGE.UPDATE}${data.id}`)}
          >
            Chỉnh sửa
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer p-2'>Bật/Tắt hoạt động</DropdownMenuItem>
          {data.childrenPage.length > 0 && (
            <DropdownMenuItem
              onClick={() => {
                const checkChildrenPage3 = data.parent_id;
                if (checkChildrenPage3) {
                  setIdPage3(data.id);
                } else {
                  setIdPage2(data.id);
                }
              }}
              className='cursor-pointer p-2'
            >
              Xem trang con
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='relative h-20 w-full rounded-sm dark:bg-slate-300'></div>
      {hover && data.parent_id && (
        <p className='absolute left-1/2 top-1/2 z-50 w-[200px] -translate-x-1/2 rounded-lg bg-slate-300 p-3'>
          {data.name}
        </p>
      )}
    </Card>
  );
};

const PageChart: React.FC<Props> = ({ menuPageTree }) => {
  const homePage: IPage | undefined = menuPageTree.find(page => page.id === 1);
  const [idPage2, setIdPage2] = useState(NaN);
  const [idPage3, setIdPage3] = useState(NaN);
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
            .map(pageChild1 => {
              return (
                <TreeNode key={pageChild1.id} label={<Label setIdPage2={setIdPage2} data={pageChild1} />}>
                  {pageChild1.childrenPage &&
                    pageChild1.childrenPage
                      .filter(pageChild2 => pageChild2.parent_id === idPage2)
                      .map(pageChild2 => {
                        return (
                          <TreeNode key={pageChild2.id} label={<Label setIdPage3={setIdPage3} data={pageChild2} />}>
                            {pageChild2.childrenPage &&
                              pageChild2.childrenPage
                                .filter(pageChild3 => pageChild3.parent_id === idPage3)
                                .map(pageChild3 => {
                                  return <TreeNode key={pageChild3.id} label={<Label data={pageChild3} />} />;
                                })}
                          </TreeNode>
                        );
                      })}
                </TreeNode>
              );
            })}
      </Tree>
    </div>
  );
};

export default PageChart;
