import { useState, useEffect } from 'react';

type WindowDimensions = {
  width: number | null;
  height: number | null;
};

export function useWindowDimensions(): WindowDimensions {
  const [deminsions, setDimensions] = useState<WindowDimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deminsions;
}
