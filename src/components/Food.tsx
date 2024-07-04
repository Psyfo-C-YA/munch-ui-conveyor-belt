// Food.tsx
import './Food.css';

const FoodComponent: React.FC<{ food: string, onClick: () => void }> = ({ food, onClick }) => {
    return (
        <div className="food" onClick={onClick}>
            {food}
        </div>
    );
};

export default FoodComponent;
