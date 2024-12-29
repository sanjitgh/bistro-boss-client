const Button = ({ buttonContent }) => {
  return (
    <div className="text-center mt-10">
      <button className="btn bg-transparent hover:border-t-transparent border-t-transparent border-l-transparent border-r-transparent hover:border-l-transparent hover:border-r-transparent hover:bg-transparent shadow-none border-b-gray-500 rounded-lg border-b-2 hover:border-b-gray-700 px-8 uppercase">{buttonContent}</button>
    </div>
  );
};

export default Button;
