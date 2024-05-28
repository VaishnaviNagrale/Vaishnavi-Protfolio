import React from "react";
import { IconContext } from "react-icons";

function EduCard({ educt, isFirstCard }) {
  const { icon, name, duration, course } = educt;

  const cardStyle = isFirstCard
    ? "timeline-start md:text-end mb-10"
    : "timeline-end md:text-start mb-10";

  return (
    <div>
      <IconContext.Provider value={{ size: "2rem" }}>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className={`timeline-middle ${isFirstCard ? "text-right" : "text-left"} m-2`}>
              <div
                className="rounded-full bg-gray-300 text-black flex items-center justify-center w-12 h-12"
              >
                {icon}
              </div>
            </div>
            <div className={cardStyle}>
              <time className="font-mono italic">{duration}</time>
              <div className="text-lg font-black">{course}</div>
              <div>{name}</div>
            </div>
            <hr />
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
}

export default EduCard;
