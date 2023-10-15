import React from "react";
import AppHome from "../assets/home.png";
import { motion } from "framer-motion";
import { useState } from "react";
import loadingimg from "../assets/loading.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase_init.js";
import { useEffect } from "react";
const Hero = ({ joinList, setdropDown }) => {
  const [emailValue, setEmailValue] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
    validateEmail(e.target.value);
    setEmailValue(e.target.value);
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      console.log(emailValue);
      const docRef = await addDoc(collection(db, "WaitList"), {
        email: emailValue,
      });
      setdropDown(true);
      setEmailValue("");
      setLoading(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };
  return (
    <div
      className="bg-[#F2EFFE] lg:h-screen md:h-[800px] w-[100%] h-screen overflow-y-hidden overflow-x-hidden"
      ref={joinList}
    >
      <div className="md:mt-[180px]  mt-[90px] w-full   flex flex-col gap-[10px] text-center justify-center items-center ">
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -50 }}
          transition={{
            type: "spring",
            damping: 5,
            duration: 2,
            stiffness: 100,
            staggerChildren: 0.15,
            delayChildren0: 0.04,
          }}
          className="  md:w-[500px] md:text-[50px] text-[45px] w-[371px]  md:text-left  text-center font-[700] md:text-[#515151] text-black z-10"
        >
          What is <span className="text-[#7D5DF6]">Almond ?</span>
        </motion.p>
        <motion.p className="md:w-[500px] w-[250px] justify-center md:text-left text-center text-[#515151] md:text-[15px] text-[10px]">
          Almond is a cutting-edge digital banking app that combines the
          <span className="text-[#7D5DF6] font-[500] text-[21px]">
            {" "}
            Efficiency{" "}
          </span>{" "}
          of Kuda, the{" "}
          <span className="text-[#7D5DF6] font-[500] text-[21px]">
            Speed
          </span>{" "}
          of Opay, and the{" "}
          <span className="text-[#7D5DF6] font-[500] text-[21px]">
            Reliability
          </span>{" "}
          of MoniePoint, offering a revolutionary online banking experience. It
          provides 100% transparency with{" "}
          <span className="text-[#7D5DF6] font-[500] text-[21px]">
            {" "}
            zero transfer fees
          </span>{" "}
          , personalized ATM cards, direct wallet linking, instant transactions,
          and access to investment opportunities through NGX and{" "}
          <span className="text-[#7D5DF6] font-[500] text-[21px]">
            Almond Commodity exchange
          </span>{" "}
          (ACX) . With exceptional customer service, Almond is the future of
          banking, offering reliability, speed, and security in the palm of your
          hand.
        </motion.p>
        <div className="flex  overflow-x-hidden z-20 mt-[20px]  ml-[50px] md:ml-[0px]  ">
          <input
            className="
            md:w-[416px] md:h-[56px] md:text-[15px]
             text-[10px] w-[208px] h-[28px] rounded-tl-[20px]
             rounded-bl-[20px] text-center
              text-[#7D5DF6] style-none z-0"
            placeholder="johnsmith@gmail.com"
            value={emailValue}
            onChange={handleChange}
          />
          <button
            className={`${
              error ? "bg-[#11bb88]" : "bg-[#15F4B1] "
            } md:w-[125px] md:h-[56px] w-[62.5px]
            flex
            justify-center
            items-center
         h-[28px] text-[8px] md:text-[15px]
         hover:text-black
         cursor-pointer rounded-tr-[20px] rounded-br-[20px]
          text-[#515151] font-[700] `}
            onClick={handleClick}
            // disabled={!error}
          >
            {loading ? (
              <img
                src={loadingimg}
                className="animate-spin w-[20px] h-[20px]"
              />
            ) : (
              <p>Join Now</p>
            )}
          </button>
        </div>
        <div className="lg:block md:hidden hidden w-[35rem] h-[35rem] rounded-[50%] bg-[#7D5DF6] absolute right-[60px] top-[120px] z-0"></div>

        <motion.img
          animate={{ y: [0, -10, -20, -20, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className=" lg:w-[280px] lg:h-[480px] md:w-[130px] md:h-[230px] md:block hidden lg:absolute
          lg:right-[13%] lg:top-[26%]
          md:absolute
          md:top-[70%] md:right-[320px]
          visible

        "
          src={AppHome}
        />
        {/* <motion.img className="absolute" src={Blob} /> */}
      </div>
      {/* <div>CBN Insured</div> */}
    </div>
  );
};

export default Hero;
