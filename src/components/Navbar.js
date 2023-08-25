import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex sm:justify-around justify-between p-6">
      <div className="font-bold text-sky-600 text-lg">Logo</div>
      <div>
        <div className="gap-6 text font-semibold hidden sm:flex">
          <div>Join community</div>
          <div>Contact us</div>
        </div>
        <FaBars className="text-2xl sm:hidden" />
      </div>
    </div>
  );
};
export default Navbar;
