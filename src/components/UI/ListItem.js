import { AiFillCheckCircle } from "react-icons/ai";

const ListItem = ({ text }) => {
  return (
    <div className="flex gap-2 justify-start items-center font-semibold">
      <AiFillCheckCircle className="text-xl" />
      <span>{text}</span>
    </div>
  );
};
export default ListItem;
