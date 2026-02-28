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
        className={`w-[672px] h-[300px] px-6 py-40 bg-black z-100 relative `}
        
      >
        <div className="absolute -top-0 right-0 ">
                  <button onClick={onClose}
          className="absolute -top-0 right-0 text-white text-3xl font-bold hover:opacity-60 transition-opacity font-['Bakbak_One'] cursor-pointer">X</button>
                </div>
      </div>
    </div>
  );
}