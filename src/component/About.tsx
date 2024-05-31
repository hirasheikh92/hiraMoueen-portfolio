import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className=" max-w-containerSmall mx-auto py-10 lgl:py-32 z-10 flex flex-col -gap-8"
    >
      <SectionTitle title="About Me" />
      <div className=" w-full mdl:w-[900px] text-base text-textDark font-medium flex mt-5 flex-col gap-4">
        <p>
          Hi there! My name is Hira and I am a Software Engineer with a passion
          for creating innovative and user-friendly web applications. with
          minimum 1 year of experience in creating visually stunning and
          user-friendly websites. I have a passion for crafting beautiful,
          intuitive user interfaces using HTML, CSS, and JavaScript and
          nodejs.Now a days I am working on Mernstack.
        </p>
        <p>
          I believe that the best websites are those that not only look great
          but also provide a seamless user experience. This is why I focus on
          creating websites that are both visually appealing and easy to use,
          with a particular emphasis on accessibility and usability.
        </p>
        <p>
          In addition to my technical skills, I am a dedicated and
          detail-oriented developer who takes pride in delivering high-quality
          work on time and within budget. I am always looking for new challenges
          and opportunities to learn and grow, and I am excited about the
          prospect of working on your next project.
        </p>
        <p>Here are a few technologies I have been working with recently:</p>
        <ul className="max-w-[450px] text-sm font-sans grid grid-cols-2 gap-2 mt-6">
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            Javascript (ES6+)
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            Typescript
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            Nodejs
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            React
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            Nextjs
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            Tailwindcss | Shadcn UI
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            PostgressSql | Mongodb
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-textGreen">
              <AiFillThunderbolt />
            </span>
            API
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
