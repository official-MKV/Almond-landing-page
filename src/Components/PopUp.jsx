import React from "react";

import VerifiedIcon from "@mui/icons-material/Verified";
import CloseIcon from "@mui/icons-material/Close";

const PopUp = ({ close, dropdown }) => {
  return (
    <div
      className={` fixed top-[50%] left-[50%]
    translate-x-[-50%] translate-y-[-50%] md:w-[600px] md:h-[400px] w-[300px] h-[200px]
     bg-white z-50 rounded-[30px] flex flex-col justify-center items-center ${
       dropdown ? "block" : "hidden"
     }`}
    >
      <CloseIcon
        style={{
          position: "relative",
          bottom: "60px",
          left: "250px",
          cursor: "pointer",
        }}
        onClick={close}
      />
      <VerifiedIcon
        className=""
        style={{ width: "100px", height: "100px", color: "#15F4B1" }}
      />
      <span className="md:text-[60px] text-[30px] font-[500]">
        Thank You 🎉{" "}
      </span>
      <span className="text-[#7D5DF6]"> Stay Updated, for the launch</span>
    </div>
  );
};

export default PopUp;
