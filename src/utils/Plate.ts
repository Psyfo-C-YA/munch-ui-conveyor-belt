export type FoodSet = Set<string>;

// Plate class to represent a plate with size, food set, and color
export class Plate {
  size: number;
  foodSet: FoodSet;
  color: string;

  constructor(size: number, foodSet: FoodSet, color: string) {
    this.size = size;
    this.foodSet = foodSet;
    this.color = color;
  }
}

// Platter class extends Plate, adding a shape attribute
export class Platter extends Plate {
  shape: "Square" | "Round" | "Oval" | "Triangular";

  constructor(
    size: number,
    foodSet: FoodSet,
    color: string,
    shape: "Square" | "Round" | "Oval" | "Triangular"
  ) {
    super(size, foodSet, color);
    this.shape = shape;
  }
}
