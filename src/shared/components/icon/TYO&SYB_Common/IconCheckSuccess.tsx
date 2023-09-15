import React, { SVGProps } from 'react';

export default function IconCheckSuccess({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z'
        fill='#4BAE4F'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.8027 7.95464C18.0934 8.24526 18.0934 8.72339 17.8027 9.01401L10.7715 16.0453C10.6262 16.1906 10.434 16.2656 10.2418 16.2656C10.0496 16.2656 9.85742 16.1906 9.71211 16.0453L6.19648 12.5296C5.90586 12.239 5.90586 11.7609 6.19648 11.4703C6.48711 11.1796 6.96523 11.1796 7.25586 11.4703L10.2418 14.4562L16.7434 7.95464C17.034 7.65933 17.5121 7.65933 17.8027 7.95464Z'
        fill='white'
      />
    </svg>
  );
}
