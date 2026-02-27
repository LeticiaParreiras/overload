import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div
        className="w-[100%] self-stretch h-[900px] relative shadow-home"
        id="Home"
      >
       
        <Image
          src="/home.webp"
          alt="Foto da Banda"
          fill
          priority
          className="object-cover z-0 "
        />
        <div className="relative z-20 flex items-center justify-center h-full w-full">
          <Image
            src="/logo.png"
            alt="Logo da Banda"
            width={1028}
            height={24}
            priority
            className="object-contain "
          />
        </div>
      </div>
    </>
  );
}
