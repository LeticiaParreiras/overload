"use client";

import { IconContext } from "react-icons";
import { IoLogoTwitter, IoMdArrowRoundForward } from "react-icons/io";

import {
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="w-full h-fit gap-20 flex py-6 px-6 flex-col justify-evenly items-center overflow-hidden flex-wrap mb-8 "
    >
      <span className="flex  flex-wrap md:text-8xl text-center justify-center text-6xl font-normal font-['Bakbak_One'] tracking-widest gap-4">
        <h1 className="text-red-700">CONTACT</h1>
        <h1 className="text-white ">US</h1>
      </span>
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center overflow-hidden gap-8 ">
        <div className="w-1/2 flex  flex-col justify-center items-center text-center gap-8 ">
          <span className="text-white md:text-5xl flex-wrap text-center justify-center text-4xl font-normal font-['Bakbak_One'] uppercase tracking-widest  flex">
            <h2>news</h2> <h2 className="text-red-700">letter</h2>
          </span>
          <div className="flex px-2 py-2 w-full max-w-[400px] min-w-[300px] bg-white rounded-2xl inline-flex justify-between items-center overflow-hidden">
            <input
              className="w-5/6 bg-transparent outline-none"
              type="text"
              placeholder="email"
            />
            <button className="w-1/6 flex justify-end text-center">
              <IconContext.Provider
                value={{
                  color: "",
                  size: "2em",
                  className:
                    "text-red-800 hover:opacity-70 transition-opacity font-bold hover:opacity-75 cursor-pointer",
                }}
              >
                <IoMdArrowRoundForward />
              </IconContext.Provider>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 w-1/2">
          <IconContext.Provider
            value={{
              color: "white",
              size: "3em",
              className: "hover:opacity-75 cursor-pointer ",
            }}
          >
            <div className="flex justify-center gap-4">
              <SiInstagram />
              <IoLogoTwitter />
              <SiTiktok />
            </div>
            <div className="flex justify-center gap-4">
              <SiSpotify />
              <SiYoutube />
              <SiApplemusic />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
