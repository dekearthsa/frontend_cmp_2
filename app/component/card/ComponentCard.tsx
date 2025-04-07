"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination } from "swiper/modules";
import StructCard from "../../interface/Struct";

import "swiper/css";
import "swiper/css/pagination";

const staticProject: StructCard[] = [
  {
    projectName: "PROJECT 1",
    textData:
      "It is the 41st Millennium. For more than a hundred centuries the Emperor of Mankind has sat immobile on the Golden Throne of Earth. He is the master of mankind by the will of the gods and master of a million worlds by the might of His inexhaustible armies. He is a rotting carcass writhing invisibly with power from the Dark Age of Technology. He is the Carrion Lord of the vast Imperium of Man for whom a thousand souls are sacrificed every day so that He may never truly die.",
  },
  {
    projectName: "PROJECT 2",
    textData:
      "The Space Marines or Adeptus Astartes are foremost amongst the defenders of Humanity, the greatest of the Emperor of Mankind's warriors. They are barely Human at all, but superhuman; having been made superior in all respects to a normal man by a harsh regime of genetic modification, psycho-conditioning and rigorous training.",
  },
  {
    projectName: "PROJECT 3",
    textData:
      "The Adeptus Mechanicus is the official Imperial name within the Adeptus Terra for the Cult Mechanicus or Cult of the Machine based on Mars which provides the Imperium with its scientists, engineers and technicians.",
  },
  {
    projectName: "PROJECT 4",
    textData:
      "The Asuryani (Aeldarix dolosus) (Children of Asuryan in the Aeldari Lexicon, pronounced ah-SUR-ee-AH-nee), also called Craftworld Aeldari as they were named before the fall of their lost realm, or the Eldar as they were long known to outsiders, or even the Eldar of the Stars, are an ancient, humanoid alien species whose vast empire once extended the width and breadth of the known galaxy. The Asuryani are a kindred of the Aeldari species who now live on vast, city-like starships called craftworlds.",
  },
];

const ComponentCard = () => {
  const [projectData, setProjectData] = useState<StructCard[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setProjectData(staticProject);
  }, []);

  const handlerProjectDesc = () => {
    return (
      <div>
        <div className="text-[16px] text-center mt-3 mb-10 font-bold">
          {projectData[activeIndex].projectName}
        </div>
        <div className="ml-5 mr-5">
          <p>{projectData[activeIndex].textData}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div>{projectData.length === 0 ? "" : handlerProjectDesc()}</div>
      <div className="w-[1000px]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-gray-500 rounded-b-2xl"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {projectData.map((el: StructCard, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
                  {el.projectName}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ComponentCard;
