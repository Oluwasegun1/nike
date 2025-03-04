const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none text-white border-coral-red rounded-full bg-coral-red ">
      {label}
      <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5 " />
    </button>
  );
};

export default Button;
