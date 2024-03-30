import portrait from "../newyears.png";
import blob from "../blob.webp";

export default function Hero() {
  return (
    <section id="home" className="pt-[124px] pb-[200px] px-[36px]">
      <div className="max-w-[1000px] mx-auto flex items-center gap-[32px]">
        <div className="flex flex-col gap-[16px] w-2/3">
          <h1 className="font-bold text-[96px] leading-[1] text-purple">
            Hi, I&apos;m Olivia.
          </h1>
          <h2 className="text-[32px] font-bold text-black">
            Full Stack Web Developer
          </h2>
          <p className="text-black max-w-[350px]">
            Chasing perfection in design and development. Based in Seattle,
            Washington.
          </p>
          <a
            href="#about"
            className="py-[8px] px-[16px] rounded-[4px] w-fit bg-purple text-white font-bold mt-[16px]"
          >
            About Me
          </a>
        </div>
        <div className="w-1/3 flex items-center">
          <div className="relative bg-purple/25 shadow-[0_0_10px_rgb(0,0,0,0.33)] rounded-full overflow-hidden max-h-[400px] max-w-[400px]">
            <img
              src={portrait}
              className="scale-[1.25] relative top-[40px] left-[40px] drop-shadow-[0_0_50px_#6c0c6c]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
