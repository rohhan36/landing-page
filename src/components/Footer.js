import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import SocialIcons from "./SocialIcons";
import googlePlay from "../assets/5.png";
import appleStore from "../assets/4.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full p-10 gap-3 bg-white">
        <div className="font-semibold">Contact us</div>
        <div className="font-bold text-2xl text-center">
          Do you have any queries, feel free to reach out to us
        </div>
      </div>
      <div className="flex justify-between bg-white px-20 pt-2 pb-16 md:flex-row flex-col gap-10 items-start ">
        <div className="flex justify-center items-center gap-5">
          <div className="h-12 w-12 rounded-full bg-blue-50 flex justify-center items-center">
            <AiOutlineMail className="text-3xl text-blue-700" />
          </div>
          <div>
            <div>Email us</div>
            <div className="font-bold">Support@gmail.com</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="h-12 w-12 rounded-full bg-blue-50 flex justify-center items-center">
            <BsWhatsapp className="text-3xl text-blue-700" />
          </div>
          <div>
            <div>We are awailable on Whatsapp</div>
            <div className="font-bold">Click to Whatsapp</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="h-12 w-12 rounded-full bg-blue-50 flex justify-center items-center">
            <BiPhoneCall className="text-3xl text-blue-700" />
          </div>
          <div>
            <div>Call for sales & spport</div>
            <div className="font-bold">+918460068722</div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 flex flex-col items-center justify-center gap-8 pt-10">
        <div className="font-bold text-5xl text-white">Logo</div>
        <SocialIcons isWhite={true} />
        <div className="flex gap-5 justify-center items-center">
          <div>
            <img src={appleStore} alt="apple store" className="w-36" />
          </div>
          <div>
            <img src={googlePlay} alt="google play" className="w-36" />
          </div>
        </div>
        <div className="flex p-5 sm:gap-20 gap-3 flex-col sm:flex-row justify-between items-center text-white pb-10">
          <span>©2023 companyname.com</span>
          <span>Privacy Policy</span>
          <span>Terms of service</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
