import Button from "./UI/Button";
import ListItem from "./UI/ListItem";
import pfp from "../assets/11.png";

const Comunity = () => {
  return (
    <>
      <div className="flex gap-3 pt-4">
        <Button label="Community" text="white" />
        <Button label="Courses" isWhite={true} />
        <Button label="Consultation" isWhite={true} />
      </div>

      <div className="pt-10 flex flex-col md:flex-row items-center gap-10 ">
        <div className="flex flex-col  items:start gap-5 max-w-md">
          <div className="text-3xl font-bold ">The 1% club</div>
          <div>
            Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance
            content at a time.
          </div>
          <ListItem text="Exclusive 1 on 1 interaction with the creator" />
          <ListItem
            text="Connect with like minded folks, from diverse backgrounds &
            cities"
          />
          <ListItem text="32+ Hours of Investing Tutorials, Tools & Community" />
          <div className="md:block hidden">
            <Button isLarge={true} isWhite={false} label="Join the community" text="white" />
          </div>
        </div>
        <div className="w-80 ">
          <img src={pfp} className="h-80" alt="sharan" />
        </div>
      </div>
    </>
  );
};
export default Comunity;
