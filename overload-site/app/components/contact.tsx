"use client";

import { IconContext } from "react-icons";
import { IoLogoTwitter, IoMdArrowRoundForward } from "react-icons/io";



import { SiApplemusic, SiInstagram, SiSpotify, SiTiktok, SiYoutube } from "react-icons/si";

export default function Contact(){
    return(
        <div id="Contact" className="w-full min-h-screen gap-20 flex flex-col justify-center items-center overflow-hidden flex-wrap">
            <span className="flex  md:text-8xl  text-7xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px] ">
                <h1 className="text-red-700">CONTACTS</h1>
                <h1 className="text-white ">US</h1>
            </span>
            <div className="w-full flex flex-col md:flex-row justify-center items-center overflow-hidden px-12 gap-8 ">
            <div className="w-1/2 flex flex-col justify-center items-center text-center gap-8 ">
                <span className="text-white md:text-5xl  text-4xl font-normal font-['Bakbak_One'] uppercase leading-8 tracking-[8px]  flex">
                    <h2>news</h2> <h2 className="text-red-700">letter</h2>
                </span>
                <div className="flex px-2 py-2 w-full max-w-[400px] min-w-[300px] bg-white rounded-2xl inline-flex justify-between items-center overflow-hidden">
                    <input className="w-5/6 bg-transparent outline-none"type="text" placeholder="email"/>
                        <button className="w-1/6 flex justify-end text-center">
                            <IconContext.Provider value={{ color: "", size:'2em', className:"text-red-800 hover:opacity-70 transition-opacity font-bold hover:opacity-75 cursor-pointer"}}>
                            <IoMdArrowRoundForward />
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        
            <div className="flex flex-col justify-center gap-4 w-1/2">
                <IconContext.Provider value={{ color: "white", size:'3em', className:"hover:opacity-75 cursor-pointer "}}>
                        <div className="flex justify-center gap-4">
                            <SiInstagram  />
                            <IoLogoTwitter />
                            <SiTiktok  />
                        </div>
                        <div className="flex justify-center gap-4">
                            <SiSpotify  />
                            <SiYoutube  />
                            <SiApplemusic/>
                        </div>
                    </IconContext.Provider> 
                    </div>
            </div>
            </div>

    )
}