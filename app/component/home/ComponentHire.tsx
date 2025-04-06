"use client";
import Image from "next/image";
const ComponentHire = () => {
  return (
    <div>
      <div className="  h-[60vh] bg-gray-800/80 m-auto ">
        <div className="border-b-[1px] pt-4 pb-3">
          <div className="flex justify-end font-bold text-[18px] mr-10">
            Step And Process
          </div>
        </div>
        <div className="w-[70%] m-auto mt-[50px] grid grid-cols-4 gap-10">
          <div className="border-[1px] h-[300px] rounded-lg">
            <div className="text-center mt-5 font-bold">Step 1</div>
            <div className="h-[230px]">
              <p className="ml-4 mt-5">
                Is a keyword representing the largest minimal content
                contribution of the grid items occupying the grid track. For
                example, if the first element of the grid track contains the
                sentence .
              </p>
            </div>
            <div className="w-[100px] h-[100px] m-auto">
              <Image
                className="translate-x-4 translate-y-[-20px]"
                src="/finish-flag.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="border-[1px] h-[300px] rounded-lg">
            <div className="text-center mt-5 font-bold">Step 2</div>
            <div className="h-[230px]">
              <p className="ml-4 mt-5">
                Is a keyword representing the largest minimal content
                contribution of the grid items occupying the grid track. For
                example, if the first element of the grid track contains the
                sentence.
              </p>
            </div>
            <div className="w-[100px] h-[100px] m-auto">
              <Image
                className="translate-x-6 translate-y-[-20px]"
                src="/edit.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="border-[1px] h-[300px] rounded-lg">
            <div className="text-center mt-5 font-bold">Step 3</div>
            <div className="h-[230px]">
              <p className="ml-4 mt-5">
                Is a keyword representing the largest minimal content
                contribution of the grid items occupying the grid track. For
                example, if the first element of the grid track contains the
                sentence.
              </p>
            </div>
            <div className="w-[100px] h-[100px] m-auto">
              <Image
                className="translate-x-4 translate-y-[-20px]"
                src="/binary-code.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="border-[1px] h-[300px] rounded-lg">
            <div className="text-center mt-5 font-bold">Step 4</div>
            <div className="h-[230px] ">
              <p className="ml-4 mt-5">
                Is a keyword representing the largest minimal content
                contribution of the grid items occupying the grid track. For
                example, if the first element of the grid track contains the
                sentence.
              </p>
            </div>
            <div className="w-[100px] h-[100px] m-auto">
              <Image
                className="translate-x-3 translate-y-[-40px]"
                src="/message.png"
                alt="Logo"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHire;
