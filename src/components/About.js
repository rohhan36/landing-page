import aboutImg from "../assets/7.png";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full p-10 gap-3 ">
      <div className="font-semibold">About me</div>
      <div className="font-bold text-2xl text-center">
        Entrepreneur, content creator, Finance Influencer
      </div>
      <div>
        <div className=" h-[410px] w-[410px] bg-white rounded-full justify-center items-center flex">
          <div className="h-[395px] w-[395px] bg-blue-200 rounded-full flex justify-center items-center">
            <div className="aboutImg-bg h-96 w-96 rounded-full">
              <img src={aboutImg} alt="about me" className="h-96" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 max-w-4xl">
        <div className="text-center">
          Hi, I'm Finance With Sharan. I’m a former management consultant at KPMG and PwC where I
          worked with banks and NBFCs to help them make a ton of money.
        </div>
        <div className="text-center">
          I now work as a full-time content creator and help the common man make a ton of money.
        </div>
        <div className="text-center">
          I create engaging personal finance content with a blend of comedic flavor and cosplay on
          Instagram and YouTube. I also write down highly action oriented posts on LinkedIn and
          Twitter for those who are not on social media platforms and prefer to read it instead.
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};
export default About;
