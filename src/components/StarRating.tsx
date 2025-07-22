import { FaStar } from "react-icons/fa";

const StarRating = ({ label = "", rating = 5 }) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm font-semibold">{label}</span>
      <div className="flex space-x-1 text-yellow-500">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} />
          ))}
      </div>
    </div>
  );
};

export default StarRating;
