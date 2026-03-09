import React, { useState } from "react";
import "./HeaderRight.css";

interface CardData {
  title: string;
  value: number | string;
}

const cardsData: CardData[] = [
  { title: "Progetti", value: 3 },
  { title: "Skills", value: 12 },
  { title: "Titoli", value: 3 },
];

const RightCardStack: React.FC = () => {
  const [activeNumbers, setActiveNumbers] = useState<{ [key: string]: number }>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleMouseEnter = (card: CardData) => {
    setHoveredCard(card.title);

    if (typeof card.value === "number") {
      let start = 0;
      const duration = 800;
      const increment = card.value / (duration / 40);

      const interval = setInterval(() => {
        start += increment;
        if (start >= card.value) {
          setActiveNumbers((prev) => ({ ...prev, [card.title]: card.value }));
          clearInterval(interval);
        } else {
          setActiveNumbers((prev) => ({ ...prev, [card.title]: Math.floor(start) }));
        }
      }, 40);
    }

    setTimeout(() => {
      setHoveredCard(null);
      setActiveNumbers((prev) => ({ ...prev, [card.title]: 0 }));
    }, 3000);
  };

  return (
    <div className="card-stack-wrapper">
      {cardsData.map((card, index) => {
        const offsetBottom = index * 30; // sfalsamento verticale verso l’alto
        const offsetRight = index * 70; // sfalsamento orizzontale leggermente a sinistra
        const rotateDeg = (Math.random() * 4 - 2).toFixed(2);

        const isHovered = hoveredCard === card.title;

        return (
          <div
            key={index}
            className={`stack-card ${isHovered ? "hovered" : ""}`}
            style={{
              "--offset-bottom": `${offsetBottom}px`,
              "--offset-right": `${offsetRight}px`,
              "--rotate": `${rotateDeg}deg`,
              zIndex: isHovered ? 100 : cardsData.length - index,
            } as React.CSSProperties}
            onMouseEnter={() => handleMouseEnter(card)}
          >
            <h3>{activeNumbers[card.title] ?? 0}</h3>
            <p>{card.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RightCardStack;

