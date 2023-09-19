import React, { SVGProps } from 'react';

export default function SecureMenuIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='80'
      height='80'
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      <rect width='80' height='80' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_5047_47726' transform='scale(0.00699301)' />
        </pattern>
        <image
          id='image0_5047_47726'
          width='143'
          height='143'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
}
