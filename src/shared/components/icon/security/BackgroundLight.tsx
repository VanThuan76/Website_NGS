import React, { SVGProps } from 'react';

export default function BackgroundLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1440' height='924' viewBox='0 0 1440 924' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g clipPath='url(#clip0_4398_3170)'>
        <rect width='1440' height='924' fill='white' />
        <g opacity='0.3' filter='url(#filter0_f_4398_3170)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M630.78 820.771C975.766 680.85 1385.32 774.563 1632.09 1078.51C1724 1191.69 1782.48 1321.07 1809.19 1454.77C1841.5 988.538 1666.71 534.795 1302.14 349.036C702.625 43.61 110.019 474.451 -99.2967 1114.12C-231.539 1518.09 -199.118 1928.97 -168.666 2035.05C-128.611 1824.36 -34.5136 1565.12 97.5454 1338.27C238.524 1096.1 422.781 890.789 630.78 820.771Z'
            fill='#ECBFAA'
          />
        </g>
        <path
          d='M-335.381 362.693C-335.381 362.693 48.8045 779.202 642.77 781.457C1236.74 783.713 1934.16 406.585 2199.95 166.653L2262.23 1403.11L-295.279 2054.61L-335.381 362.693Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_4398_3170'
          x='-335.812'
          y='108.686'
          width='2288.79'
          height='2066.37'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='70' result='effect1_foregroundBlur_4398_3170' />
        </filter>
        <clipPath id='clip0_4398_3170'>
          <rect width='1440' height='924' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
