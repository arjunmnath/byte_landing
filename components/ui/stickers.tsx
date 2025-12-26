"use client";

import {
  Apple,
  Candy,
  ChefHat,
  Cherry,
  Coffee,
  Cookie,
  CookingPot,
  Croissant,
  CupSoda,
  Grape,
  IceCream2,
  Lollipop,
  Pizza,
  Salad,
  Sandwich,
  Soup,
  Utensils,
} from "lucide-react";

/* -------------------- ICON POOL -------------------- */

const foodList = [
  Pizza,
  Apple,
  Candy,
  ChefHat,
  Cherry,
  Cookie,
  CookingPot,
  Croissant,
  Grape,
  IceCream2,
  Lollipop,
  Salad,
  Sandwich,
  Soup,
  Utensils,
  CupSoda,
  Coffee,
];

/* -------------------- CONFIG -------------------- */

const COLS = 10;

/* -------------------- STICKER -------------------- */

type StickerProps = {
  Icon: React.ElementType;
  index: number;
};

const Sticker = ({ Icon, index }: StickerProps) => {
  const rotation = ((index % 5) - 2) * 4;

  return (
    <div
      className="flex  text-white items-center justify-center opacity-60"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Icon size={30} strokeWidth={1.75} />
    </div>
  );
};

/* -------------------- PAGE -------------------- */

export default function StickersPage() {
  return (
    <div className="dark:bg-background bg-primary w-full h-lvh overflow-hidden absolute z-20">
      <div className="grid grid-cols-10 grid-rows-6 w-full h-full ">
        {Array.from({ length: 60 }).map((_, i) => {
          const Icon = foodList[i % foodList.length];
          const row = Math.floor(i / COLS);

          if (row % 2 === 1 && i % COLS === COLS - 1) {
            return <div key={i} />;
          }

          return (
            <div
              key={i}
              className={`flex items-center justify-center
                ${row % 2 === 1 ? "translate-x-10" : ""}
              `}
            >
              <Sticker Icon={Icon} index={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
