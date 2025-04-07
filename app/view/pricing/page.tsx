import ComponentHeader from "../../component/header/ComponentHeader";
import VideoBackground2 from "../../component/videoBG/VideoBackground2";

const PricingPage = () => {
  return (
    <div>
      <div className="mt-10">
        <div className=" w-[70%] m-auto ">
          <ComponentHeader />
        </div>
      </div>
      <VideoBackground2 />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none" />
    </div>
  );
};

export default PricingPage;
