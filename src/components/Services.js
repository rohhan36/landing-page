import Comunity from "./Comunity";
import Courses from "./Courses";
import Consultation from "./Consultation";

const Services = () => {
  return (
    <div className="flex flex-col items-center w-full p-10 gap-3 ">
      <div className="font-semibold">Services</div>
      <div className="font-bold text-2xl text-center">
        Start your journey towards financial freedom
      </div>
      <Comunity />
      <Courses />
      <Consultation />
    </div>
  );
};
export default Services;
