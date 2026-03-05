"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { IconContext } from "react-icons";
import { SiApplemusic, SiSpotify, SiYoutube } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { Music } from "../interface/music";



interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: Music |null;
}
export default function Modal({isOpen, onClose, song}: ModalProps) {

  if (!isOpen || song==null) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 "
    >
        {/* Overlay: O fundo escuro que fecha ao clicar */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xs" 
        onClick={onClose} 
      />
      <div
        className={`w-8/10 h-9/10 px-6 bg-black z-100 relative flex flex-col justify-center items-center my-10 gap-3 `}>
      <div className="absolute -top-0 right-0 ">
                  <button onClick={onClose}className="absolute -top-0 right-0 text-white text-3xl font-bold hover:opacity-60 transition-opacity font-['Bakbak_One'] cursor-pointer"><IoCloseSharp /></button>
        </div>        
        <div className="w-32 h-32 xl:w-64 xl:h-64   relative">
                <Image className="rounded-[100%]" src={urlFor(song.imageUrl).url()}
                  fill
                  objectFit="cover"
                  priority
                  alt={song.name}
                  />
      </div>
      <div className="flex text-center flex-wrap justify-center">
          <span className="text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px] ">
            LISTEN
          </span>
          <span className="text-white text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">
            NOW
          </span>
        </div>
      <h2 className="text-8xl font-normal font-grape text-white leading-[1.24px]">{song.name}</h2>
      <IconContext.Provider value={{ color: "white", size:'4em', className:"bg-red-700 p-1 rounded-lg hover:opacity-75 cursor-pointer "}}>
      <div className="flex flex-row gap-8 mt-18">
        <a href={song.spotify} >
          <SiSpotify />
        </a>
      <a href={song.youtube}>
        <SiYoutube />
      </a>
        <a href={song.appleMusic}>
          <SiApplemusic/>
          </a>
      </div>
</IconContext.Provider>;
    </div>
    </div>
  );
}