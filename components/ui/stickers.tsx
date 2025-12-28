"use client";

import { motion } from "framer-motion";
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

export default function StickersPage() {
  const itemCount = 80;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary dark:bg-neutral-900">
      <div className="grid h-full w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] content-center gap-8 opacity-40 p-4">
        {Array.from({ length: itemCount }).map((_, i) => {
          const Icon = foodList[i % foodList.length];
          const rotate = ((i * 13) % 40) - 20;

          return (
            <div
              key={i}
              className="flex items-center justify-center text-primary-foreground/40 dark:text-white/10"
              style={{ rotate: `${rotate}deg` }}
            >
              <Icon size={32} strokeWidth={1.5} />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-primary/90 dark:from-background/90  via-transparent to-primary/90 dark:to-background/90 pointer-events-none" />
    </div>
  );
}
