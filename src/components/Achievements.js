import resume from "../fullstackresume.webp";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-[124px] px-[36px] flex flex-col items-center justidy-center bg-fire/75"
    >
      <h2 className="text-[72px] text-center font-bold text-white leading-[1] mb-[32px]">
        My Achievements
      </h2>
      <img src={resume} />
    </section>
  );
}
