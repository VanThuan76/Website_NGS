import React, { SVGProps } from 'react';

export default function EditIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path d='M3 21H12H21' fill='#121619' />
      <path d='M3 21H12H21' stroke='#21272A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M12.2237 5.82843L17.1735 10.7781M12.2237 5.82843L15.0522 3L20.0019 7.94975L17.1735 10.7781L12.2237 5.82843ZM12.2237 5.82843L6.61711 11.435C6.42958 11.6225 6.32422 11.8769 6.32422 12.1421V16.6776H10.8598C11.125 16.6776 11.3793 16.5723 11.5669 16.3847L17.1735 10.7781L12.2237 5.82843Z'
        stroke='#21272A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
