import Button from "./UI/Button";
import CourseItem from "./CourseItem";
import courseImg from "../assets/9.png";

const Cources = () => {
  return (
    <div className="pt-10 w-full flex flex-col justify-center items-center">
      <div className="flex gap-3 pt-4 ">
        <Button label="Community" isWhite={true} />
        <Button label="Courses" text="white" />
        <Button label="Consultation" isWhite={true} />
      </div>
      <div className="pt-10 grid lg:grid-cols-3 md:grod-cols-2 grid-cols-1 gap-5">
        <CourseItem
          title="The 1% course"
          description="Now, I'm on a mission to help you get to the
              RICHEST 1% - one educational finance
              content at a time."
          imgSrc={courseImg}
          price="3,999"
        />
        <CourseItem
          title="The 1% course"
          description="Now, I'm on a mission to help you get to the
              RICHEST 1% - one educational finance
              content at a time."
          imgSrc={courseImg}
          price="3,999"
        />
        <CourseItem
          title="The 1% course"
          description="Now, I'm on a mission to help you get to the
              RICHEST 1% - one educational finance
              content at a time."
          imgSrc={courseImg}
          price="3,999"
        />
      </div>
    </div>
  );
};
export default Cources;
