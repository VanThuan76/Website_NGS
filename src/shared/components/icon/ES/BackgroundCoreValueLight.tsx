import React, { SVGProps } from 'react';

export default function BackgroundCoreValueLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1440' height='1105' viewBox='0 0 1440 1105' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <g clip-path='url(#clip0_4814_871)'>
        <g opacity='0.3' filter='url(#filter0_f_4814_871)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M424.78 792.771C769.766 652.85 1179.32 746.563 1426.09 1050.51C1518 1163.69 1576.48 1293.07 1603.19 1426.77C1635.5 960.538 1460.71 506.795 1096.14 321.036C496.625 15.61 -95.9805 446.451 -305.297 1086.12C-437.539 1490.09 -405.118 1900.97 -374.666 2007.05C-334.611 1796.36 -240.514 1537.12 -108.455 1310.27C32.5243 1068.1 216.781 862.789 424.78 792.771Z'
            fill='url(#paint0_linear_4814_871)'
            fill-opacity='0.3'
          />
        </g>
        <path
          d='M-541.381 334.694C-541.381 334.694 -157.195 751.202 436.77 753.458C1030.74 755.713 1728.16 378.586 1993.95 138.654L2056.23 1375.11L-501.279 2026.61L-541.381 334.694Z'
          fill='white'
        />
        <rect x='1336' y='454' width='4' height='126' fill='#E8E8E8' />
        <rect x='1336' y='454' width='4' height='42' fill='#FC5E03' />
      </g>
      <defs>
        <filter
          id='filter0_f_4814_871'
          x='-541.812'
          y='80.6855'
          width='2288.79'
          height='2066.37'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='70' result='effect1_foregroundBlur_4814_871' />
        </filter>
        <linearGradient
          id='paint0_linear_4814_871'
          x1='-349.823'
          y1='749.688'
          x2='1403.23'
          y2='1770.27'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.260417' stop-color='#F88550' />
          <stop offset='1' stop-color='white' />
        </linearGradient>
        <clipPath id='clip0_4814_871'>
          <rect width='1440' height='1105' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
