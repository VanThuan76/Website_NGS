import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
  url: string;
};
const UseLinkRouter = ({ children, url }: Props) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className='cursor-pointer'>
      {children}
    </div>
  );
};

export default UseLinkRouter;
