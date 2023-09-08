import React from 'react'
import Blocks, {ConfigProp, DataProp} from 'editorjs-blocks-react-renderer';
import {SimpleImageRenderer} from "@/components/common/editor/customRenders/SimpleImageRender";
import {HeaderRender} from "@/components/common/editor/customRenders/HeaderRender";
import {CodeRender} from "@/components/common/editor/customRenders/CodeRender";

type Props = {
    data: DataProp
}


const CssConfig: ConfigProp = {
    // code: {
    //     className: "language-js"
    // },
    delimiter: {
        className: "border border-2 w-16 mx-auto"
    },
    embed: {
        className: "border-0"
    },

    simpleImage: {
        className: "w-full max-w-screen-md",
        actionsClassNames: {
            stretched: "w-full h-80 object-cover",
            withBorder: "border border-2",
            withBackground: "p-2",
        }
    },
    image: {
        className: "w-full max-w-screen-md",
        actionsClassNames: {
            stretched: "w-full h-80 object-cover",
            withBorder: "border border-2",
            withBackground: "p-2",
        }
    },
    list: {
        className: "list-inside"
    },
    paragraph: {
        className: "text-base text-opacity-75",
        actionsClassNames: {
            alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
        }
    },
    quote: {
        className: "py-3 px-5 italic font-serif"
    },
    table: {
        className: "table-auto"
    },

}




const renderers  = {
    simpleImage : SimpleImageRenderer,
    header : HeaderRender,
    code : CodeRender
}
export default function EditorPreview({ data }: Props) {
    return (
        <Blocks renderers={renderers} data={data} config={CssConfig}  />
    )
}