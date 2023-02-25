import React from "react";
import Title from "./title.js";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Switcher from "../darkmode/switcher";

export const NavBar = ({ setIsInfoModalOpen }) => {
  return (
    <div>
      <div
        style={{ width: "96%", paddingBottom: "10px" }}
        className="mx-auto mb-1 flex items-center"
      >
        <div className="grow text-white">
          <Title title={"وَردلِي"} />
        </div>
        <div className="flex">
          <Switcher />
          <InformationCircleIcon
            className="mr-0 mt-4 h-8 w-full cursor-pointer dark:stroke-white stroke-black"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
      </div>
      <hr className="my-2 sm:mx-auto border-gray-500 lg:my-4" />
    </div>
  );
};

export default NavBar;
