import { Platter } from "./Plate";

export const getRandomInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getRandomPlate = () => {
  const sizes = [10, 12, 14];
  const colors = ["LightCoral", "CornflowerBlue", "MediumSeaGreen", "Gold"];
  const foods = [
    new Set(["Sushi", "Sashimi"]),
    new Set(["Tempura", "Udon"]),
    new Set(["Miso Soup", "Rice"]),
    new Set(["Nigiri", "Maki"]),
  ];
  const shapes: ("Square" | "Round" | "Oval" | "Triangular")[] = [
    "Square",
    "Round",
    "Oval",
    "Triangular",
  ];

  const size = sizes[Math.floor(Math.random() * sizes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const foodSet = foods[Math.floor(Math.random() * foods.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  return new Platter(size, foodSet, color, shape);
};
