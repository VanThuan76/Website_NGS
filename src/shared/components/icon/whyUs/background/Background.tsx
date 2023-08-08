import React, { SVGProps } from 'react';

export default function Background({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1440' height='800' viewBox='0 0 1440 800' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g clipPath='url(#clip0_3079_8426)'>
        <rect width='1440' height='800' fill='#141523' />
        <g opacity='0.3' filter='url(#filter0_f_3079_8426)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M509.78 1088.77C854.766 948.85 1264.32 1042.56 1511.09 1346.51C1603 1459.69 1661.48 1589.07 1688.19 1722.77C1720.5 1256.54 1545.71 802.795 1181.14 617.036C581.625 311.61 -10.9805 742.451 -220.297 1382.12C-352.539 1786.09 -320.118 2196.97 -289.666 2303.05C-249.611 2092.36 -155.514 1833.12 -23.4546 1606.27C117.524 1364.1 301.781 1158.79 509.78 1088.77Z'
            fill='#8550F8'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_3079_8426'
          x='-432.812'
          y='400.686'
          width='2240.79'
          height='2018.37'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='58' result='effect1_foregroundBlur_3079_8426' />
        </filter>
        <clipPath id='clip0_3079_8426'>
          <rect width='1440' height='919' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
