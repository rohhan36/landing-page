const Button = ({ label, isWhite, isLarge, text, disable }) => {
  return (
    <button
      className={`${isWhite ? "bg-white" : "bg-blue-600"}
      ${isLarge ? "w-[270px] py-3" : "w-[130px] py-2"}
      ${disable && "hidden"}
      ${`text-${text}`}
      text-sm font-bold rounded-full shadow-lg hover:scale-[1.04] transition duration-100 active:scale-95
    `}>
      {label}
    </button>
  );
};
export default Button;
