import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

const SocialIcons = ({ isWhite }) => {
  return (
    <div className="flex gap-5">
      <div
        className={`${
          isWhite ? "bg-white" : "bg-blue-600"
        } h-8 w-8 flex justify-center items-center rounded-full hover`}>
        <AiOutlineInstagram className={`text-2xl ${isWhite ? "text-blue-600" : "text-white"}`} />
      </div>
      <div
        className={`${
          isWhite ? "bg-white" : "bg-blue-600"
        } h-8 w-8 flex justify-center items-center rounded-full hover`}>
        <BiLogoFacebook className={`text-2xl ${isWhite ? "text-blue-600" : "text-white"}`} />
      </div>
      <div
        className={`${
          isWhite ? "bg-white" : "bg-blue-600"
        } h-8 w-8 flex justify-center items-center rounded-full hover`}>
        <BiLogoLinkedin className={`text-2xl ${isWhite ? "text-blue-600" : "text-white"}`} />
      </div>
      <div
        className={`${
          isWhite ? "bg-white" : "bg-blue-600"
        } h-8 w-8 flex justify-center items-center rounded-full hover`}>
        <BiLogoTwitter className={`text-2xl ${isWhite ? "text-blue-600" : "text-white"}`} />
      </div>
      <div
        className={`${
          isWhite ? "bg-white" : "bg-blue-600"
        } h-8 w-8 flex justify-center items-center rounded-full hover`}>
        <BiLogoYoutube className={`text-2xl ${isWhite ? "text-blue-600" : "text-white"}`} />
      </div>
    </div>
  );
};
export default SocialIcons;
