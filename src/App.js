import React, { useState } from "react";
import Card from "./card/Card";
import "./App.css";
import NavBar from "./navbar/navbar.js";
import Body from "./body/body.js";
import Footer from "./modals/footer";
import { InfoModal } from "./modals/InfoModel";
import { library } from "@fortawesome/fontawesome-svg-core";
import Switcher from "./darkmode/switcher";
import {
  faBookQuran,
  faPerson,
  faDna,
  faComputer,
  faEarthAmericas,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBookQuran,
  faPerson,
  faDna,
  faComputer,
  faEarthAmericas,
  faHospital
);
const Cards = () => {
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <body dir="rtl" className="bg-neutral-100 dark:bg-zinc-900">
      <div>
        <NavBar setIsInfoModalOpen={setIsInfoModalOpen} />
        <Body />
        <InfoModal
          isOpen={isInfoModalOpen}
          handleClose={() => setIsInfoModalOpen(false)}
        />
        <div
          id="cards"
          className="warp grid-cols-3 gap-4 grid items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          <Card
            iconClass="fa-book-quran"
            title="قرآنيات"
            link="https://arquran.vercel.app/"
            subtitle="كل يوم كلمة قرآنية جديدة لتحدي معلوماتك الدينية"
          />
          <Card
            iconClass="fa-person"
            title="أسملي"
            link="https://arnames.vercel.app/"
            subtitle="كل يوم اسم جديد لتحدي معلوماتك واضافة اسماء جديدة الى قاموسك"
          />
          <Card
            iconClass="fa-dna"
            title="بايولوجيا"
            subtitle="كل يوم كلمة في علم الاحياء جديدة لتحدي معلوماتك البايولوجية"
          />
          <Card
            iconClass="fa-earth-americas"
            title="عاملي"
            subtitle="كل يوم كلمة عامة جديدة لتحدي معلوماتك العامة"
          />
          <Card
            iconClass="fa-computer"
            title="حاسوبتلي"
            subtitle="كل يوم كلمة حاسوبية جديدة لتحدي معلوماتك الحاسوبية"
          />
          <Card
            iconClass="fa-hospital"
            title="طبية"
            subtitle="كل يوم كلمة طبية جديدة لتحدي معلوماتك الطبية"
          />
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default Cards;
