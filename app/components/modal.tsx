"use client";
import { useState } from "react";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function Modal({isOpen, onClose}: ModalProps) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);
  if (!isOpen) return null;
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
        className={` w-[672px] h-[300px] px-6 py-40 bg-black z-100 justify-center `}
        
      >
        <div className="relative flex items-start justify-items-end text-right z-20">
                  <Image src="/play.svg" width={72} height={72} alt="play" />
                </div>
      </div>
    </div>
  );
}
