// Import necessary types and interfaces from sushiLogic module
import { PlateSize, PlateColor, PlatterShape, Plate } from './sushiLogic';

// Define arrays for possible plate sizes, food options, plate colors, and platter shapes
const plateSizes: PlateSize[] = ['small', 'medium', 'large']; // Array of possible plate sizes
const foodOptions: string[][] = [ // Array of arrays, each representing a set of food options
  ['sushi', 'wasabi'],
  ['tempura', 'sashimi'],
  ['nigiri', 'maki'],
  ['udon', 'ramen'],
  ['dumplings', 'spring rolls'],
];
const plateColors: PlateColor[] = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf']; // Array of possible plate colors
const platterShapes: PlatterShape[] = ['square', 'round', 'oval', 'triangular']; // Array of possible platter shapes

/**
 * Utility function to get a random element from an array
 * @param array - The array to select a random element from
 * @returns A random element from the array
 */
const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Generates a random plate with random attributes
 * @returns A new Plate object with random size, food set, color, shape, and unique ID
 */
export const generateRandomPlate = (): Plate => {
  const size = getRandomElement(plateSizes); // Get a random plate size
  const foodSet = getRandomElement(foodOptions); // Get a random set of food
  const color = getRandomElement(plateColors); // Get a random plate color
  const shape = getRandomElement(platterShapes); // Get a random platter shape
  return {
    size,
    foodSet,
    color,
    shape,
    id: Date.now() // Use the current timestamp as a unique ID for the plate
  };
};
