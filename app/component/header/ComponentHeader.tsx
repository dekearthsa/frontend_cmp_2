"use client";
import Image from "next/image";

const ComponentHeader = () => {
  const debugBTN = () => {
    console.log("sss");
  };

  return (
    <div className="bg-gray-800/70 h-[10vh] shadow-2xl rounded-3xl">
      <div className="grid grid-cols-2 pt-9 font-bold">
        <div className="ml-[50px]">
          <Image
            className="translate-y-[-32px]"
            src="/food.png"
            alt="Company Logo"
            width={80}
            height={80}
            objectFit="cover"
          />
        </div>
        <div className="flex justify-end">
          <div className=" text-[17px] ">
            <button
              className="transition-colors duration-300 hover:bg-gray-600 rounded-3xl w-[150px]"
              onClick={() => {
                debugBTN();
              }}
            >
              PROJECT
            </button>
          </div>
          <div className=" text-[17px]">
            <button className="transition-colors duration-300 hover:bg-gray-600 rounded-3xl w-[150px]">
              PRICING
            </button>
          </div>
          <div className="mr-[60px] text-[17px]">
            <button className="transition-colors duration-300 hover:bg-gray-600 rounded-3xl w-[150px]">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
