const Card = ({
  icon,
  price,
  label,
}: {
  icon: string;
  price: string;
  label: string;
}) => {
  return (
    <div className="card">
      {icon && <img src={icon} className="card--image" />}
      <div className="card--content">
        <h3>{price}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Card;
