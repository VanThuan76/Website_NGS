import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  layer?: boolean;
}

export function PreImage({ src, layer, ...rest }: Props) {
  const {theme} = useTheme();
  const backgroundLayer = theme === "light" ? "bg-white" : "bg-black"
  return (
    <div>
      {src ? (
        <div className='relative w-full h-full overflow-hidden'>
          <Image
            src={src}
            style={{ width: `${rest.width}px`, height: `${rest.height}px` }}
            {...rest}
          />
          {layer && <div style={rest.style} className={`${rest.className} bg-black absolute top-0 left-0 w-full h-full opacity-50 blur-lg`}></div>}
        </div>
      ) : (
        <div>
          <Image
            src='/images/default.png'
            style={{ width: `${rest.width}px`, height: `${rest.height}px` }}
            {...rest}
          />
        </div>
      )}
    </div>
  );
}
