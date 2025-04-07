import ComponentCard from "../card/ComponentCard";

const ComponentBody = () => {
  return (
    <div>
      <div className="w-[80%] h-[60vh] bg-gray-800/80 m-auto rounded-3xl">
        <div className="border-b-[1px] pt-4 pb-3">
          <div className="flex justify-start font-bold text-[18px] ml-10">
            Experience
          </div>
        </div>
        <div>
          <div className="">
            <ComponentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentBody;
