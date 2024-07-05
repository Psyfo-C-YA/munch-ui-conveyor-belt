import React, { useState } from "react";
import { Plate, Platter } from "../utils/Plate";
import FoodComponent from "./Food";
import { motion, AnimatePresence } from "framer-motion";
import "./Plate.css";

// Function to determine the size label based on the plate size
const getSizeLabel = (size: number) => {
  if (size === 15) return "Small";
  if (size === 25) return "Medium";
  if (size === 35) return "Large";
  return "";
};

// Plate component to display the plate and its food items
const PlateComponent: React.FC<{ plate: Plate | Platter }> = ({ plate }) => {
  const [foods, setFoods] = useState(Array.from(plate.foodSet));

  const handleFoodClick = (food: string) => {
    plate.foodSet.delete(food);
    setFoods(Array.from(plate.foodSet));
  };

  const getClassName = () => {
    if (plate instanceof Platter) {
      return `plate ${plate.shape.toLowerCase()}`;
    }
    return "plate";
  };

  return (
    <motion.div
      className={getClassName()}
      style={{ backgroundColor: plate.color }}
      layout
    >
      <div className="plate-size">{getSizeLabel(plate.size)}</div>
      <AnimatePresence>
        {foods.map((food) => (
          <motion.div
            key={food}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <FoodComponent food={food} onClick={() => handleFoodClick(food)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlateComponent;
