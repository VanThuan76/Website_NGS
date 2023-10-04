import { useEffect, useState } from 'react';

const useBreakPoint = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(null);

  const breakpoints = {
    sm: 375,
    md: 745,
    lg: 1024,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      const breakpoint = Object.keys(breakpoints)
        .reverse()
        .find(key => window.innerWidth >= breakpoints[key as keyof typeof breakpoints]);

      setCurrentBreakpoint(breakpoint || 'sm');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentBreakpoint;
};

export default useBreakPoint;
