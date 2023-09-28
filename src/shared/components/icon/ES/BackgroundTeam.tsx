import React, { SVGProps } from 'react';

export default function BackgroundTeam({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='292' height='365' viewBox='0 0 292 365' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M0 12C0 5.37259 5.37258 0 12 0H280C286.627 0 292 5.37258 292 12V353C292 359.627 286.627 365 280 365H12C5.37259 365 0 359.627 0 353V12Z'
        fill='url(#paint0_linear_5848_43394)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_5848_43394'
          x1='-218'
          y1='365'
          x2='-217.996'
          y2='211.722'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F88550' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
