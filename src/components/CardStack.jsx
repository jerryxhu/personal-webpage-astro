import { icons } from "./icons.js";

export default function Card({ data, title, index }) {
  return(
    <article className="border-[1px] border-main-black rounded-[30px] w-[500px] h-[525px] hover:border-main-blue hover:shadow-[0_0_50px_5px_rgba(85,182,239,0.25)] transition ease-in-out duration-200">
      <div className="flex flex-col items-center justify-center h-full relative">
        <h4 className="font-bold text-2xl absolute top-5">{title}</h4>
          <ul>
            {data.map((tech, i) => (
                <div className="flex items-center">
                  <img className="mr-1" src={icons[index[i]].icon.src} alt={icons[index[i]].title || "Icon"} loading="lazy"/>
                  <li className="font-medium text-xl py-[5px]" key={tech}>{tech}</li>
                </div>
            ))}
          </ul>
      </div>
    </article>
  );
}