import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="w-[100%] h-10 px-32 py-0.5 bg-stone-950/40 inline-flex justify-center items-center gap-24 overflow-hidden position: fixed z-50 w-full">
        <div className="text-center justify-start text-white text-base font-normal font-['Bakbak_One'] hover:text-red-700 cursor-pointer transition-colors">
          <Link href="#Logo" >HOME</Link> 
        </div>
        <div className="text-center justify-start text-white text-base font-normal font-['Bakbak_One'] hover:text-red-700 cursor-pointer transition-colors">
          <Link href="#About" scroll={true}>ABOUT</Link>
        </div>
        <div className="text-center justify-start text-red-700 text-base font-normal font-['Bakbak_One'] hover:text-white cursor-pointer transition-colors">
          LISTEN
        </div>
        <div className="text-center justify-start text-white text-base font-normal font-['Bakbak_One'] hover:text-red-700 cursor-pointer transition-colors">
          SHOWS
        </div>
        <div className="text-center justify-start text-white text-base font-normal font-['Bakbak_One'] hover:text-red-700 cursor-pointer transition-colors">
          CONTACT
        </div>
      </div>
      </>
      )
}