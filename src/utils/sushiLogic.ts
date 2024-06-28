// Define the types for PlateSize, FoodSet, PlateColor, and PlatterShape
export type PlateSize = 'small' | 'medium' | 'large';
export type FoodSet = string[];
export type PlateColor = '#ffadad' | '#ffd6a5' | '#fdffb6' | '#caffbf';
export type PlatterShape = 'square' | 'round' | 'oval' | 'triangular';

// Define the Plate interface which represents a plate on the sushi belt
export interface Plate {
  size: PlateSize;             // The size of the plate (small, medium, large)
  foodSet: FoodSet;            // An array of strings representing the food items on the plate
  color: PlateColor;           // The color of the plate (one of the specified colors)
  shape: PlatterShape;         // The shape of the plate (square, round, oval, triangular)
  id: number;                  // A unique identifier for the plate
}

// Define the PlateRecord type which includes a Plate and a timestamp
export type PlateRecord = {
  plate: Plate;                // The plate object
  timestamp: number;           // The timestamp when the plate was added to the belt
};

// Initialize an empty array to represent the sushi belt
let sushiBelt: PlateRecord[] = [];

/**
 * Adds a plate to the sushi belt.
 * @param plate - The plate to be added to the belt.
 */
export const addPlateToBelt = (plate: Plate) => {
  sushiBelt.push({ plate, timestamp: Date.now() }); // Add the plate to the belt with the current timestamp
};

/**
 * Removes the oldest plate from the sushi belt.
 */
export const removeOldestPlate = () => {
  if (sushiBelt.length > 0) {
    sushiBelt.shift(); // Remove the first plate from the array (oldest plate)
  }
};

/**
 * Lists the number of plates and the number of unique food items on the sushi belt.
 */
export const listPlates = () => {
  const numberOfPlates = sushiBelt.length; // Get the number of plates on the belt
  const uniqueFoods = new Set<string>();   // Create a Set to store unique food items

  // Iterate through each plate on the belt
  sushiBelt.forEach(record => {
    // Add each food item to the Set to ensure uniqueness
    record.plate.foodSet.forEach(food => uniqueFoods.add(food));
  });

  // Log the number of plates and the number of unique food items
  console.log(`Number of plates: ${numberOfPlates}`);
  console.log(`Unique food items: ${uniqueFoods.size}`);
};

/**
 * Removes a specific food item from a plate on the sushi belt.
 * @param plateId - The unique identifier of the plate.
 * @param food - The food item to be removed.
 */
export const removeFoodFromPlate = (plateId: number, food: string) => {
  // Map through the sushi belt and update the plate if the id matches
  sushiBelt = sushiBelt.map(record => {
    if (record.plate.id === plateId) {
      return {
        ...record,
        plate: {
          ...record.plate,
          foodSet: record.plate.foodSet.filter(f => f !== food) // Remove the specified food item
        }
      };
    }
    return record;
  });
};

/**
 * Gets the current state of the sushi belt.
 * @returns The array of PlateRecords on the sushi belt.
 */
export const getSushiBelt = () => {
  return sushiBelt;
};
