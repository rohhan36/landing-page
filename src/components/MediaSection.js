import media from "../assets/0.png";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "./UI/Button";
import mobileMockup from "../assets/3.png";
import laptopMockup from "../assets/2.png";

const MediaSection = () => {
  return (
    <>
      <div className="pt-10 w-full flex flex-col justify-center items-center">
        <div className="font-semibold">Media Section</div>
        <div className="font-bold text-2xl text-center">
          Check out the intro video of the community
        </div>

        <div className="sm:h-[40vw] h-[50vw] overflow-hidden rounded-3xl mt-10 relative flex justify-center items-center">
          <button className="absolute">
            <AiFillPlayCircle className="text-white opacity-80 text-7xl" />
          </button>
          <img src={media} alt="Community post" className="sm:w-[70vw] w-[90vw]" />
        </div>
      </div>

      <div className="mt-10 w-full">
        <div className="flex flex-col justify-center items-center p-10 bg-blue-600 w-full gap-3 rounded-t-full pt-20">
          <div className="font-semibold text-sm text-white">Get the app in one click</div>
          <div className="font-bold text-3xl text-center text-white max-w-lg">
            Hack your wealth journy inside the 1% club
          </div>
          <div className="sm:block hidden">
            <Button label="Join the community" isWhite={true} isLarge={true} text="text-blue-700" />
          </div>
          <div className="flex items-end pt-10">
            <div>
              <img src={mobileMockup} alt="1% club" className="md:w-[20vw] w-[20vw]" />
            </div>
            <div>
              <img src={laptopMockup} alt="1% club" className="md:w-[40vw] w-[50vw]" />
            </div>
          </div>
          <div className="sm:hidden block mt-5">
            <Button label="Join the community" isWhite={true} isLarge={true} text="text-blue-700" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MediaSection;
