import classNames from 'classnames';
import React from 'react';

import { Button } from '@/components/common/ui/button';
import { Card } from '@/components/common/ui/card';
import { FormItem } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';
import { Label } from '@/components/common/ui/label';
import { Textarea } from '@/components/common/ui/textarea';
import { pageAdminEditorData } from '@/mocks/admin/page';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/ui/select';
import { findComponentBySectionCode } from '@/utils/functions/findComponentBySectionCode';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type Props = {};
type Content = {
  title?: string;
  image?: string;
};

export default function PageEditor({}: Props) {
  const [activeSection, setActiveSection] = React.useState(pageAdminEditorData[0]);
  const [content, setContent] = React.useState<Record<string, Content>>();
  return (
    <div className='w-full h-full grid grid-cols-1 gap-4'>
      <Card className='flex flex-col gap-4 p-4 flex-1'>
        <b>Home Page</b>
        {pageAdminEditorData.map(item => (
          <Card
            key={item.id}
            onClick={() => {
              setActiveSection(item);
            }}
            className={classNames(
              'cursor-pointer h-[100px] px-4 bg-teal-50 flex justify-center items-center font-semibold dark:text-black',
              {
                'outline-teal-400 outline outline-2  outline-offset-4': activeSection.id === item.id,
              },
            )}
          >
            {item.name}
          </Card>
        ))}
      </Card>
      <div className='w-full grid grid-cols-3 gap-4'>
        <Card className='col-span-2 flex flex-col gap-4 p-4 flex-1'>
          <b>Section Preview</b>
          <TransformWrapper initialScale={0.5}>
            <TransformComponent>{findComponentBySectionCode(activeSection.code)}</TransformComponent>
          </TransformWrapper>
        </Card>
        <Card className='flex flex-col gap-4 p-4 flex-1'>
          <div className='flex gap-2 items-center'>
            <b>Content</b>
            <Select defaultValue='vn'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Ngôn ngữ' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='vn'>Tiếng Việt</SelectItem>
                  <SelectItem value='en'>Tiếng Anh</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <FormItem>
            <Label>Title:</Label>
            <Input
              placeholder='Nhập title'
              value={content?.[activeSection.code]?.title}
              onChange={e =>
                setContent({
                  [activeSection.code]: {
                    title: e.target.value,
                  },
                })
              }
            />
          </FormItem>

          <FormItem>
            <Label>Description:</Label>
            <Textarea
              rows={8}
              placeholder='Nhập description'
              value={content?.[activeSection.code]?.title}
              onChange={e =>
                setContent({
                  [activeSection.code]: {
                    title: e.target.value,
                  },
                })
              }
            />
          </FormItem>

          <div className='space-x-2 text-right '>
            <Button>Save</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
