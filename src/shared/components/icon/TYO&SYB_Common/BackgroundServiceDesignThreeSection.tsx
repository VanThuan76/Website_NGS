import React, { SVGProps } from 'react';

export default function BackgroundServiceDesignThreeSection({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='636' height='850' viewBox='0 0 636 850' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <rect x='-580' y='-203' width='1216' height='1122' fill='url(#paint0_radial_7092_8559)' fillOpacity='0.35' />
      <defs>
        <radialGradient
          id='paint0_radial_7092_8559'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(28 358) rotate(90) scale(561 608)'
        >
          <stop stop-color='#FFD8BF' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
}
