
import Image from "next/image";

export default function About() {
  return (
    <>
     <div id="About" className="w-fill h-[900px] px-12 py-24 inline-flex justify-between items-center overflow-hidden">
    <div className="w-[42%] inline-flex flex-col justify-center items-center gap-6">
        <div className="self-stretch text-center justify-start text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">ABOUT</div>
        <div className="self-stretch h-80 text-justify justify-start text-white text-3xl font-medium leading-9 tracking-wide"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mi sem. Pellentesque non bibendum nisl. Donec varius consequat mi, nec aliquet dolor imperdiet eu. Fusce ullamcorper consequat lectus et ullamcorper. Duis est sapien, lobortis non ornare nec, ultricies quis mi. Duis auctor pretium pellentesque.</div>
    </div>
    <div className="w-[58%]">
        <Image 
        src="/about.png"
        alt="Foto da Banda"
        width={500}
        height={500}

        className="object-cover h-full w-full"
        ></Image>
    </div>

   
</div>
      </>
      )
}