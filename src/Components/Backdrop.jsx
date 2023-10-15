import React from "react";

const Backdrop = ({ dropdown, close }) => {
  return (
    <div>
      <div
        className={`w-[100%] h-[100%] fixed ${
          dropdown ? "block" : "hidden"
        } bg-black opacity-50 z-[50]`}
        onClick={close}
      ></div>
    </div>
  );
};

export default Backdrop;
