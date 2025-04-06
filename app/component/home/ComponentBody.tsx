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
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="mt-10 ml-4 mr-4">
              <h2 className="mb-10 font-bold">Project A</h2>
              <p>
                Is a keyword representing the largest minimal content
                contribution of the grid items occupying the grid track. For
                example, if the first element of the grid track contains the
                sentence Repetitio est mater studiorum and the second element
                contains the sentence Dum spiro, spero, minimal content
                contribution will be defined by the size of the largest word
                among all of the sentences in the grid elements - studiorum.
              </p>
            </div>
            <div className="">
              <ComponentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentBody;
