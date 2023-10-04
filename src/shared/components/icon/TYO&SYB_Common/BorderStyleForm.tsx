import React, { SVGProps } from 'react';

export default function BorderStyleForm({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='447' height='535' viewBox='0 0 447 535' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        opacity='0.7'
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M84.9753 759.493C118.173 486.332 -19.7082 222.168 -271.656 120.274C-365.476 82.3166 -464.322 71.439 -560.377 83.7371C-248.067 -46.7 93.1038 -29.7086 285.671 181.753C602.31 529.506 415.301 1042.81 16.5995 1336.93C-235.181 1522.71 -521.398 1595.17 -599.285 1598.46C-462.75 1521.75 -302.837 1396.08 -171.885 1251.42C-32.0881 1096.98 74.7464 920.868 84.9753 759.493Z'
        fill='url(#paint0_radial_7092_8672)'
        stroke='url(#paint1_linear_7092_8672)'
      />
      <defs>
        <radialGradient
          id='paint0_radial_7092_8672'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(-512.692 648.078) rotate(-16.8145) scale(1098.69 1399.62)'
        >
          <stop stop-color='#ECB096' />
          <stop offset='1' stop-color='#F5D7CD' stop-opacity='0' />
        </radialGradient>
        <linearGradient
          id='paint1_linear_7092_8672'
          x1='-675.063'
          y1='829.698'
          x2='428.661'
          y2='278.056'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#E9AD93' />
          <stop offset='1' stop-color='#E9AD93' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
