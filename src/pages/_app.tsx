import '../styles/globals.css';
import '../styles/business-color.css';
import '../styles/customStyle.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { Bai_Jamjuree } from 'next/font/google';
import { Provider } from 'react-redux';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from 'src/shared/stores';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ErrorBoundary from '@/components/layout/layoutAdmin/ErrorBoudary';
import { useAppSelector } from '@/hooks/useRedux';
import useRouterChange from '@/hooks/useRouterChange';
import { PreImage } from '@/components/common/customization/PreImage';
import { motion } from 'framer-motion';

const interText = Bai_Jamjuree({
  subsets: ['vietnamese'],
  style: 'normal',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

const ConfigLayout = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => React.ReactNode;
}) => {
  const isRouteLoading = useAppSelector(state => state.appSlice.isRouteLoading);
  useRouterChange();
  return (
    <main className={interText.className}>
      {isRouteLoading ? (
        <div
          style={{ background: 'linear-gradient(45deg, #9565a6, #27a0bd, #f58529)' }}
          className='absolute z-[9999] flex h-[100vh] w-screen flex-col items-center justify-center gap-2'
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className='flex w-full flex-col items-center justify-center'
          >
            <div className='relative h-[150px] w-[150px] transform overflow-hidden'>
              <PreImage src='/LogoRoute.png' alt='LogoRoute' objectPosition='center' objectFit='contain' />
            </div>
            <span
              style={{
                width: '120px',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#fff',
                fontStyle: 'italic',
                textShadow: '1px 1px 2px #58585A',
              }}
            >
              NGS
            </span>
          </motion.div>
        </div>
      ) : (
        <NextThemesProvider attribute='class' defaultTheme='light' enableSystem>
          {getLayout(children)}
        </NextThemesProvider>
      )}
    </main>
  );
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <LayoutWebsite>{page}</LayoutWebsite>);
  return (
    <ErrorBoundary>
      <main className={interText.className}>
        <Head>
          <title>Website NGS</title>
          <meta name='description' content='Website NGS' />
          <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
          <meta property='og:type' content='website' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='icon' href='/logo.svg' />
          <link rel='apple-touch-icon' href='/logo.svg' />
        </Head>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ConfigLayout getLayout={getLayout}>
              <Component {...pageProps} />
            </ConfigLayout>
          </QueryClientProvider>
        </Provider>
      </main>
    </ErrorBoundary>
  );
}
