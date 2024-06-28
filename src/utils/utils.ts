import { PlateSize, PlateColor, PlatterShape, Plate } from './sushiLogic';

const plateSizes: PlateSize[] = ['small', 'medium', 'large'];
const foodOptions: string[][] = [
  ['sushi', 'wasabi'],
  ['tempura', 'sashimi'],
  ['nigiri', 'maki'],
  ['udon', 'ramen'],
  ['dumplings', 'spring rolls'],
];
const plateColors: PlateColor[] = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf'];
const platterShapes: PlatterShape[] = ['square', 'round', 'oval', 'triangular'];

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomPlate = (): Plate => {
  const size = getRandomElement(plateSizes);
  const foodSet = getRandomElement(foodOptions);
  const color = getRandomElement(plateColors);
  const shape = getRandomElement(platterShapes);
  return {
    size,
    foodSet,
    color,
    shape,
    id: Date.now()
  };
};
