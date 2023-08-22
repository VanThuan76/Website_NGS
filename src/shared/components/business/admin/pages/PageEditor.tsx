import classNames from 'classnames';
import React, { useState } from 'react';

import { Button } from '@/components/common/ui/button';
import { Card } from '@/components/common/ui/card';
import { Form, FormItem } from '@/components/common/ui/form';
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
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useAppSelector } from '@/hooks/useRedux';
import { useDispatch } from 'react-redux';
import TriggerDialogForm from '../media/TriggerDialogForm';
import Media from 'src/pages/admin/media';
import { setActiveLang, setData } from 'src/shared/stores/pageEditorSlice';
import { ChevronDown, PlusCircleIcon, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/common/ui/collapsible';
import Banner from '../../website/home/banner';
import NextGenerationSolution from '../../website/home/nextGenerationSolution';

type Props = {};

export default function PageEditor({ }: Props) {
  const { activeSectionCode, data, activeLang, currentSection } = useAppSelector(state => state.pageEditorSlice)
  const dispatch = useDispatch()
  const RenderComponent = () => {
    switch (activeSectionCode) {
      case 'HO_1':
        return <Banner data={data[activeLang][activeSectionCode]} />;
      case 'HO_2':
        return <NextGenerationSolution data={data[activeLang][activeSectionCode]} />;
      default:
        return <div>Section not found</div>
        break;
    }
  }
  return (
    <div className='w-full h-full grid grid-cols-1 gap-4'>
      <div className='w-full grid grid-cols-3 gap-4'>
        {/* Preview  */}
        <Card className='col-span-2 flex flex-col gap-4 p-4 flex-1 cursor-move'>

          {activeSectionCode &&
            <TransformWrapper initialScale={1} minScale={0.5} maxScale={2} smooth wheel={{ disabled: true }} centerOnInit>
              {
                ({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>

                    <div className='flex justify-between'>
                      <b>Section Preview</b>
                      <div className="space-x-2">

                        <Button variant={'outline'} onClick={() => zoomIn()}><ZoomIn size={12} /></Button>
                        <Button variant={'outline'} onClick={() => zoomOut()}><ZoomOut size={12} /></Button>
                        <Button variant={'outline'} onClick={() => resetTransform()}><RotateCcw size={12} /></Button>
                      </div>
                    </div>
                    <TransformComponent>{RenderComponent()}</TransformComponent>
                  </React.Fragment>
                )
              }

            </TransformWrapper>
          }

        </Card>

        {/* FORM value  */}
        <Card className='flex flex-col gap-4 p-4 flex-1'>
          <div className='flex gap-2 items-center'>
            <b>Content</b>
            <Select value={activeLang} onValueChange={e => dispatch(setActiveLang(e))}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Ngôn ngữ' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='vi'>Tiếng Việt</SelectItem>
                  <SelectItem value='en' disabled>Tiếng Anh</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {
            activeSectionCode && data[activeLang][activeSectionCode].map((section, index) =>
              <Collapsible key={index} className='w-full'>
                <CollapsibleTrigger className='border bg-primary-foreground p-2 rounded-sm w-full flex gap-2 items-center group'>
                  Slide {index + 1} <ChevronDown size={16} className='text-foreground/50 w-3.5 h-3.5 transition-all group-data-[state=open]:rotate-90' />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className='border p-2' >
                    <FormItem>
                      <Label>Title:</Label>
                      <Input
                        placeholder='Nhập title'
                        value={section.title}
                        onChange={e => {
                          dispatch(setData({ index: index, data: { ...section, title: e.target.value } }))
                        }
                        }
                      />
                    </FormItem>
                    <FormItem>
                      <Label>Description:</Label>
                      <Textarea
                        value={section.description}
                        rows={8}
                        placeholder='Nhập description'
                        onChange={e => { }

                        }
                      />
                    </FormItem>
                    <FormItem>
                      <Label>Link:</Label>
                      <Input
                        value={section.link}
                        placeholder='Nhập đường dẫn'
                        onChange={e => { }

                        }
                      />
                    </FormItem>
                    <FormItem>
                      <Label>Image: </Label>
                      <TriggerDialogForm
                        titleDialog='Trình ảnh'
                        trigger={
                          <div className='dark:bg-white dark:text-black h-9 px-4 py-2 flex justify-center items-center border-2 border-slate-300 rounded-lg'>
                            Tải ảnh
                          </div>
                        }
                        form={<Media viewMode='view' />}
                      />
                    </FormItem>
                  </div>
                </CollapsibleContent>
              </Collapsible>)
          }
          <div className='space-x-2 text-right '>
            <Button>Save</Button>
          </div>

        </Card>
      </div>
    </div>
  );
}
