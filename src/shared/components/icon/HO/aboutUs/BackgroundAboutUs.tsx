import React, { SVGProps } from 'react';

export default function BackgroundAboutUs({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1010' height='849' viewBox='0 0 1010 849' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <g opacity='0.4' filter='url(#filter0_f_3933_8472)'>
        <ellipse
          cx='418.78'
          cy='315.966'
          rx='155.721'
          ry='232.649'
          transform='rotate(118.547 418.78 315.966)'
          fill='#FC5E03'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3933_8472'
          x='-171.755'
          y='-233.295'
          width='1181.07'
          height='1098.52'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='186.492' result='effect1_foregroundBlur_3933_8472' />
        </filter>
      </defs>
    </svg>
  );
}
