import React, { SVGProps } from 'react';

export default function IconMail({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M4 18L9 12M20 18L15 12M3 8L10.225 12.817C10.867 13.244 11.187 13.458 11.534 13.541C11.84 13.615 12.16 13.615 12.466 13.541C12.813 13.458 13.134 13.244 13.775 12.817L21 8M6.2 19H17.8C18.92 19 19.48 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.48 21 16.92 21 15.8V8.2C21 7.08 21 6.52 20.782 6.092C20.5903 5.71569 20.2843 5.40974 19.908 5.218C19.48 5 18.92 5 17.8 5H6.2C5.08 5 4.52 5 4.092 5.218C3.71569 5.40974 3.40974 5.71569 3.218 6.092C3 6.52 3 7.08 3 8.2V15.8C3 16.92 3 17.48 3.218 17.908C3.40974 18.2843 3.71569 18.5903 4.092 18.782C4.52 19 5.08 19 6.2 19Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
