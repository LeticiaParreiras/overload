"use client";

import { IconContext } from "react-icons";
import { IoLogoTwitter } from "react-icons/io";

import { SiApplemusic, SiInstagram, SiSpotify, SiTiktok, SiYoutube } from "react-icons/si";

export default function Contact(){
    return(
        <div id="Contact" className="w-full min-h-screen py-12 gap-20 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px] ">CONTACT</h1>
            <div>
                <div className="flex px-2 py-5 bg-white rounded-2xl inline-flex justify-start items-center gap-64 overflow-hidden">
                    <input className=" flex-1 bg-transparent outline-none"type="text" placeholder="email"/>
                    <button className="text-red-800 hover:opacity-70 transition-opacity text-2xl font-bold ml-4">
        &gt;
      </button>
                </div>
            </div>
            <IconContext.Provider value={{ color: "white", size:'3em', className:"hover:opacity-75 cursor-pointer "}}>
                <div className="flex flex-wrap gap-4">
                    <SiInstagram  />
                    <IoLogoTwitter />
                    <SiTiktok  />
                    <SiSpotify  />
                    <SiYoutube  />
                    <SiApplemusic/>
                </div>
                </IconContext.Provider>
                
            </div>

    )
}