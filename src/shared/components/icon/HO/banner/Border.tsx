import React, { SVGProps } from 'react';

export default function Border({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1440' height='878' viewBox='0 0 1440 878' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g clipPath='url(#clip0_3110_8615)'>
        <mask id='mask0_3110_8615' maskUnits='userSpaceOnUse' x='-471' y='-37' width='1759' height='1203'>
          <path
            d='M-150.667 692.517C-350.893 814.582 -216.095 1085.35 -133.231 1165.38C-321.892 1056.15 -601.653 918.021 -401.166 521.778C-195.644 115.585 1022.57 -39.6116 1287.07 -36.8607L792.173 1105.16L652.26 833.069C520.929 550.462 159.203 503.61 -150.667 692.517Z'
            fill='url(#paint0_linear_3110_8615)'
          />
          <path
            d='M-150.667 692.517C-350.893 814.582 -216.095 1085.35 -133.231 1165.38C-321.892 1056.15 -601.653 918.021 -401.166 521.778C-195.644 115.585 1022.57 -39.6116 1287.07 -36.8607L792.173 1105.16L652.26 833.069C520.929 550.462 159.203 503.61 -150.667 692.517Z'
            fill='url(#paint1_radial_3110_8615)'
          />
        </mask>
        <g mask='url(#mask0_3110_8615)'>
          <path
            d='M1314.9 102.92L1593.71 637.52C1262.24 532.58 894.874 571.727 577.066 659.528C289.862 738.874 43.1273 857.953 -100.077 946.333C-137.327 841.971 -207.446 630.246 -189.918 618.24C68.2798 159.134 920.877 83.3994 1314.9 102.92Z'
            fill='url(#paint2_radial_3110_8615)'
          />
        </g>
        <g filter='url(#filter0_f_3110_8615)'>
          <path
            d='M1937.48 620.919C1937.48 620.919 1553.29 204.411 959.324 202.155C365.358 199.9 -332.07 577.027 -597.851 816.96L-643.546 -43.4673L1974.47 -182.451L1937.48 620.919Z'
            fill='url(#paint3_linear_3110_8615)'
            fillOpacity='0.8'
          />
        </g>
        <path
          d='M1948.47 618.919C1948.47 618.919 1564.29 202.41 970.32 200.155C376.354 197.899 -321.075 575.027 -586.856 814.959L-649.142 -421.5L1908.37 -1073L1948.47 618.919Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3110_8615'
          x='-691.546'
          y='-230.451'
          width='2714.01'
          height='1095.41'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='24' result='effect1_foregroundBlur_3110_8615' />
        </filter>
        <linearGradient
          id='paint0_linear_3110_8615'
          x1='436.141'
          y1='-160.97'
          x2='-126.632'
          y2='1100.94'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#64C1EC' />
          <stop offset='1' stopColor='#6FD1FF' stopOpacity='0' />
        </linearGradient>
        <radialGradient
          id='paint1_radial_3110_8615'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(-708.555 854.032) rotate(-58.8946) scale(961.694 358.004)'
        >
          <stop stopColor='#3397F0' />
          <stop offset='1' stopColor='#1A65A7' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial_3110_8615'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(398.912 194.546) rotate(-11.6418) scale(948.294 282.367)'
        >
          <stop stopColor='#39A2FF' />
          <stop offset='1' stopColor='#1A65A7' stopOpacity='0' />
        </radialGradient>
        <linearGradient
          id='paint3_linear_3110_8615'
          x1='665.403'
          y1='-83.3501'
          x2='661.314'
          y2='995.591'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#041B75' stopOpacity='0' />
          <stop offset='0.21' stopColor='#5640A1' />
          <stop offset='0.47' stopColor='#4A0CAF' />
          <stop offset='0.6' stopColor='#4A0CAF' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
        <clipPath id='clip0_3110_8615'>
          <rect width='1440' height='878' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
