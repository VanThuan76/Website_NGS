import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  layer?: boolean;
}

export function ImageCommon({ src, layer, ...rest }: Props) {
  const { theme } = useTheme();
  const backgroundLayer = theme === 'light' ? 'bg-white' : 'bg-black';

  return (
    <>
      {src ? (
        <div className='relative h-full w-full flex justify-center overflow-hidden bg-primary/10'>
          <Image src={src} style={{ width: `${rest.width}px`, height: `${rest.height}px` }} {...rest} />
          {layer && (
            <div
              style={rest.style}
              className={`${rest.className} ${backgroundLayer} absolute left-0 top-0 h-full w-full opacity-30`}
            ></div>
          )}
        </div>
      ) : (
        <div>
          <Image src='/images/default.png' style={{ width: `${rest.width}px`, height: `${rest.height}px` }} {...rest} />
        </div>
      )}
    </>
  );
}
