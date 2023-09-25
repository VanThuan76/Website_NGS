import React, { SVGProps } from 'react';

export default function QuoteIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='36' height='32' viewBox='0 0 36 32' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <path
        d='M36 0V6.58156C31.4815 8.32151 29.2222 11.6879 29.2222 16.6808H36V32H22.1111V16.6808C22.1111 12.5957 23.4074 9.11584 26 6.24114C28.5926 3.36643 31.9259 1.28605 36 0ZM13.8889 0V6.58156C9.37037 8.32151 7.11111 11.6879 7.11111 16.6808H13.8889V32H0V16.6808C0 12.5957 1.2963 9.11584 3.88889 6.24114C6.48148 3.36643 9.81481 1.28605 13.8889 0Z'
        fill='#FC5E03'
      />
    </svg>
  );
}
