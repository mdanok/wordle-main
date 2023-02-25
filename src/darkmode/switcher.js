import { useState } from "react";
import useDarkSide from "./darkmode";
import { SunIcon } from "@heroicons/react/outline";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <SunIcon
      checked={darkSide}
      onClick={toggleDarkMode}
      className="ml-4 mt-4 h-8 w-full cursor-pointer dark:stroke-white stroke-black"
    />
  );
}
