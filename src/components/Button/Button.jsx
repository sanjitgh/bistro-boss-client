const Button = ({ buttonContent, onClick }) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        className="btn bg-transparent hover:bg-gray-800 hover:text-white hover:border-t-transparent border-t-transparent border-l-transparent border-r-transparent hover:border-l-transparent hover:border-r-transparent shadow-none border-b-[#D99904] rounded-lg border-b-2 hover:border-b-transparent px-8 uppercase"
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default Button;
