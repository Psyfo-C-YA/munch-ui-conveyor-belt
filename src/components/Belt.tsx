"use client";

import React, { useEffect, useState } from "react";
import {
  addPlateToBelt,
  removeOldestPlateFromBelt,
  listPlatesOnBelt,
  removeRandomPlateFromBelt,
  PlateRecord,
  getBelt,
} from "../utils/sushiLogic";
import PlateComponent from "./Plate";
import { motion, AnimatePresence } from "framer-motion";
import "./Belt.css";

const Belt = () => {
  const [plates, setPlates] = useState<PlateRecord[]>([]);

  useEffect(() => {
    // Function to add a plate and update state
    const addPlate = async () => {
      await addPlateToBelt();
      setPlates([...getBelt()]);
    };

    // Function to remove the oldest plate and update state
    const removeOldestPlate = async () => {
      await removeOldestPlateFromBelt();
      setPlates([...getBelt()]);
    };

    // Function to list plates and update state
    const listPlates = () => {
      listPlatesOnBelt();
      setPlates([...getBelt()]);
    };

    // // Initial plate addition
    // addPlate();

    // Set intervals for adding, removing, and listing plates
    const addInterval = setInterval(addPlate, 4000); // Add plate every 4 seconds
    const removeInterval = setInterval(removeOldestPlate, 10000); // Remove oldest plate every 10 seconds
    const removeRandomInterval = setInterval(async () => {
      await removeRandomPlateFromBelt();
      setPlates([...getBelt()]);
    }, Math.random() * (20000 - 10000) + 10000); // Remove random plate between 10 and 20 seconds

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
