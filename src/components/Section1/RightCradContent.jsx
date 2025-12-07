const RightCradContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-ful p-5 flex flex-col justify-between">
      <h2 className="h-10 w-10 bg-white text-lg font-bold rounded-full flex justify-center items-center">
        {props.button}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white mb-10">
          {props.intro}
        </p>
        <div className="flex justify-between ">
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full cursor-pointer">
            {props.tag}
          </button>
          <button className="text-shadow-2xs bg-blue-600 text-white font-medium px-3 py-2 rounded-full cursor-pointer">
            <i className="ri-arrow-right-line "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCradContent;
