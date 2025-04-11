// components/TimelineItem.tsx
import React, { useRef, useEffect, useState } from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const ComponentTimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative mb-8 border-l-4 border-blue-500 pl-6 
        transition-opacity transition-transform duration-700 ease-out 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {/* จุดกลมแสดงตำแหน่ง Timeline */}
      <div
        className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"
        style={{ content: "" }}
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <span className="text-sm text-gray-600">{date}</span>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ComponentTimelineItem;
