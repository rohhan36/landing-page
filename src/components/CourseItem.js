import Button from "./UI/Button";

const CourseItem = ({ title, description, imgSrc, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow w-80 flex flex-col justify-center items-center gap-2 p-4">
      <img src={imgSrc} className="w-80" alt="course_Image" />
      <div className="self-start font-bold">{title}</div>
      <div>{description}</div>
      <Button label={`Buy the course @ ${price}`} text="white" isLarge={true} />
    </div>
  );
};
export default CourseItem;
