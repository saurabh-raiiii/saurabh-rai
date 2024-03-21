import "./App.css";
import { SiMinutemailer } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <nav className="bg-gradient-to-r from-[#8121D0] to-[#140d1c] w-screen h-20">
        <div className="flex flex-row justify-around items-center h-full">
          <div className="text-white text-3xl">
            <span>&#60;&#8260;&#62;</span>
          </div>
          <div className="flex flex-row text-white gap-10 quicksand font-semibold">
            <div className="text-l">Home</div>
            <div className="text-l">About</div>
            <div className="text-l">Skills</div>
            <div className="text-l">Projects</div>
          </div>
          <div>
            <button className="flex flex-row gap-1 h-8 items-center bg-white rounded px-5 py-3 quicksand font-semibold">
              <SiMinutemailer className="h-11" />
              Hire Me!
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-[#331C52] to-[#140d1c] h-[40vh] md:h-[60vh] ">
        <div className="w-[90%] m-auto h-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center w-[50%] h-full">
            <p className="text-2xl md:text-4xl font-mono text-white font-700 underline">
              Saurabh Rai
            </p>
            <p className="text-5xl md:text-8xl text-[#DCCFED] font-bold">
              Coder & Developer
            </p>

            {/* Icons */}
            <IconContext.Provider
              value={{ color: "#DCCFED" }}
              
            >
              <div className="flex flex-row m-1 gap-3 items-start">
                <FaLinkedinIn  className=" w-6 h-6 md:w-8 md:h-8 "/>
                <PiGithubLogoFill className=" w-6 h-6 md:w-8 md:h-8"/>
                <FaTwitter className=" w-6 h-6 md:w-8 md:h-8"/>
              </div>
            </IconContext.Provider>
          </div>

          {/* Image Section */}
          <div className="w-[50%]"></div>
        </div>
      </div>

      {/* skills on Language */}
      <div className="flex flex-row items-center justify-around m-auto bg-[#E1EBED] md:h-20 ">
        <div className="flex justify-normal items-center gap-2">
          <span className="font-bold text-7xl"> 5 </span>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-mono"> Projects </span>
            <span className="text-xl font-mono"> Completed </span>
          </div>
        </div>
        {/* bg-[#291C3A]  */}
        <div className="h-16 w-auto flex items-center justify-center gap-6">
          <TbBrandCpp className="h-14 w-14 md:h-16 md:w-16" />
          <RiJavascriptFill className="h-14 w-14 md:h-16 md:w-16" />
          <FaReact className="h-14 w-14 md:h-16 md:w-16" />
          <IoLogoNodejs className=" hidden md:h-16 md:w-16 md:block " />
          <SiExpress className="hidden md:h-16 md:w-16 md:block" />
          <SiMongodb className="hidden md:h-16 md:w-16 md:block" />

        
        </div>
      </div>
    </>
  );
}

export default App;
