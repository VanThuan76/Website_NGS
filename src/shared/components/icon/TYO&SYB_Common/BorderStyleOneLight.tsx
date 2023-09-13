import React, { SVGProps } from 'react';

export default function BorderStyleOneLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1440' height='328' viewBox='0 0 1440 328' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g clipPath='url(#clip0_6862_3828)'>
        <rect width='1440' height='328' fill='white' />
        <g filter='url(#filter0_f_6862_3828)'>
          <path
            d='M1946.66 445.368C1946.66 445.368 1562.47 28.8598 968.504 26.6043C374.538 24.3488 -322.89 401.477 -588.671 641.409L-634.366 -219.018L1983.65 -358.002L1946.66 445.368Z'
            fill='url(#paint0_linear_6862_3828)'
            fillOpacity='0.8'
          />
        </g>
        <path
          d='M1944.47 464.922C1944.47 464.922 1560.29 48.4134 966.321 46.1579C372.355 43.9024 -325.074 421.03 -590.855 660.962L-653.141 -575.497L1904.37 -1227L1944.47 464.922Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_6862_3828'
          x='-682.366'
          y='-406.002'
          width='2714.01'
          height='1095.41'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='24' result='effect1_foregroundBlur_6862_3828' />
        </filter>
        <linearGradient
          id='paint0_linear_6862_3828'
          x1='674.583'
          y1='-258.901'
          x2='670.494'
          y2='820.04'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#752804' stop-opacity='0' />
          <stop offset='0.21' stopColor='#752804' stop-opacity='0' />
          <stop offset='0.47' stopColor='#AF400C' />
          <stop offset='0.6' stopColor='#AF400C' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
        <clipPath id='clip0_6862_3828'>
          <rect width='1440' height='328' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
