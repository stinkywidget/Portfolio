import mysql from "../mysql.webp";
import node from "../node.png";
import react from "../react.png";

export default function TechStack() {
  return (
    <section id="stack" className="py-[124px] px-[36px]">
      <div className="max-w-[1000px] mx-auto flex gap-[64px]">
        <div className="w-2/3">
          <h2 className="font-bold text-[72px] leading-[1] text-purple mb-[32px]">
            Tech I've been using lately.
          </h2>
          <p>
            As a passionate developer, my enthusiasm for the MERN stack combined
            with MySQL knows no bounds. This powerhouse combination of
            cutting-edge technologies unleashes a whirlwind of creativity and
            efficiency in web development. The MERN stack, featuring Express.js,
            React.js, and Node.js, forms an unstoppable trio for crafting
            modern, dynamic web applications.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[16px] w-1/3 flex-wrap">
          <img
            className="w-[125px] h-[125px] basis-full rounded-[4px] object-contain border-purple"
            src={react}
          />
          <img
            className="w-[125px] h-[125px] rounded-[4px] object-contain border-purple"
            src={node}
          />
          <img
            className="w-[125px] h-[125px] rounded-[4px] object-contain border-purple"
            src={mysql}
          />
        </div>
      </div>
    </section>
  );
}
