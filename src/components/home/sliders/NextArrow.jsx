
import { FaArrowRight } from 'react-icons/fa';

function NextArrow(props) {
  const { onClick, type } = props;

  return (
    <div
      onClick={onClick}
      className={`${
        type === "thre" ? "bg-transparent" : "hover:bg-gray-700 bg-gray-800"
      } absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer p-2 rounded-full transition duration-300`}
    >
      <FaArrowRight
        className={`${
          type === "thre" ? "text-transparent" : "text-white"
        } text-2xl`}
      />
    </div>
  );
}

export default NextArrow;