import TestimonialItem from "./TestimonialItem";
import testimonialImg from "../assets/1.png";

const Testimonials = () => {
  return (
    <div className="pt-10 w-full flex flex-col justify-center items-center">
      <div className="font-semibold">Testimonials</div>
      <div className="font-bold text-2xl text-center">
        What community members are saying about us?
      </div>
      <div className="pt-10 grid lg:grid-cols-3 md:grod-cols-2 grid-cols-1 gap-5">
        <TestimonialItem
          text="Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time. Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time."
          imgSrc={testimonialImg}
          name="Rustom Paji"
          designation="Hotel Owner"
        />
        <TestimonialItem
          text="Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time. Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time."
          imgSrc={testimonialImg}
          name="Rustom Paji"
          designation="Hotel Owner"
        />
        <TestimonialItem
          text="Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time. Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time."
          imgSrc={testimonialImg}
          name="Rustom Paji"
          designation="Hotel Owner"
        />
      </div>
    </div>
  );
};
export default Testimonials;
