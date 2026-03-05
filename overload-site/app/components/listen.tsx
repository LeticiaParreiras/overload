"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import { getMusics } from "../function/getMusics";
import { urlFor } from "../lib/sanity";
import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";

import { Music } from "../interface/music";

export default function Listen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [songs, setSongs] = useState<Music[]>([]);
  const [loading, setLoading] = useState(true);
  const [songModal, setSongModal] = useState<Music | null>(null);

  
  useEffect(() => {
    async function loadData() {
      const data = await getMusics();
      setSongs(data);
      setLoading(false);
      console.table(data)
    }
    loadData();
  }, []); // [] significa que executa apenas uma vez

  if (loading) return <div className="text-white text-center py-20"><p>Loading...</p></div>;
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} song={songModal}/>
      <div
        id="Listen"
        className="w-full min-h-screen py-12 gap-20 flex flex-col justify-center overflow-hidden"
      >
        <div className="flex text-center flex-wrap justify-center">
          <span className="text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px] ">
            LISTEN
          </span>
          <span className="text-white text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">
            NOW
          </span>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center mt-12 items-center gap-32 relative">
          {songs.map((song: Music) => (
            <div
              key={song._id}
              onClick={() => {
                setIsModalOpen(true)
                 setSongModal(song)}}
              className="text-center justify-start text-white  text-6xl font-normal font-grape leading-10"
            >
              <div className="w-64 h-64 xl:w-80 xl:h-80 bg-blend-linear-burn bg-red-700/90 outline outline-[11px] outline-white mb-8 rounded-sm relative">
                <Image
                  className="z-4"
                  src={urlFor(song.imageUrl).url()}
                  fill
                  priority
                  alt={song.name}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <IconContext.Provider value={{ color: "white", size:'2em', className:"hover:opacity-75 cursor-pointer "}}>
                  <FaPlay/> 
                  </IconContext.Provider>
                </div>
              </div>
              {song.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}