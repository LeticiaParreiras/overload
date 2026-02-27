import Image from "next/image";

export default function Listen() {
  const songs = [
    { name: "overlook" },
    { name: "overtime" },
    { name: "overpower" },
  ];
  return (
    <>
      <div
        id="Listen"
        className="w-full min-h-screen md:h-[900px] py-12 gap-40 flex flex-col justify-center overflow-hidden"
      >
        <div className="text-center">
          <span className="text-red-700 text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">
            LISTEN{" "}
          </span>
          <span className="text-white text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">
            NOW
          </span>
        </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center mt-40 items-center gap-32 relative">
            {songs.map((song) => (
              <div
                key={song.name}
                className="text-center justify-start text-white text-6xl font-normal font-grape leading-10"
              >
                <div className="w-64 h-64 xl:w-80 xl:h-80 bg-blend-linear-burn bg-red-700/90 outline outline-[11px] outline-white mb-8 rounded-sm relative">
                <Image
                src={`/${song.name}.jpg`}
                fill
                priority
                alt={song.name}
                />
                </div>
                {song.name}
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
