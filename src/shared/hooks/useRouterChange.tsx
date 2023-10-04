import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../stores/appSlice';

export default function useNprogress() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteStart = () => {
      dispatch(setLoading(true));
    };

    const handleRouteDone = () => {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    };
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);
    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router, dispatch]);
}
