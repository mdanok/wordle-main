import React, { useState, useLayoutEffect } from "react";

const letters = "ذضصثقفغعهخحجدشسيبلاتنمكطرئؤرةوزظ";

function Title({ title }) {
  const [text, setText] = useState(title);
  const [intervalId, setIntervalId] = useState(null);

  useLayoutEffect(() => {
    startAnimation();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function startAnimation() {
    let iteration = 0;

    clearInterval(intervalId);

    setIntervalId(
      setInterval(() => {
        setText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
        }

        iteration += 1 / 3;
      }, 60)
    );
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap');
      </style>
      <h1
        className="grow dark:text-white text-black"
        style={{ fontFamily: "Amiri Quran, serif", fontSize: "1.90rem" }}
      >
        {text}
      </h1>
    </>
  );
}

export default Title;
