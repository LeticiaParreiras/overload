import Image from "next/image";

export default function About() {
  return (
    <>
      <div
        id="About"
        className="w-full-screen min-h-screen md:h-[900px] px-12 py-24 flex flex-col md:flex-row justify-between items-center overflow-hidden"
      >
        <div className="w-full md:w-[45%] flex flex-col justify-center items-center gap-6 mb-12 md:mb-0">
          <h1 className="self-stretch text-center justify-start text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">
            ABOUT
          </h1>
          <p className="w-full text-justify text-white  text-lg md:text-2xl font-medium leading-relaxed tracking-wide font-asap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mi sem. Pellentesque non bibendum nisl. Donec varius consequat mi, nec aliquet dolor imperdiet eu. Fusce ullamcorper consequat lectus et ullamcorper. Duis est sapien, lobortis non ornare nec, ultricies quis mi. Duis auctor pretium pellentesque.
          </p>
        </div>
        <div className="w-full md:w-[50%] h-[300px] md:h-full relative">
          <Image
            src="/about.png"
            alt="Foto da Banda"
            fill
            className="object-contain"
          ></Image>
        </div>
      </div>
    </>
  );
}
