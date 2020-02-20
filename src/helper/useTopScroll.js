import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTopScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useTopScroll;
