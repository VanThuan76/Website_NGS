import React, { SVGProps } from 'react';

export default function BackgroundLight({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='310' height='420' viewBox='0 0 310 420' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g clipPath='url(#clip0_4963_37020)'>
        <mask id='path-1-inside-1_4963_37020' fill='white'>
          <path d='M0 0H310V420H0V0Z' />
        </mask>
        <path d='M0 0H310V420H0V0Z' fill='url(#paint0_linear_4963_37020)' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M205.386 416.847C188.671 288.683 87.2101 171.815 -51.6623 135.009C-103.377 121.297 -154.306 120.363 -201.002 130.069C-60.2256 56.5293 113.045 50.2148 235.507 140.346C436.878 288.57 405.753 534.597 241.624 687.702C137.982 784.41 3.21455 829.95 -35.4653 834.722C23.674 793.434 88.5627 728.452 136.598 655.857C187.878 578.359 219.969 492.173 205.386 416.847Z'
          fill='url(#paint1_radial_4963_37020)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M93.2984 474.72C83.3117 353.897 -8.22353 229.809 -139.269 173.477C-188.069 152.493 -236.715 143.414 -281.813 144.824C-143.786 99.762 22.1616 121.903 135.026 224.736C320.612 393.846 279.35 615.58 115.277 730.207C11.6698 802.615 -119.303 822.841 -156.505 820.997C-98.0351 792.487 -32.9605 743.065 16.3577 683.908C69.007 620.756 103.718 546.498 93.2984 474.72Z'
          fill='url(#paint2_radial_4963_37020)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-119.172 606.746C-57.0788 465.11 -92.4193 315.659 -217.588 243.421C-264.196 216.514 -317.933 203.52 -373.792 202.955C-177.783 157.086 10.9625 191.094 85.3761 316.762C207.727 523.423 21.1111 780.428 -249.42 906.285C-420.268 985.788 -592.408 1002.99 -636.639 999.01C-547.815 968.573 -438.084 914.032 -341.582 847.345C-238.561 776.153 -150.589 691.109 -119.172 606.746Z'
          fill='url(#paint3_radial_4963_37020)'
        />
      </g>
      <path d='M309 0V420H311V0H309Z' fill='url(#paint4_linear_4963_37020)' mask='url(#path-1-inside-1_4963_37020)' />
      <defs>
        <linearGradient
          id='paint0_linear_4963_37020'
          x1='44'
          y1='36'
          x2='334.085'
          y2='230.206'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF804B' />
          <stop offset='1' stopColor='#FFCE8C' />
        </linearGradient>
        <radialGradient
          id='paint1_radial_4963_37020'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(222.755 309.339) rotate(92.4083) scale(1352.52 1861.27)'
        >
          <stop stopColor='#FF601C' />
          <stop offset='1' stopColor='#F5D7CD' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial_4963_37020'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(114.931 378.436) rotate(95.4303) scale(1241.89 1801.47)'
        >
          <stop stopColor='#FF763B' />
          <stop offset='1' stopColor='#FFD1C3' />
        </radialGradient>
        <radialGradient
          id='paint3_radial_4963_37020'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(-33.6062 495.328) rotate(-7.44315) scale(711.96 808.521)'
        >
          <stop stopColor='#FF8D5C' />
          <stop offset='1' stopColor='#FF955C' />
        </radialGradient>
        <linearGradient id='paint4_linear_4963_37020' x1='155' y1='0' x2='155' y2='420' gradientUnits='userSpaceOnUse'>
          <stop stopColor='white' stopOpacity='0.1' />
          <stop offset='0.476727' stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0.1' />
        </linearGradient>
        <clipPath id='clip0_4963_37020'>
          <path d='M0 0H310V420H0V0Z' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
