import React, { SVGProps } from 'react';

export default function BorderCard({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='311' height='311' viewBox='0 0 311 311' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <line x1='0.5' y1='267' x2='0.49999' y2='44.856' stroke='url(#paint0_linear_4956_26211)' />
      <line x1='45' y1='0.5' x2='267' y2='0.5' stroke='url(#paint1_linear_4956_26211)' />
      <line x1='45' y1='310.5' x2='267' y2='310.5' stroke='url(#paint2_linear_4956_26211)' />
      <line x1='310.5' y1='267' x2='310.5' y2='45' stroke='url(#paint3_linear_4956_26211)' />
      <defs>
        <linearGradient
          id='paint0_linear_4956_26211'
          x1='1.00001'
          y1='44.856'
          x2='1.00002'
          y2='267'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0.18' />
          <stop stopColor='white' />
          <stop offset='0.515564' stopColor='#FC5E03' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_4956_26211'
          x1='267'
          y1='1.00002'
          x2='45'
          y2='1.00002'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0.18' />
          <stop stopColor='white' />
          <stop offset='0.515564' stopColor='#FC5E03' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient id='paint2_linear_4956_26211' x1='267' y1='311' x2='45' y2='311' gradientUnits='userSpaceOnUse'>
          <stop stopColor='white' stopOpacity='0.18' />
          <stop stopColor='white' />
          <stop offset='0.515564' stopColor='#FC5E03' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient id='paint3_linear_4956_26211' x1='311' y1='45' x2='311' y2='267' gradientUnits='userSpaceOnUse'>
          <stop stopColor='white' stopOpacity='0.18' />
          <stop stopColor='white' />
          <stop offset='0.515564' stopColor='#FC5E03' />
          <stop offset='1' stopColor='white' stopOpacity='0.5' />
        </linearGradient>
      </defs>
    </svg>
  );
}
