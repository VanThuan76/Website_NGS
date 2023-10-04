import useTrans from 'src/shared/hooks/useTrans';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const Img500 = '/500.svg';

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const { trans } = useTrans();
  return (
    <section className='lg:pt-50 xl:pt-55 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden pt-48'>
      <div className='animate_top mx-auto max-w-[518px] text-center'>
        <Image src={Img500} alt='500' className='mb-7.5 mx-auto' width={396} height={156} />

        <h2 className='mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl'>Something Error</h2>
        <p className='mb-7.5'>The page you were looking for appears to have been moved, deleted or does not exist.</p>

        <button className=' dark:bg-btndark hover:bg-blackho mt-4 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out'>
          <Link href={'/'} className='inline-flex items-center gap-2.5'>
            Return to Home
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
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
