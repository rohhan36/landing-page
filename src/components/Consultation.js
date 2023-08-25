import Button from "./UI/Button";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FcCallback, FcGoogle } from "react-icons/fc";

const Consultation = () => {
  return (
    <div className="pt-10 flex flex-col items-center">
      <div className="flex gap-3 pt-4">
        <Button label="Community" isWhite={true} />
        <Button label="Courses" isWhite={true} />
        <Button label="Consultation" text="white" />
      </div>
      <div className="flex gap-5 pt-10 md:flex-row flex-col">
        <div className="bg-white rounded-2xl shadow w-80 flex flex-col justify-center items-start gap-2 px-5 py-3">
          <div className="bg-blue-50 p-2 rounded-full">
            <FcCallback className="text-3xl" />
          </div>
          <div className="font-bold">SCO vs HEA Dream11 Team</div>
          <div className="font-bold">Prediction | Dream11</div>
          <div className="flex justify-between w-full">
            <span className="flex gap-1">
              <CiCalendarDate />
              <span className="text-xs">12 Slots left</span>
            </span>
            <span className="flex gap-1">
              <AiOutlineClockCircle />
              <span className="text-xs">15 min</span>
            </span>
            <span className="flex gap-1">
              <span className="text-xs">₹99/slot</span>
            </span>
          </div>
          <div className="self-center pt-3">
            <Button label="View Details" text="white" isLarge={true} />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow w-80 flex flex-col justify-center items-start gap-2 px-5 py-3">
          <div className="bg-blue-50 p-2 rounded-full">
            <FcGoogle className="text-3xl" />
          </div>
          <div className="font-bold">SCO vs HEA Dream11 Team</div>
          <div className="font-bold">Prediction | Dream11</div>
          <div className="flex justify-between w-full">
            <span className="flex gap-1">
              <CiCalendarDate />
              <span className="text-xs">12 Slots left</span>
            </span>
            <span className="flex gap-1">
              <AiOutlineClockCircle />
              <span className="text-xs">15 min</span>
            </span>
            <span className="flex gap-1">
              <span className="text-xs">₹99/slot</span>
            </span>
          </div>
          <div className="self-center pt-3">
            <Button label="View Details" text="white" isLarge={true} />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow w-80 flex flex-col justify-center items-start gap-2 px-5 py-3">
          <div className="bg-blue-50 p-2 rounded-full">
            <FcCallback className="text-3xl" />
          </div>
          <div className="font-bold">SCO vs HEA Dream11 Team</div>
          <div className="font-bold">Prediction | Dream11</div>
          <div className="flex justify-between w-full">
            <span className="flex gap-1">
              <CiCalendarDate />
              <span className="text-xs">12 Slots left</span>
            </span>
            <span className="flex gap-1">
              <AiOutlineClockCircle />
              <span className="text-xs">15 min</span>
            </span>
            <span className="flex gap-1">
              <span className="text-xs">₹99/slot</span>
            </span>
          </div>
          <div className="self-center pt-3">
            <Button label="View Details" text="white" isLarge={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consultation;
