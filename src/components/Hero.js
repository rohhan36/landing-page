import Button from "./UI/Button";
import HeroImg from "../assets/10.png";
const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-blue-600 md:p-24 p-10 flex flex-col-reverse md:flex-row justify-center gap-10">
      <div className=" md:p-8 p-5 max-w-md flex flex-col gap-6 justify-center md:items-start items-center">
        <h1 className="text-3xl text-white font-semibold md:text-left text-center">
          Hack your wealth journey inside the 1% club
        </h1>
        <div className="text-white text-sm md:text-left text-center">
          A super premium annual subscription that will transform your wealth planning and make you
          say
          <br />
          -“Bro! I’m financially sorted!”
        </div>
        <Button label="Join the community" isWhite={true} isLarge={true} />
      </div>
      <div className="flex flex-col items-center gap-5">
        <img src={HeroImg} id="hero-offset-bg" alt="sharan" className=" w-80 rounded-b-3xl z-10" />
      </div>
    </div>
  );
};
export default Hero;
