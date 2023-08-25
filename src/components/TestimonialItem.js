const TestimonialItem = ({ text, imgSrc, name, designation }) => {
  return (
    <div className="bg-white rounded-2xl shadow w-80 flex flex-col justify-center items-center gap-2 p-4">
      <div className="text-center">{text}</div>
      <div className="h-20 w-20 rounded-full overflow-hidden object-fill">
        <img src={imgSrc} alt={name} />
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="font-semibold">{designation}</div>
      </div>
    </div>
  );
};
export default TestimonialItem;
