
import { FaArrowLeft } from 'react-icons/fa';

function PrevArrow({ type, ...props }) {
  const { onClick } = props;
  return (
    <div
      className={`${
        type === "thre" ? "bg-transparent" : "hover:bg-gray-700 bg-gray-800"
      } absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer p-2 rounded-full transition duration-300`}
      onClick={onClick}
    >
      <FaArrowLeft
        className={`${
          type === "thre" ? "text-transparent" : "text-white"
        } text-2xl`}
      />
    </div>
  );
}

export default PrevArrow;