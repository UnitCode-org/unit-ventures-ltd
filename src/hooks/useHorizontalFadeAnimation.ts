import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useHorizontalFadeAnimation = (initialX = -20) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, x: initialX });
    }
  }, [controls, inView, initialX]);

  return { ref, controls };
};

export default useHorizontalFadeAnimation;
