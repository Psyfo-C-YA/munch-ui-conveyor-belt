// // sushiLogic.ts
// import { Plate, Platter } from './Plate';
// import { getRandomPlate } from './utils';

// export type PlateRecord = [string, Plate | Platter];
// export let belt: PlateRecord[] = [];

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// export const getBelt = () => belt;

// export const addPlateToBelt = async () => {
//     const plate = getRandomPlate();
//     const id = `plate-${Date.now()}`;
//     belt.push([id, plate]);
//     console.log(`Added: ${id}`);
// };

// export const removeOldestPlateFromBelt = async () => {
//     await delay(10000);  // Remove after 10 seconds
//     if (belt.length > 0) {
//         const [id] = belt.shift()!;
//         console.log(`Removed: ${id}`);
//     }
// };

// export const listPlatesOnBelt = () => {
//     const plateCount = belt.length;
//     const uniqueFoodSet = new Set<string>();
//     belt.forEach(([, plate]) => {
//         plate.foodSet.forEach(food => uniqueFoodSet.add(food));
//     });
//     const uniqueFoodCount = uniqueFoodSet.size;
//     console.log(`Plates on belt: ${plateCount}, Unique foods: ${uniqueFoodCount}`);
// };

// export const addPlatePeriodically = async () => {
//     while (true) {
//         await addPlateToBelt();
//         await delay(4000);  // Add every 4 seconds
//     }
// };

// export const removeRandomPlateFromBelt = async () => {
//     while (true) {
//         const interval = Math.random() * (20000 - 10000) + 10000;
//         await delay(interval);  // Random interval between 10 and 20 seconds
//         if (belt.length > 0) {
//             const index = Math.floor(Math.random() * belt.length);
//             const [id] = belt.splice(index, 1)[0];
//             console.log(`Randomly removed: ${id}`);
//         }
//     }
// };

// export const removeFoodFromPlate = (plate: Plate | Platter, food: string) => {
//     plate.foodSet.delete(food);
// };
// sushiLogic.ts
import { Plate, Platter } from './Plate';
import { getRandomPlate } from './utils';

export type PlateRecord = [string, Plate | Platter];
export let belt: PlateRecord[] = [];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getBelt = () => belt;

export const addPlateToBelt = async () => {
    const plate = getRandomPlate();
    const id = `plate-${Date.now()}`;
    belt.push([id, plate]);
    console.log(`Added: ${id}`);
};

export const removeOldestPlateFromBelt = async () => {
    await delay(10000);  // Remove after 10 seconds
    if (belt.length > 0) {
        const [id] = belt.shift()!;
        console.log(`Removed: ${id}`);
    }
};

export const listPlatesOnBelt = () => {
    const plateCount = belt.length;
    const uniqueFoodSet = new Set<string>();
    belt.forEach(([, plate]) => {
        plate.foodSet.forEach(food => uniqueFoodSet.add(food));
    });
    const uniqueFoodCount = uniqueFoodSet.size;
    console.log(`Plates on belt: ${plateCount}, Unique foods: ${uniqueFoodCount}`);
};

export const addPlatePeriodically = async () => {
    while (true) {
        await addPlateToBelt();
        await delay(4000);  // Add every 4 seconds
    }
};

export const removeRandomPlateFromBelt = async () => {
    while (true) {
        const interval = Math.random() * (20000 - 10000) + 10000;
        await delay(interval);  // Random interval between 10 and 20 seconds
        if (belt.length > 0) {
            const index = Math.floor(Math.random() * belt.length);
            const [id] = belt.splice(index, 1)[0];
            console.log(`Randomly removed: ${id}`);
        }
    }
};

export const removeFoodFromPlate = (plate: Plate | Platter, food: string) => {
    plate.foodSet.delete(food);
};
