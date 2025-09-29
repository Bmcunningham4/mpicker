import Card from "./Card";
import type { MealNode } from "../types";

interface CardListProps {
  options: MealNode[];
  onChoose: (choice: MealNode) => void;
}

const CardList: React.FC<CardListProps> = ({ options, onChoose }) => {
  return (
    <div className="card-list">
      {options.map((opt) => (
        <Card key={opt.label} label={opt.label} onClick={() => onChoose(opt)} />
      ))}
    </div>
  );
};

export default CardList;
