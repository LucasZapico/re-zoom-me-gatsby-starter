import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Box } from '@chakra-ui/react';

import { useScroll } from '../hooks';

export const AnimatedFadeUpBox = ({
  showOffset = 100,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const action = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'scale3d(1, 1)' : 'scale3d(0.3,0.3)',
    config: config.slow,
  });

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const scrollPositionInit = window.scrollY + window.innerHeight;
    const topPosition = (item) => item.getBoundingClientRect().top;
    const itemPostion = topPosition(ourRef.current);

    if (scrollPositionInit > itemPostion + 100) {
      setShow((prev) => true);
    }

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      console.log('test', itemPostion, scrollPosition);
      if (itemPostion < scrollPosition - showOffset) {
        console.log('show', ourRef);
        setShow((prev) => true);
      }
    };
    const onLoad = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
    };
    window.addEventListener('load', onLoad);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox {...rest} style={action} ref={ourRef}>
      {children}
    </AnimatedBox>
  );
};

export const ScrollAniScale = ({ children, props }) => {
  const { scrollDir } = useScroll();
  const [scaler, setScaler] = useState(1);
  const ref = useRef();
  const [{ transform }, set] = useSpring(() => ({
    transform: `scale(${scaler})`,
  }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    console.log(scrollDir);
    if (offset > 0 && scaler < 2 && scrollDir == 'down') {
      console.log('offset', offset);
      setScaler((prev) => prev + 0.01);
      set({ transform: `scale(${scaler})` });
    } else if (scaler > 1 && scrollDir == 'up') {
      setScaler((prev) => prev - 0.01);
      set({ transform: `scale(${scaler})` });
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <a.div style={{ transform }} ref={ref} className="scale">
      {children}
    </a.div>
  );
};
