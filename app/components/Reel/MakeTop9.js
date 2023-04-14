import Image from "next/image";
import backgroundImage from "../../../public/assets/background/bg-main-visual-mo@2x.png";

const MakeTop9 = () => {
  return (
    <div className="flex items-center justify-center w-20 h-20 select-none btn-click">
      {/* Ring */}
      <div className="p-[2px] scale-110 rounded-full bg-gradient-to-tr  from-[#4FA3FF] to-[#DC2E8D]">
        {/* Center */}
        <div
          className={`relative  w-16 h-16 rounded-full border-4 border-[#120A30] bg-white overflow-hidden`}
        >
          {/* Center: Background */}
          <div className="grid w-full h-full place-content-center bg-gradient-to-br from-[#87C1FF] to-[#E69FFC]">
            {/* <Image
              src={backgroundImage}
              fill
              className="absolute scale-150 translate-y-1 "
            /> */}

            <div className="absolute grid w-full h-full text-2xl leading-none text-[#120A30] place-content-center">
              9
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Right: Plus Icon */}
      <div className="absolute  bottom-0 right-0  bg-blue-400 border-4 border-[#120A30] rounded-full w-8 h-8">
        <div className="grid w-full h-full place-content-center">
          <p className="font-sans text-center text-white ">+</p>
        </div>
      </div>
    </div>
  );
};

export default MakeTop9;
