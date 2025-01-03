import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["student", "developer", "designer", "writer",],
    loop: 0,
    typeSpeed: 250,
    deleteSpeed: 200,
  })

  return(
    <main className="m-10 sm:m-20 md:m-40 flex-row">
      <h1 className="text-5xl font-bold text-main-black leading-tight">
        <span className="block text-7xl my-2">👋</span>
        <span className="block">Hey, I’m Jerry </span>
        <span className="block">
          I’m a <span className="text-main-blue">{text}<Cursor/></span>
        </span>
      </h1>
      <h2 className="w-3/4 md:w-1/2 text-second-gray font-medium text-2xl my-5">
        I try to do a lot of things at once but I mainly wanna develop cool stuff before we all die, check out my projects if you want to &lt;3
      </h2>
    </main>
  );
}