export type PlateSize = 'small' | 'medium' | 'large';
export type FoodSet = string[];
export type PlateColor = '#ffadad' | '#ffd6a5' | '#fdffb6' | '#caffbf';
export type PlatterShape = 'square' | 'round' | 'oval' | 'triangular';

export interface Plate {
  size: PlateSize;
  foodSet: FoodSet;
  color: PlateColor;
  shape: PlatterShape;
  id: number;
}

export type PlateRecord = {
  plate: Plate;
  timestamp: number;
};

let sushiBelt: PlateRecord[] = [];

export const addPlateToBelt = (plate: Plate) => {
  sushiBelt.push({ plate, timestamp: Date.now() });
};

export const removeOldestPlate = () => {
  if (sushiBelt.length > 0) {
    sushiBelt.shift();
  }
};

export const listPlates = () => {
  const numberOfPlates = sushiBelt.length;
  const uniqueFoods = new Set<string>();

  sushiBelt.forEach(record => {
    record.plate.foodSet.forEach(food => uniqueFoods.add(food));
  });

  console.log(`Number of plates: ${numberOfPlates}`);
  console.log(`Unique food items: ${uniqueFoods.size}`);
};

export const removeFoodFromPlate = (plateId: number, food: string) => {
  sushiBelt = sushiBelt.map(record => {
    if (record.plate.id === plateId) {
      return {
        ...record,
        plate: {
          ...record.plate,
          foodSet: record.plate.foodSet.filter(f => f !== food)
        }
      };
    }
    return record;
  });
};

export const getSushiBelt = () => {
  return sushiBelt;
};
