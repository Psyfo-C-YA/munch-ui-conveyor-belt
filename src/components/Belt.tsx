"use client"
import React, { useState, useEffect } from 'react';
import Plate from './Plate';
import { Plate as PlateType, addPlateToBelt, removeOldestPlate, getSushiBelt, removeFoodFromPlate } from '../utils/sushiLogic';
import { generateRandomPlate } from '../utils/utils';
import { AnimatePresence, motion } from 'framer-motion';
import './Belt.css';

const Belt: React.FC = () => {
  const [sushiBelt, setSushiBelt] = useState<PlateType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPlate: PlateType = generateRandomPlate();
      addPlateToBelt(newPlate);
      setSushiBelt(getSushiBelt().map(record => record.plate));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      removeOldestPlate();
      setSushiBelt(getSushiBelt().map(record => record.plate));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleRemoveFood = (plateId: number, food: string) => {
    removeFoodFromPlate(plateId, food);
    setSushiBelt(getSushiBelt().map(record => record.plate));
  };

  return (
    <div className="belt">
      <AnimatePresence>
        {sushiBelt.map(plate => (
          <motion.div
            key={plate.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Plate key={plate.id} plate={plate} removeFood={handleRemoveFood} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Belt;
