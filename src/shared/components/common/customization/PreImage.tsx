import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  layer?: boolean;
}

export function PreImage({ src, layer, ...rest }: Props) {
  const {theme} = useTheme();
  const backgroundLayer = theme === "light" ? "bg-white" : "bg-black"
  return (
    <div className='relative w-full h-full overflow-hidden'>
      {src ? (
        <>
          <Image
            alt={rest.alt}
            src={src}
            layout="fill"
            objectFit={rest.objectFit || "cover"}
            objectPosition={rest.objectPosition || "left"}
            placeholder="empty"
          />
          {layer && <div style={rest.style} className={`${rest.className} bg-black absolute top-0 left-0 w-full h-full opacity-50 blur-lg`}></div>}
        </>
      ) : (
        <div>
          <Image
            alt='default'
            src='/images/default.png'
            layout="fill"
            objectFit={rest.objectFit || "cover"}
            objectPosition={rest.objectPosition || "left"}
          />
        </div>
      )}
    </div>
  );
}
