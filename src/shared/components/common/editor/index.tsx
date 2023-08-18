import React, { memo, useEffect, useRef } from "react";
import EditorJS, { LogLevels, OutputData } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./EditorTools";
import TriggerDialogForm from "@/components/business/admin/media/TriggerDialogForm";
import Media from "src/pages/admin/media";

//props
type Props = {
    data?: OutputData;
    onChange(val: OutputData): void;
    holder: string;
};




const EditorBlock = ({ data, onChange, holder }: Props) => {
    //add a reference to editor
    const ref = useRef<EditorJS>();
    const mediaRef = useRef<HTMLDivElement>(null)
    //initialize editorjs
    useEffect(() => {
        //initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_JS_TOOLS,
                logLevel: "ERROR" as LogLevels,
                data,
                placeholder: "Write Something awesome...",
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },

            });
            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);


    return <>
        <div id={holder} className="border rounded-lg" />
        <TriggerDialogForm
            titleDialog='Trình ảnh'
            className='xl:min-w-[1080px] lg:min-w-[1080px]'
            trigger={
                <div className='dark:bg-white dark:text-black h-9 px-4 py-2 justify-center items-center border-2 border-slate-300 rounded-lg hidden'
                 ref={mediaRef} id="media-trigger">
                    Tải ảnh
                </div>
            }
            form={<Media viewMode='view' />}
        />
    </>;
};

export default memo(EditorBlock);