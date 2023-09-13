import React, { SVGProps } from 'react';

export default function BorderStyleTwoLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='202' height='202' viewBox='0 0 202 202' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M1 101C1 45.7715 45.7715 1 101 1V1C156.228 1 201 45.7715 201 101V201H101C45.7715 201 1 156.228 1 101V101Z'
        stroke='url(#paint0_linear_6863_1071)'
        strokeWidth='1.5'
      />
      <defs>
        <linearGradient
          id='paint0_linear_6863_1071'
          x1='0.999997'
          y1='18.5'
          x2='300.66'
          y2='249.388'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F35802' />
          <stop offset='1' stopColor='#FFEADE' />
        </linearGradient>
      </defs>
    </svg>
  );
}
