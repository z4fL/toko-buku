import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? "" : "hidden"} onClick={handleScrollUp}>
      <button className="flex justify-center items-center fixed h-[30px] w-[30px] bottom-[5%] left-[90%] cursor-pointer text-2xl bg-slate-300 rounded-3xl shadow-slate-500 scale-110">
        <ArrowSmallUpIcon className="h-4 w-4 text-slate-900" />
      </button>
    </div>
  );
};

export default GoTopButton;
