import { Plate, Platter } from './Plate';
import { getRandomPlate } from './utils';

export type PlateRecord = [string, Plate | Platter];
export let belt: PlateRecord[] = [];

// Utility function to introduce delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Function to get the current state of the belt
export const getBelt = () => belt;

// Function to clear the belt
export const clearBelt = () => {
  belt = [];
};

// Function to add a plate to the belt
export const addPlateToBelt = async () => {
  const plate = getRandomPlate();
  const id = `plate-${Date.now()}`;
  belt.push([id, plate]);
  console.log(`Added: ${id}, Current belt size: ${belt.length}`);
};

// Function to remove the oldest plate from the belt
export const removeOldestPlateFromBelt = async () => {
  if (belt.length > 0) {
    const [id] = belt.shift()!;
    console.log(`Removed: ${id}, Current belt size: ${belt.length}`);
  }
};

// Function to list plates and unique food count on the belt
export const listPlatesOnBelt = () => {
  const plateCount = belt.length;
  const uniqueFoodSet = new Set<string>();
  belt.forEach(([, plate]) => {
    plate.foodSet.forEach(food => uniqueFoodSet.add(food));
  });
  const uniqueFoodCount = uniqueFoodSet.size;
  console.log(`Plates on belt: ${plateCount}, Unique foods: ${uniqueFoodCount}`);
};

// Function to remove a random plate from the belt
export const removeRandomPlateFromBelt = async () => {
  if (belt.length > 0) {
    const index = Math.floor(Math.random() * belt.length);
    const [id] = belt.splice(index, 1)[0];
    console.log(`Randomly removed: ${id}, Current belt size: ${belt.length}`);
  }
};
