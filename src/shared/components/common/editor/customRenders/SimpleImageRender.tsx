import {RenderFn} from "editorjs-blocks-react-renderer";

export const SimpleImageRenderer: RenderFn<{
    stretched : boolean ,
    withBackground:boolean ,
    withBorder : boolean,
    caption : string ,
    url : string
}> = ({
          data, className = "" ,
      }) => {

    return (
        <div className='flex flex-col space-y-2 items-center'>
            <img fetchPriority={'low'}  alt={data.caption} className={'object-contain rounded'} src={ data.url } />
            <span className='text-xs text-primary opacity-50'>{data.caption}</span>
        </div>
)
}

