import {RenderFn} from "editorjs-blocks-react-renderer";
import useHightlightCode from "@/hooks/useHightlightCode";
import {Button} from "@/components/common/ui/button";
import {Copy} from "lucide-react";

export const CodeRender: RenderFn<{
    code: string
}> = ({
          data, className = "",
      }) => {
    useHightlightCode()
    return (
        <pre className='relative group rounded-lg outline outline-offset-2 outline-1 shadow-2xl'>
            <Button variant={'outline'} size={'sm'} className='absolute right-4 top-4 hidden group-hover:block'
            onClick={()=>{
                //TODO : copy to clipboard
            }}
            ><Copy size={12}/></Button>
            <code className={'rounded-lg shadow '}>{data.code}</code>
        </pre>
    )
}

