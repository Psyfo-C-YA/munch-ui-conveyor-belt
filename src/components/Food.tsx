import React from 'react';
import './Food.css';

interface FoodProps {
  food: string;
  onRemove: () => void;
}

const Food: React.FC<FoodProps> = ({ food, onRemove }) => {
  return (
    <div className="food" onClick={onRemove}>
      {food}
    </div>
  );
};

export default Food;
