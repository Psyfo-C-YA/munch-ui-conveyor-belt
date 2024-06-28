import React from 'react';
import Food from './Food';
import './Plate.css';

interface PlateProps {
  plate: {
    size: 'small' | 'medium' | 'large';
    foodSet: string[];
    color: string;
    shape: 'square' | 'round' | 'oval' | 'triangular';
    id: number;
  };
  removeFood: (plateId: number, food: string) => void;
}

const Plate: React.FC<PlateProps> = ({ plate, removeFood }) => {
  const { size, foodSet, color, shape, id } = plate;

  return (
    <div className={`plate ${shape}`} style={{ backgroundColor: color }}>
      <h3>{size} Plate</h3>
      <div className="food-set">
        {foodSet.map(food => (
          <Food key={food} food={food} onRemove={() => removeFood(id, food)} />
        ))}
      </div>
    </div>
  );
};

export default Plate;
