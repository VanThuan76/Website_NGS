import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDown, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import Media from 'src/pages/admin/media';
import { Button } from '@/components/common/ui/button';
import { Card } from '@/components/common/ui/card';
import { FormItem } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';
import { Label } from '@/components/common/ui/label';
import { Textarea } from '@/components/common/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/ui/select';
import { useAppSelector } from '@/hooks/useRedux';
import { setActiveLang, setData, setPageAdminEditor } from 'src/shared/stores/pageEditorSlice';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/common/ui/collapsible';
import { useGetDetailComponentsBySectionCode } from 'src/shared/schemas/models/IComponents';

import TriggerDialogForm from '../media/TriggerDialogForm';
import HomeBanner from '../../website/HO/HO_banner';
import HomeSolution from '../../website/HO/HO_solution';
import HomeWhyUs from '../../website/HO/HO_whyUs';
import HomeEvent from '../../website/HO/HO_event';
import HomeNews from '../../website/HO/HO_news';
import HomePartner from '../../website/HO/HO_partner';
import HomeSecurity from '../../website/HO/HO_security';
import HomeTestimonial from '../../website/HO/HO_testimonial';

type Props = {};

export default function PageEditor({}: Props) {
  const { activeSectionCode, activeLang, currentSection } = useAppSelector(state => state.pageEditorSlice);
  const dispatch = useDispatch();
  const { data, refetch } = useGetDetailComponentsBySectionCode({
    code: activeSectionCode as React.Key,
    language: activeLang,
    options: { enabled: activeSectionCode !== '' },
  });
  // useEffect(() => {
  //   refetch();
  // }, [activeSectionCode !== '']);
  if(!data) return <></>
  const RenderComponent = () => {
    switch (activeSectionCode) {
      case 'HO_banner':
        return <HomeBanner data={data} />;
      case 'HO_solution':
        return <HomeSolution className='!m-0 !p-0' data={data} />;
      case 'HO_security':
        return <HomeSecurity className='!m-0 !p-0' data={data} />;
      case 'HO_whyUs':
        return <HomeWhyUs className='!m-0 !p-0' data={data} />;
      case 'HO_event':
        return <HomeEvent className='!m-0 !p-0' data={data} />;
      case 'HO_news':
        return <HomeNews className='!m-0 !p-0' data={data} />;
      case 'HO_partner':
        return <HomePartner className='!m-0 !p-0' data={data} />;
      case 'HO_testimonial':
        return <HomeTestimonial className='!m-0 !p-0' data={data} />;
      default:
        return <div>Section not found</div>;
        break;
    }
  };
  return (
    <div className='w-full h-full grid grid-cols-1 gap-4'>
      <div className='w-full grid grid-cols-4 gap-4'>
        {/* Preview  */}
        <Card className='relative col-span-3 flex flex-col gap-4 p-4 flex-1 cursor-move overflow-hidden overflow-x-scroll'>
          {activeSectionCode && data && (
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={2}
              smooth
              wheel={{ disabled: true }}
              centerOnInit
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <div className='flex justify-between' {...rest}>
                    <b>Section Preview</b>
                    <div className='space-x-2'>
                      <Button variant={'outline'} onClick={() => zoomIn()}>
                        <ZoomIn size={12} />
                      </Button>
                      <Button variant={'outline'} onClick={() => zoomOut()}>
                        <ZoomOut size={12} />
                      </Button>
                      <Button variant={'outline'} onClick={() => resetTransform()}>
                        <RotateCcw size={12} />
                      </Button>
                    </div>
                  </div>
                  <TransformComponent>{RenderComponent()}</TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          )}
        </Card>

        {/* FORM value  */}
        <Card className='flex flex-col gap-4 p-4 flex-1'>
          <div className='flex gap-2 items-center'>
            <b>Nội dung</b>
            <Select value={activeLang} onValueChange={e => dispatch(setActiveLang(e))}>
              <SelectTrigger className='w-[100px]'>
                <SelectValue placeholder='Ngôn ngữ' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='vi'>Tiếng Việt</SelectItem>
                  <SelectItem value='en'>Tiếng Anh</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <FormItem>
            <Label>Mô tả:</Label>
            <Input
              placeholder='Nhập mô tả'
              value={currentSection?.name}
              onChange={e => {
                dispatch(
                  setPageAdminEditor({
                    index: Number(currentSection?.id),
                    pageAdminEditorData: { ...currentSection, name: e.target.value },
                  }),
                );
              }}
            />
          </FormItem>
          <FormItem>
            <Label>Nội dung</Label>
            <Input
              placeholder='Nhập nội dung'
              value={currentSection?.description}
              onChange={e => {
                dispatch(
                  setPageAdminEditor({
                    index: Number(currentSection?.id),
                    pageAdminEditorData: { ...currentSection, description: e.target.value },
                  }),
                );
              }}
            />
          </FormItem>
          {activeSectionCode &&
            data &&
            data.components &&
            data.components.map((component, index) => (
              <Collapsible key={index} className='w-full'>
                <CollapsibleTrigger className='border bg-primary-foreground p-2 rounded-sm w-full flex gap-2 items-center group'>
                  Component {index + 1}{' '}
                  <ChevronDown
                    size={16}
                    className='text-foreground/50 w-3.5 h-3.5 transition-all group-data-[state=open]:rotate-90'
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className='border p-2'>
                    {component.title !== null && component.title !== undefined && component.title !== '' && (
                      <FormItem>
                        <Label>Tiêu đề:</Label>
                        <Input
                          placeholder='Nhập tièu đề'
                          value={component.title}
                          onChange={e => {
                            dispatch(setData({ index: index, data: { ...component, title: e.target.value } }));
                          }}
                        />
                      </FormItem>
                    )}
                    {component.description !== null &&
                      component.description !== undefined &&
                      component.description !== '' && (
                        <FormItem>
                          <Label>Mô tả:</Label>
                          <Textarea
                            value={component.description}
                            rows={8}
                            placeholder='Nhập mô tả'
                            onChange={e => {
                              dispatch(setData({ index: index, data: { ...component, description: e.target.value } }));
                            }}
                          />
                        </FormItem>
                      )}
                    {component.image !== null && component.image !== undefined && component.image !== '' && (
                      <FormItem>
                        <Label>Ảnh: </Label>
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
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          <div className='space-x-2 text-right '>
            <Button>Lưu</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
