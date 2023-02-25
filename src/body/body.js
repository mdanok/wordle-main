import React from "react";

const Body = ({ iconClass, title, subtitle }) => {
  return (
    <div className="text-center my-8">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Almarai:wght@800&family=Cairo:wght@300&display=swap');
      </style>
      <div
        className="mx-auto mb-4 flex items-center"
        style={{ fontFamily: '"Cairo", sans-serif' }}
      >
        <p className="h1 text-center text-lg leading-10 font-bold text-red-500 sm:text-xl lg:text-2xl">
          <span className="dark:text-white text-black">
            تحدى نفسك كل يوم&nbsp;
          </span>
          <span className="magic">
            <span className="magic-text">وردلي لعبة للاذكياء&nbsp;</span>
          </span>
          <span className="dark:text-white text-black">
            واصحاب العقول الفذة شارك اليوم.
          </span>
        </p>
      </div>
      <button
        type="button"
        class="text-white	 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-blue-800 font-large rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
      >
        ابدأ بتحدي نفسك بالضغط ادناه 🔽
      </button>
    </div>
  );
};

export default Body;
