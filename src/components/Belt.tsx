"use client";

import React, { useEffect, useState } from "react";
import {
  addPlateToBelt,
  removeOldestPlateFromBelt,
  listPlatesOnBelt,
  removeRandomPlateFromBelt,
  PlateRecord,
  getBelt,
  clearBelt,
} from "../utils/sushiLogic";
import PlateComponent from "./Plate";
import { motion, AnimatePresence } from "framer-motion";
import "./Belt.css";

// Belt component to manage and display sushi plates on the belt
const Belt = () => {
  const [plates, setPlates] = useState<PlateRecord[]>([]);

  const MAX_PLATES = 16; // Maximum number of plates on the belt

  useEffect(() => {
    // Function to reset the belt and state
    const resetBelt = () => {
      clearBelt();
      setPlates([]);
    };

    // Reset the belt and state on mount
    resetBelt();

    // Function to add a plate and update state
    const addPlate = async () => {
      if (plates.length < MAX_PLATES) {
        await addPlateToBelt();
        setPlates([...getBelt()]);
        listPlatesOnBelt(); // Log the state of the belt after adding a plate
      }
    };

    // Function to remove the oldest plate and update state
    const removeOldestPlate = async () => {
      await removeOldestPlateFromBelt();
      setPlates([...getBelt()]);
      listPlatesOnBelt(); // Log the state of the belt after removing a plate
    };

    // Function to remove a random plate and update state
    const removeRandomPlate = async () => {
      await removeRandomPlateFromBelt();
      setPlates([...getBelt()]);
      listPlatesOnBelt(); // Log the state of the belt after removing a plate randomly
    };

    // Initial plate addition
    addPlate();

    // Set intervals for adding, removing, and listing plates
    const addInterval = setInterval(addPlate, 4000); // Add plate every 4 seconds
    const removeInterval = setInterval(removeOldestPlate, 10000); // Remove oldest plate every 10 seconds
    const removeRandomInterval = setInterval(removeRandomPlate, Math.random() * 10000 + 10000); // Remove random plate between 10 and 20 seconds


    // Clear intervals on component unmount
    return () => {
      clearInterval(addInterval);
      clearInterval(removeInterval);
      clearInterval(removeRandomInterval);
    };
  }, []);

  return (
    <div className="belt">
      <AnimatePresence>
        {plates.map(([id, plate]) => (
          <motion.div
            key={id}
            layout
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="h-fit"
          >
            <PlateComponent plate={plate} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Belt;
