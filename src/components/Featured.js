import forbes from "../assets/featured/1.png";
import mint from "../assets/featured/2.png";
import ttoi from "../assets/featured/3.png";
import tet from "../assets/featured/4.png";

const Featured = () => {
  return (
    <div className="flex flex-col items-center w-full p-10 gap-3 ">
      <div className="font-semibold">Featured in</div>
      <div className="flex w-full flex-col gap-4 text-blue-700 items-center justify-between flex-grow">
        <div className="flex gap-8 items-center">
          <div>
            <img src={forbes} alt="forebs" className="md:h-10" />
          </div>
          <div>
            <img src={mint} alt="mint" className="md:h-8" />
          </div>
          <div>
            <img src={ttoi} alt="the times of india" className="md:h-8" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <img src={tet} alt="the economic times" className="md:h-10" />
          </div>
          <div>
            <img src={forbes} alt="forebs" className="md:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
