import {RenderFn} from "editorjs-blocks-react-renderer";

/**
 *
 * @param data : define kiểu dữ liệu trong RenderFn<T>
 *
 * @constructor
 */
export const HeaderRender: RenderFn<{
    text:string,
    level : 1|2|3
}> = ({
          data ,
      }) => {
    const classNameString = ()=>{
        switch (data.level) {
            case 1: return 'font-bold text-2xl'
            case 2 : return 'font-semibold text-xl'
            case 3 : return 'font-medium text-base'
        }
    }
    return (
        <header className={classNameString()} id={data.text}>{data.text}</header>
    )
}
