import React, { SVGProps } from 'react';

export default function BackgroundAboutUs({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='507' height='317' viewBox='0 0 507 317' fill='currentColor' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <path d='M0 0H451L507 49.5V317H56L0 268.5V0Z' fill='#D9D9D9' />
    </svg>
  );
}

