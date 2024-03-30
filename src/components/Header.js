export default function Header() {
  return (
    <nav className="py-[16px] px-[36px] w-full border-b border-black/25">
      <div className="max-w-[1440px] mx-auto flex items-end justify-between">
        <a
          href="#home"
          className="flex flex-col gap-[4px] font-bold leading-[0.75] text-[24px]"
        >
          <p>Olivia</p>
          <p>Goldsmith</p>
        </a>
        <ul className="flex gap-[32px] font-bold leading-[0.75]">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
