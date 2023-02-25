import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ iconClass, link, title, subtitle }) => {
  return (
    <a href={link}>
      <div className="card">
        <div className="card-content bg-zinc-300 dark:bg-zinc-900">
          <div className="card-image">
            <FontAwesomeIcon className="itag" icon={iconClass} />
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <FontAwesomeIcon className="itag" icon={iconClass} />
              <div className="card-info-title">
                <h3 className="dark:text-white text-neutral-700	">{title}</h3>
                <h4 className="dark:text-gray-400 text-neutral-600">
                  {subtitle}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
