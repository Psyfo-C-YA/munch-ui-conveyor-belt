import "./Food.css";

// Food component to display individual food items on a plate
const FoodComponent: React.FC<{ food: string; onClick: () => void }> = ({
  food,
  onClick,
}) => {
  return (
    <div className="food" onClick={onClick}>
      {food}
    </div>
  );
};

export default FoodComponent;
