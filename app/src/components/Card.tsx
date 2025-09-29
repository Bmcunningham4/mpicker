interface CardProps {
  label: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ label, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{label}</h3>
    </div>
  );
};

export default Card;
