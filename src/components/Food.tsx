// Import necessary modules
import React from "react"; // Import React for component creation
import "./Food.css"; // Import CSS for styling the Food component

// Define the interface for FoodProps to specify the expected props for the Food component
interface FoodProps {
  food: string; // The food item as a string
  onRemove: () => void; // A function to handle the removal of the food item
}

// Define the Food component
const Food: React.FC<FoodProps> = ({ food, onRemove }) => {
  return (
    // Render the food div with the food item as its content
    // Attach the onRemove function to the onClick event handler
    <div className="food" onClick={onRemove}>
      {food} {/* Display the food item */}
    </div>
  );
};

// Export the Food component as default
export default Food;
