import React from "react";
import Logo from "../assets/logo-adjusted.svg";
import CreditCard from "../assets/Card.svg";
import Home from "../assets/Home.svg";
import AppHome from "../assets/home.png";
import Social1 from "../assets/Vector(1).svg";
import Social2 from "../assets/Vector (2).svg";
import Social3 from "../assets/Vector.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase_init.js";
import MenuIcon from "@mui/icons-material/Menu";
import VerifiedIcon from "@mui/icons-material/Verified";

function HomePage() {
  const [dropdown, setdropDown] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const handleChange = (e) => {
    setEmailValue(e.target.value);
  };
  const close = () => {
    setdropDown(false);
  };
  const handleClick = async () => {
    try {
      const docRef = await addDoc(collection(db, "WaitList"), {
        email: emailValue,
      });
      setdropDown(true);
      setEmailValue("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="md:overflow-x-hidden w-[100%]">
      <div
        className={`w-[100%] h-[100%] fixed ${
          dropdown ? "block" : "hidden"
        } bg-black opacity-50 z-[20]`}
        onClick={close}
      ></div>

      <div
        className={` fixed top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%] md:w-[600px] md:h-[400px] w-[300px] h-[200px]
         bg-white z-20 rounded-[30px] flex flex-col justify-center items-center ${
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

      <div className="bg-[#F2EFFE] md:h-screen w-[100%] h-[398px] overflow-y-hidden ">
        <div className="flex pt-[20px] mx-[20px] lg:space-x-[30rem] sm:space-x-[9rem] md:space-x-[15rem] overflow-x-hidden">
          <span>
            <img
              className=" absolute w-[80px] md:w-[150px] top-[0px]"
              src={Logo}
            />
          </span>
          <span className="text-[#676767] md:inline-flex justify-center items-center hidden md:gap-[56px] text-[17px] font-[400]">
            <a className="hover:text-[#7D5DF6] cursor-pointer hover:text-[300] transition duration-[0.5s] ease-in-out hover:scale-150">
              Home
            </a>
            <a className="hover:text-[#7D5DF6] cursor-pointer hover:text-[300] transition duration-[0.5s] ease-in-out hover:scale-150">
              Products
            </a>
            <a className="hover:text-[#7D5DF6] cursor-pointer hover:text-[300] transition duration-[0.5s] ease-in-out hover:scale-150">
              FAQ
            </a>
            <a className="hover:text-[#7D5DF6] cursor-pointer hover:text-[300] transition duration-[0.5s] ease-in-out hover:scale-150">
              Blog
            </a>
          </span>
          <span className="text-[#7D5DF6] text-[16px]">
            <button className=" hidden md:block w-[150px] h-[50px] rounded-[30px] border-solid border-[#7D5DF6] border-[2px] hover:bg-[#7D5DF6] hover:text-white transition duration-[0.5s] ease-in-out ">
              Join Telegram
            </button>
          </span>
          <span className="relative ml-auto mr-[5px] cursor-pointer">
            {" "}
            <MenuIcon />
          </span>
        </div>
        <div className="md:mt-[20px]  mt-[80px] w-full items-center justify-center flex flex-col gap-[20px]">
          <p className="md:w-[742px] md:text-[71px] text-[35px] w-[371px]  text-center font-[700] text-[#515151]">
            The digital bank that will give you{" "}
            <span className="text-[#7D5DF6]">Zero</span> Headache
          </p>
          <div className="flex  overflow-x-hidden">
            <input
              className="md:w-[416px] md:h-[56px] w-[208px] h-[28px] rounded-tl-[20px] rounded-bl-[20px] text-center text-[#7D5DF6]"
              placeholder="johnsmith@gmail.com"
              value={emailValue}
              onChange={handleChange}
            />
            <button
              className="bg-[#15F4B1] md:w-[125px] md:h-[56px] w-[62.5px]
              hover:bg-[#11bb88]
             h-[28px] text-[8px] md:text-[15px]
             hover:text-black
             cursor-pointer rounded-tr-[20px] rounded-br-[20px]
              text-[#515151] font-[700]"
              onClick={handleClick}
            >
              Sign up
            </button>
          </div>
          <div>
            <img
              className="md:w-[300px] md:h-[550px] w-[80px] h-[160.5px]
            relative
            md:right-[0px] md:top-[0px]
            bottom-[25px]
            "
              src={AppHome}
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[520px] flex flex-col space-y-[50px] ">
        <div className="flex md:flex-row flex-col w-screen md:gap-[63px] space-y-[40px] justify-center items-center mt-[20px]">
          <div className="flex gap-[8px]">
            <span className="text-[60px]">🚀</span>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#515151] text-[20px] w-[237px] font-[700]">
                Instant Transactions
              </p>
              <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
                Send and receive money in the blink of an eye. No problem, No
                reversals.
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] md:flex-row flex-row-reverse">
            <span className="text-[60px]">💵</span>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#515151] text-[20px] w-[237px] font-[700]">
                Bill Payments Made Easy
              </p>
              <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
                Pay your bills with ease, no fuss
              </p>
            </div>
          </div>
          <div className="flex gap-[8px]">
            <span className="text-[60px]">🖥</span>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#515151] text-[20px] w-[237px] font-[700]">
                24/7 Customer Service
              </p>
              <p className="text-[#ADADAD] text-[12px] font-[400] w-[135px] text-left">
                Have questions? Our support team is here for you around the
                clock. Everything can be done online
              </p>
            </div>
          </div>
        </div>
        <div className=" md:flex hidden w-screen justify-center items-center text-[40px] font-[700]">
          <p className="w-[890px] text-center text-[#515151]">
            <span className="text-[#7D5DF6]">100%</span> Transparency. No hidden
            fees or surprises. We believe in complete transparency so you can
            bank with confidence.
          </p>
        </div>
      </div>
      <div className="w-screen h-full overflow-y-hidden flex flex-col gap-[20px] items-center ">
        <div className="md:w-[1200px] md:h-[425px] w-[344px] h-[212.5px] rounded-[30px] bg-[#7D5DF6]">
          <div className="md:ml-[46px] ml-[27px] md:w-[600px] md:mt-[46px] mt-[10px] md:h-[320px]  flex flex-col justify-center">
            <p className="md:text-[50px] text-[25px] font-[600] md:w-[659px] w-[329.5px] text-[#FFF]">
              Explore New Investment Horizons with Commodities Trading
            </p>
            <p className="md:text-[15px] text-[7.5px] font-[300] text-[#FFF] md:w-[453px] w-[226.5px]">
              Almond opens the door to commodities trading, empowering your
              investments like never before. Discover a world of financial
              opportunities with us. Start now and broaden your investment
              horizons! 🚀🌟
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-[20px]">
          <div className="bg-[#ECE7FE] md:w-[590px] md:h-[475px]  w-[344px] h-[212.5px] rounded-[30px] flex flex-col  gap-[8px]">
            <div className="flex flex-col justify-center gap-[8px]  md:ml-[46px] ml-[27px] md:mt-[46px] mt-[10px]">
              <p className="md:text-[45px] text-[22.5px] text-[#515151] font-[600] md:w-[526px] w-[306.685px]">
                Seamless Spending with Almond's Prepaid Credit Card 💳
              </p>
              <p className="text-[#8A8A8A] md:text-[15px] text-[7.5px] font-[300] md:w-[384px] w-[223.892px]">
                Introducing Almond's Prepaid Credit Card – the ultimate
                financial tool that puts you in control of your spending. With
                no hidden fees and unparalleled convenience, this card is your
                passport to a world of financial freedom. Experience worry-free
                transactions and take charge of your finances like never before.
                Get your Almond Prepaid Credit Card today and unlock a new era
                of financial flexibility!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={CreditCard}
                className=" hidden md:block absolute md:w-[431px] md:h-[236px] w-[251.295px] h-[135px]"
              />
            </div>
          </div>
          <div className="bg-[#2C2156] md:w-[590px] md:h-[475px]  w-[344px] h-[212.5px] rounded-[30px]">
            <div className="flex flex-col justify-center gap-[8px] md:ml-[46px] ml-[27px] md:mt-[46px] mt-[24px]">
              <p className="md:text-[45px] text-[22.5px] text-[#FFF] font-[600] w-[478pxpx]">
                Smart Expense Tracking for Financial Clarity
              </p>
              <p className="text-[#FDFDFD] md:text-[15px] text-[7.5px] font-[300] md:w-[384px] w-[223.892px]">
                Almond simplifies your financial life. Track expenses
                effortlessly, gain insights, and pave the way to financial
                clarity. Start today and watch your financial future flourish!
              </p>
            </div>
            <div className="flex justify-center ">
              <img
                src={Home}
                className="md:w-[192.811px] md:h-[334.285px] w-[96.405px] h-[167.142px] rotate-[-30deg]"
              />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-screen md:h-[400px] h-[223px] mt-[92px] bg-[#ECE7FE] rounded-tl-[80px] rounded-tr-[80px]">
          <div className="w-screen h-full flex justify-center items-center md:gap-[100px] gap-[20px]">
            <div className="flex flex-col gap-[20px] ">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Company
              </p>
              <ul className="md:text-[15px] text-[7.5px] text-[#8A8A8A] font-[300] flex flex-col gap-[2px]">
                <li>About us</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] relative md:bottom-[32px] bottom-[20px] ">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Need Help
              </p>
              <ul className="md:text-[15px] text-[7.5px] text-[#8A8A8A] font-[300] flex flex-col gap-[2px]">
                <li>support@almond.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]  relative md:bottom-[32px]  bottom-[20px]">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Location
              </p>
              <ul className="md:text-[15px] text-[7.5px] text-[#8A8A8A] font-[300] flex flex-col gap-[2px]">
                <li>About us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] relative md:bottom-[32px]  bottom-[20px]">
              <p className="md:text-[20px] text-[10px] text-[#515151]  font-[500]">
                Socials
              </p>
              <div className="flex gap-[27px] md:gap-[54px]">
                <img
                  src={Social1}
                  className="w-[15px] md:w-[30px] cursor-pointer"
                />
                <img
                  src={Social2}
                  className="w-[15px] md:w-[30px] cursor-pointer"
                />
                <img
                  src={Social3}
                  className="w-[15px] md:w-[30px] cursor-pointer"
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
