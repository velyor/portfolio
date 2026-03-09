import React, { useRef } from "react";
import type { ReactNode } from "react";
import './cardStudy.css';

type GlareCardProps = {
  children: ReactNode;
  width?: string;
  height?: string;
};

export const GlareCard = ({
  children,
  width = "360px",
  height = "240px",
}: GlareCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * -20;

    if (ref.current) {
      ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      ref.current.style.setProperty("--px", `${(x / rect.width) * 100}%`);
      ref.current.style.setProperty("--py", `${(y / rect.height) * 100}%`);
    }
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      ref.current.style.setProperty("--px", "50%");
      ref.current.style.setProperty("--py", "50%");
    }
  };

  return (
    <div
      className="glare-card-container"
      style={{ width, height }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="glare-card" ref={ref}>
        <div className="glare-card-content">{children}</div>
        <div className="glare-card-glare" />
      </div>
    </div>
  );
};
