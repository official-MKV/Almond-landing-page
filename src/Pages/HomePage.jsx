import React from "react";
import Nav from "../Components/Nav";
import CreditCard from "../assets/Card.svg";
import Social1 from "../assets/Vector(1).svg";
import Social2 from "../assets/Vector (2).svg";
import Social3 from "../assets/Vector.svg";
import { useState } from "react";

import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import Clock from "../assets/clock-50.png";
import Wallet from "../assets/wallet-green.png";
import X from "../assets/close.png";
import Prop from "../assets/prop_img.png";
import Backdrop from "../Components/Backdrop";
import { useRef } from "react";
import PopUp from "../Components/PopUp";
import { useEffect } from "react";
function HomePage() {
  const whyAlmond = useRef(null);
  const joinList = useRef(null);
  const [dropdown, setdropDown] = useState(false);
  const [bling, setBling] = useState(false);
  const closePopUp = () => {
    setdropDown(false);
  };
  const handleWhy = () => {
    whyAlmond.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleJoin = () => {
    joinList.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        setBling(true);
      } else {
        setBling(false);
      }
    });

    return () => {};
  }, []);

  return (
    <div className="md:overflow-x-hidden w-[100%] h-[100%] overflow-x-hidden">
      <div
        className={`md:w-[100px] md:h-[100px] h-[60px] w-[60px] bg-[#15F4B1] rounded-[50%] fixed animate-ping md:right-[30px] right-[0px] bottom-[30px] ${
          bling ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`md:w-[90px] md:h-[90px] h-[50px] w-[50px] bg-[#15F4B1]
         rounded-[50%] fixed md:right-[35px] right-[5px] bottom-[35px] text-center cursor-pointer
          flex justify-center items-center md:text-[11px] text-[8px] font-[500] text-[#4f4f4f] ${
            bling ? "block" : "hidden"
          } `}
        onClick={handleJoin}
      >
        Join the waitlist
      </div>
      <Backdrop dropdown={dropdown} close={closePopUp} />
      <PopUp dropdown={dropdown} close={closePopUp} />
      <Nav handleWhy={handleWhy} />
      <Hero
        dropdown={dropdown}
        close={closePopUp}
        setdropDown={setdropDown}
        joinList={joinList}
      />
      <div className="flex md:flex-row flex-col w-screen lg:gap-[150px] md:ml-[10px] md:gap-[10px] gap-[50px] justify-center items-center md:my-[100px] my-[50px] ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-[8px]"
        >
          <img
            src={Clock}
            className="lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] w-[40px] h-[40px]"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#15F4B1] text-[20px] md:text-[17px] w-[237px] font-[700]">
              Instant Transactions
            </p>
            <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
              Send and receive money in the blink of an eye. No problem, No
              reversals.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex gap-[8px] md:flex-row  "
        >
          <img
            src={X}
            className="lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] w-[40px] h-[40px]"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#15F4B1]   md:text-[17px]  text-[20px] w-[237px] font-[700]">
              Zero Transfer Fees
            </p>
            <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
              No hidden charges, no surprises. We're truly fee-free.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex gap-[8px]"
        >
          <img
            src={Wallet}
            className="lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] w-[40px] h-[40px]"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#15F4B1] text-[20px] w-[237px]  md:text-[17px]  font-[700]">
              Direct Wallet Linking
            </p>
            <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
              Seamlessly connect your Binance wallets, payday wallets, and more.
            </p>
          </div>
        </motion.div>
      </div>

      <div
        className="w-screen h-full overflow-y-hidden flex flex-col gap-[20px] items-center "
        ref={whyAlmond}
      >
        <div className="lg:w-[1200px] lg:h-[425px] md:w-[750px] md:h-[300px]  w-[344px] h-[212.5px] rounded-[30px] bg-[#7D5DF6] shadow-2xl">
          <div className="flex flex-row">
            <div className="lg:ml-[46px] ml-[27px] lg:w-[600px] md:w-[250px] lg:mt-[46px] mt-[10px] md:h-[320px]  flex flex-col justify-center">
              <p className="lg:text-[50px] md:text-[30px] text-[25px] font-[600] lg:w-[659px] md:w-[350px] w-[300px] text-[#FFF]">
                Access the Safest Investment Class with Almond
              </p>
              <p className="md:text-[15px] text-[7.5px] font-[300] text-[#FFF] md:w-[453px] w-[226.5px]">
                Explore the world of commodities and experience financial
                security like never before. With Almond Commodity Market, your
                investments are backed by the safest asset class. Invest with
                peace of mind.
              </p>
            </div>
            <img
              src={Prop}
              className="lg:right-[180px] lg:h-[500px] lg:relative absolute md:h-[300px]  md:block md:relative hidden lg:bottom-[75px] md:right-[10px] md:bottom-[20px] top-[95%] z-0"
            />
          </div>
        </div>
        <div className="flex lg:flex-row  md:flex-col flex-col justify-center items-center gap-[20px]">
          <div className="bg-[#ECE7FE] lg:w-[590px] lg:h-[475px] md:w-[750px]  md:h-[350px] w-[344px] h-[212.5px] rounded-[30px] flex flex-col  gap-[8px]">
            <div className="flex flex-col justify-center gap-[8px]  md:ml-[46px] ml-[27px] md:mt-[46px] mt-[10px]">
              <p className="lg:text-[45px] md:text-[30px] text-[22.5px] text-[#515151] font-[600] lg:w-[526px] md:w-[600px] w-[306.685px]">
                Unlock Financial Freedom with Almond Credit Cards
              </p>
              <p className="text-[#8A8A8A] md:text-[15px] text-[7.5px] font-[300] lg:w-[384px] md:w-[500px] w-[223.892px]">
                Experience financial freedom like never before with Almond
                Credit Cards, now offering an impressive{" "}
                <span className="text-[#7D5DF6] font-[700] text-[20px] transform rotate-x-12 hover:rotate-x-0 transition-transform duration-300">
                  {" "}
                  NGN100,000 overdraft
                </span>
                . These cards are your gateway to convenience, flexibility, and
                the power to navigate life's financial challenges with ease. Get
                ready to unlock a new era of financial control with Almond.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={CreditCard}
                className=" visible md:hidden lg:block hidden absolute md:w-[431px] md:h-[236px] w-[251.295px] h-[135px]"
              />
            </div>
          </div>
          <div className="bg-[#2C2156] lg:w-[590px] md:w-[750px] lg:h-[475px] md:h-[250px]  w-[344px] h-[212.5px] rounded-[30px] shadow-2xl">
            <div className="flex flex-col justify-center gap-[10px] md:ml-[46px] ml-[27px] md:mt-[46px] mt-[24px]">
              <p className="lg:text-[45px] md:text-[30px] text-[22.5px] text-[#FFF] font-[600] w-[478pxpx]">
                Instant Transactions
              </p>
              <p className="text-[#FDFDFD] md:text-[15px] text-[7.5px] font-[300] md:w-[384px] w-[223.892px]">
                Almond's Instant Transactions ensure that your financial
                activities happen at the speed of thought. Say goodbye to
                waiting for payments to process, and enjoy the immediate
                transfer of funds. With this feature, you'll experience true
                financial freedom and control, all in the palm of your hand
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-screen md:h-[400px] h-[223px] mt-[92px] bg-[#ECE7FE] rounded-tl-[80px] rounded-tr-[80px]">
          <div className="w-screen h-full flex justify-center items-center lg:gap-[100px] md:gap-[5px] gap-[20px]">
            <div className="flex flex-col gap-[20px] ">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Company
              </p>
              <span className="md:text-[15px] text-[7.5px] text-[rgb(138,138,138)] font-[300] flex flex-col gap-[2px]">
                <a
                  href="/#"
                  className="cursor-pointer   hover:underline hover:text-[#7D5DF6]  "
                >
                  About us
                </a>
                <a
                  href="/#"
                  className="cursor-pointer   hover:underline hover:text-[#7D5DF6]  "
                >
                  Blog
                </a>
                <a
                  href="/#"
                  className="cursor-pointer   hover:underline hover:text-[#7D5DF6]  "
                >
                  FAQ
                </a>
                <a className="cursor-pointer   hover:underline hover:text-[#7D5DF6]  ">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="flex flex-col gap-[20px] relative md:bottom-[32px] bottom-[20px] ">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Need Help
              </p>
              <span className="lg:text-[15px] md:text-[7px] text-[7.5px] text-[#8A8A8A] font-[300] flex flex-col gap-[2px]">
                <a className="hover:underline hover:text-[#7D5DF6] cursor-pointer">
                  support@almondnigeria.com
                </a>
              </span>
            </div>
            <div className="flex flex-col md:gap-[5px] gap-[20px]  relative lg:bottom-[32px] md:bottom-[20px]  bottom-[-px]">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Location
              </p>
              <ul className=" md:text-[15px] lg:w-[300px] md:w-[200px] w-[80px] text-[9px] lowercase text-[#8A8A8A] font-[300] flex flex-col gap-[2px]">
                <li>
                  16, IKOT MBO LAYOUT, MURTALA MOHAMMED HIGHWAY, CALABAR, CROSS
                  RIVER STATE, NIGERIA
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:gap-[20px] gap-[10px] relative md:bottom-[32px]  bottom-[20px]">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Socials
              </p>
              <div className="flex gap-[10px] md:gap-[30px] lg:gap-[54px] text-blue-500">
                <img
                  src={Social1}
                  className="w-[10px] lg:w-[30px] md:w-[20px]  cursor-pointer hover:text-[#7D5DF6]"
                />
                <img
                  src={Social2}
                  className="w-[10px] lg:w-[30px] md:w-[20px]  cursor-pointer"
                />
                <img
                  src={Social3}
                  className="w-[10px] lg:w-[30px] md:w-[20px]  cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
