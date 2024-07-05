import { Platter } from "./Plate";

// Function to get a random plate with random attributes
export const getRandomPlate = () => {
  const sizes = [15, 25, 35];
  const colors = ["LightCoral", "CornflowerBlue", "MediumSeaGreen", "Gold"];
  const foods = [
    new Set(["Sushi", "Sashimi"]),
    new Set(["Tempura", "Udon"]),
    new Set(["Gunkan", "Rice"]),
    new Set(["Nigiri", "Maki"]),
    new Set(["Gyoza", "Edamame"])
  ];
  const shapes: ("Square" | "Round" | "Oval" | "Triangular")[] = [
    "Square",
    "Round",
    "Oval",
    "Triangular",
  ];

  // Select random attributes
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const foodSet = foods[Math.floor(Math.random() * foods.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  // Return a new Platter with the random attributes
  return new Platter(size, foodSet, color, shape);
};