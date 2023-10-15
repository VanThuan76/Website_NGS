import React, { SVGProps } from 'react';

export default function BackgroundPeople({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1552' height='748' viewBox='0 0 1552 748' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <g filter='url(#filter0_f_4493_3363)'>
        <path
          d='M1496 56.0624V692H801.52C856.01 538.591 810.21 355.695 690.09 252.09C671.37 235.948 651.28 221.608 630.21 209.143C450.68 102.984 236.895 209.143 203.72 225.646C173.89 240.484 144.75 256.944 116.58 275.058C108.81 280.061 56 308.763 56 318.365V56.0624H1496Z'
          fill='url(#paint0_linear_4493_3363)'
          fill-opacity='0.8'
        />
      </g>
      <path
        d='M1496 56V685H810.808C865.26 533.264 819.491 352.364 699.455 249.889C680.748 233.923 660.672 219.739 639.616 207.411C460.211 102.41 228.232 207.411 204.617 223.733C174.808 238.41 145.688 254.691 117.538 272.607C109.773 277.555 57 305.944 57 315.442V56H1496Z'
        fill='white'
      />
      <defs>
        <filter
          id='filter0_f_4493_3363'
          x='0'
          y='0.0624084'
          width='1552'
          height='747.938'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='28' result='effect1_foregroundBlur_4493_3363' />
        </filter>
        <linearGradient
          id='paint0_linear_4493_3363'
          x1='55.9999'
          y1='-234.788'
          x2='961.27'
          y2='454.094'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#780E00' stop-opacity='0' />
          <stop offset='0.21875' stop-color='#780E00' stop-opacity='0' />
          <stop offset='0.489583' stop-color='#FEB167' />
          <stop offset='0.671875' stop-color='#FC5E03' />
          <stop offset='1' stop-color='white' />
        </linearGradient>
      </defs>
    </svg>
  );
}
