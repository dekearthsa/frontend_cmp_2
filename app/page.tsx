// import Image from "next/image";
import ComponentHeader from "./component/header/ComponentHeader";
import VideoBackground from "./component/videoBG/VideoBackground";
import ComponentBody from "./component/home/ComponentBody";
import ComponentHire from "./component/home/ComponentHire";
import ComponentBottom from "./component/home/ComponentBottom";
export default function Home() {
  return (
    <div className="">
      <div className="mt-10">
        <div className=" w-[70%] m-auto">
          <ComponentHeader />
        </div>
        <div className="mt-[120px]">
          <ComponentBody />
        </div>
        <div className="mt-[100px]">
          <ComponentHire />
        </div>
        <div className="">
          <ComponentBottom />
        </div>
      </div>
      <VideoBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none" />
    </div>
  );
}
