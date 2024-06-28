// Indicate that this is a client-side component
"use client"

// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // React for component creation and hooks
import Plate from './Plate'; // Import Plate component
import { Plate as PlateType, addPlateToBelt, removeOldestPlate, getSushiBelt, removeFoodFromPlate } from '../utils/sushiLogic'; // Import Plate type and utility functions
import { generateRandomPlate } from '../utils/utils'; // Import utility function to generate random plates
import { AnimatePresence, motion } from 'framer-motion'; // Import Framer Motion for animations
import './Belt.css'; // Import CSS for styling

// Define the Belt component
const Belt: React.FC = () => {
  // State to hold the current plates on the sushi belt
  const [sushiBelt, setSushiBelt] = useState<PlateType[]>([]);

  // Effect to add a new plate to the belt every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newPlate: PlateType = generateRandomPlate(); // Generate a new random plate
      addPlateToBelt(newPlate); // Add the new plate to the sushi belt
      setSushiBelt(getSushiBelt().map(record => record.plate)); // Update state with the current plates on the belt
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Effect to remove the oldest plate from the belt every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      removeOldestPlate(); // Remove the oldest plate from the sushi belt
      setSushiBelt(getSushiBelt().map(record => record.plate)); // Update state with the current plates on the belt
    }, 10000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Function to handle removing a specific food item from a plate
  const handleRemoveFood = (plateId: number, food: string) => {
    removeFoodFromPlate(plateId, food); // Remove the specified food item from the plate
    setSushiBelt(getSushiBelt().map(record => record.plate)); // Update state with the current plates on the belt
  };

  // Render the belt component with animated plates
  return (
    <div className="belt">
      <AnimatePresence>
        {sushiBelt.map(plate => (
          <motion.div
            key={plate.id} // Unique key for each plate
            initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation state when appearing
            exit={{ opacity: 0, x: 100 }} // Animation state when exiting
            transition={{ duration: 0.5 }} // Animation duration
          >
            <Plate key={plate.id} plate={plate} removeFood={handleRemoveFood} /> {/* Render Plate component */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Export the Belt component as default
export default Belt;
