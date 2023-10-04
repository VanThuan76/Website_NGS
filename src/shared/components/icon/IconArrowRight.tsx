import React, { SVGProps } from 'react';

export default function IconArrowRight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <mask
        id='mask0_1408_328'
        className='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1408_328)'>
        <path d='M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z' fill='white' />
      </g>
    </svg>
  );
}
