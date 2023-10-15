import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

type Props = {
  amountComponent: number;
  inView: any;
};
const useInviewScroll = ({ amountComponent, inView }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollPositionRef = useRef(0);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > scrollPositionRef.current) {
      const calcDown = currentIndex + 1 < amountComponent ? currentIndex + 1 : currentIndex;
      setCurrentIndex(calcDown);
    } else if (currentScrollPos < scrollPositionRef.current) {
      const calcUp = currentIndex - 1 >= 0 ? currentIndex - 1 : currentIndex;
      setCurrentIndex(calcUp);
    }
    scrollPositionRef.current = currentScrollPos;
  };

  const debouncedHandleScroll = debounce(handleScroll, 50);
  const currentScrollPos = window.scrollY;
  const scrollAmount = 100;

  useEffect(() => {
    if (inView) {
      window.addEventListener('scroll', debouncedHandleScroll);
      if (currentScrollPos > scrollPositionRef.current) {
        window.scrollTo(0, currentScrollPos + scrollAmount);
      } else {
      }
    } else {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.scrollTo(0, currentScrollPos);
    }
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll, currentScrollPos, inView]);
  return currentIndex;
};

export default useInviewScroll;
