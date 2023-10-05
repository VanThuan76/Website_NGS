import Head from 'next/head';
import React from 'react';
import LayoutWebsite from '@/components/layout/LayoutWebsite';
import ImageUpdateSoon from '@/components/icon/ImageUpdateSoon';
const UpdateSoon = () => {
  return (
    <React.Fragment>
      <Head>
        <title>NGS</title>
        <meta name='description' content='NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <div className='mx-auto flex h-screen w-full flex-col items-center justify-center gap-3'>
        <h1 className='text-xl font-semibold md:text-3xl'>
          Đây là những dịch vụ của tương lai mà NGS sắp mang tới bạn.
        </h1>
        <h1 className='text-xl font-semibold md:text-3xl'>Hãy cùng chờ đón nhé</h1>
        <ImageUpdateSoon />
      </div>
    </React.Fragment>
  );
};

UpdateSoon.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default UpdateSoon;
