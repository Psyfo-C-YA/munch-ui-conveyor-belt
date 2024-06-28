// Import necessary modules and components
import React from 'react'; // Import React for component creation
import Food from './Food'; // Import Food component
import './Plate.css'; // Import CSS for styling the Plate component

// Define the interface for PlateProps to specify the expected props for the Plate component
interface PlateProps {
  plate: { // Define the structure of the plate object
    size: 'small' | 'medium' | 'large'; // The size of the plate (small, medium, large)
    foodSet: string[]; // An array of strings representing the food items on the plate
    color: string; // The color of the plate as a string
    shape: 'square' | 'round' | 'oval' | 'triangular'; // The shape of the plate (square, round, oval, triangular)
    id: number; // A unique identifier for the plate
  };
  removeFood: (plateId: number, food: string) => void; // Function to remove a specific food item from the plate
}

// Define the Plate component
const Plate: React.FC<PlateProps> = ({ plate, removeFood }) => {
  // Destructure the properties of the plate object for easier access
  const { size, foodSet, color, shape, id } = plate;

  return (
    // Render the plate div with the appropriate shape and background color
    <div className={`plate ${shape}`} style={{ backgroundColor: color }}>
      {/* Display the size of the plate */}
      <h3>{size} Plate</h3>
      {/* Render the food items on the plate */}
      <div className="food-set">
        {foodSet.map(food => (
          // Render each Food component, passing the food item and the removeFood function
          <Food key={food} food={food} onRemove={() => removeFood(id, food)} />
        ))}
      </div>
    </div>
  );
};

// Export the Plate component as default
export default Plate;
