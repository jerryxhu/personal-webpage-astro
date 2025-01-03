export default function Header() {
  return (
    <header className="sticky top-0 text-main-black bg-inherit">
      <nav className="flex justify-between items-center h-20 mx-10 sm:mx-20 md:mx-40">
        <a href="/" className="font-bold text-2xl">©Jerry Hu—’25</a>
        <button id="menu-btn" class="block md:hidden text-xl">
          ☰
        </button>
        <ul className="hidden md:flex space-x-8 text-xl font-medium">
          <li><a className="hover:text-main-blue transition ease-in-out duration-200" href="/">home</a></li>
          <li><a className="hover:text-main-blue transition ease-in-out duration-200" href="/">projects</a></li>
          <li><a className="hover:text-main-blue transition ease-in-out duration-200" href="/">resume</a></li>
          <li><a className="hover:text-main-blue transition ease-in-out duration-200" href="/">contact me</a></li>
        </ul>
      </nav>
    </header>
  );
}