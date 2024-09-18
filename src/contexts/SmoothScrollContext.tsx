import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const CustomScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    if (scrollEl) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 0.5,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      const handleResize = () => locomotiveScroll.update();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        locomotiveScroll.destroy();
      };
    }
  }, []);

  const containerStyle: React.CSSProperties = {
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div data-scroll-container ref={scrollRef} style={containerStyle}>
      {children}
    </div>
  );
};

export default CustomScroll;
