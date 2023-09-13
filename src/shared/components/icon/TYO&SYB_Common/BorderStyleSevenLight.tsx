import React, { SVGProps } from 'react';

export default function BorderStyleSevenLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='392' height='290' viewBox='0 0 392 290' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <rect x='0.5' y='0.5' width='391' height='289' rx='7.5' fill='white' stroke='url(#paint0_linear_6869_6458)' />
      <defs>
        <linearGradient
          id='paint0_linear_6869_6458'
          x1='196'
          y1='0'
          x2='196'
          y2='472.12'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FC5E03' />
          <stop offset='1' stopColor='#FC5E03' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
