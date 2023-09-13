import React, { SVGProps } from 'react';

export default function ThreeDotIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='52' height='5' viewBox='0 0 52 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <circle cx='26' cy='2.5' r='2.5' fill='#444444' />
      <circle cx='49' cy='2.5' r='2.5' fill='#444444' />
      <circle cx='3' cy='2.5' r='2.5' fill='#444444' />
    </svg>
  );
}
