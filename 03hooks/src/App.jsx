import { useDebugValue } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  //if you go to the tab 'components' in the 'inspect' menu, you will see this debug text next to each of these hooks.
  useDebugValue(`Query ${queryValue}`, (name) => name + ' mediaQuery');

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const App = () => {
  const huge = useMediaQuery('(min-width: 940px)');
  const big = useMediaQuery('(min-width: 768px) and (max-width: 939px)');
  const medium = useMediaQuery('(min-width: 500px) and (max-width: 767px)');
  const small = useMediaQuery('(max-width: 499px)');

  const background = huge ? 'green' : big ? 'blue' : medium ? 'purple' : small ? 'yellow' : null;

  return <div style={{ background: background }}>oi</div>;
};
