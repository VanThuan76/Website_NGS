import React, { Component, ErrorInfo, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}
const Img500 = '/500.svg';
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section className='pt-45 lg:pt-50 xl:pt-55 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden'>
          <div className='animate_top mx-auto max-w-[518px] text-center'>
            <div className='h-[300px] w-full overflow-hidden'>
              <Image src={Img500} alt='500' className='mb-7.5 relative mx-auto mt-20' width={396} height={156} />
            </div>

            <h2 className='mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl'>Opps!</h2>
            <p className='mb-7.5'>Máy chủ xảy ra lỗi, vui lòng thử lại hoặc liên hệ admin</p>

            <button className=' dark:bg-btndark hover:bg-blackho mt-4 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out'>
              <Link href={'/'} className='inline-flex items-center gap-2.5'>
                Quay trở lại trang chủ
                <svg
                  className='fill-white'
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z'
                    fill=''
                  />
                </svg>
              </Link>
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
