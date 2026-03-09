import React from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/utils/utilss";

export const PinContainer = ({
  children,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const controls = useAnimation();

  const onMouseEnter = () => {
    controls.start({
      rotateX: 18,
      rotateY: 0,
      scale: 0.98,
      translateZ: 30,
      boxShadow: "0 0 40px rgba(0, 255, 255, 0.35)",
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  const onMouseLeave = () => {
    controls.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      translateZ: 0,
      boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  return (
    <a
      className={cn(
        // wrapper REALE che occupa spazio nel layout orizzontale
        "block",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* viewport con prospettiva e dimensioni fisse */}
      <div
        className="pin-viewport"
        style={{
          width: 320,
          height: 380,
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={controls}
          initial={{
            rotateX: 0,
            scale: 1,
            boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform, box-shadow",
            width: "100%",
            height: "100%",
          }}
          // niente position:absolute: partecipa al flow
          className={cn("w-full h-full", className)}
        >
          {children}
        </motion.div>
      </div>
    </a>
  );
};


