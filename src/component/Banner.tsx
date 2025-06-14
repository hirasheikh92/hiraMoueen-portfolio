"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTypewriter } from "react-simple-typewriter";
const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["I build things for the web", "Working on Mernstak Projects"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <section
      id="/#home"
      className=" max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-sans tracking-wide text-textGreen"
      >
        Hi,my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-sans font-semibold flex flex-col"
      >
        Hira Moueen <span>{typeEffect}</span>
        {/* <span className=' text-textDark mt-2 lgl:mt-4'>
          I build things for the web
        </span> */}
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[627px] text-textDark font-medium"
      >
        I am a web developer with minimum 1 years of experience in React and
        Nextjs. I have a strong foundation in front-end & back-end development
        and am skilled in creating user-friendly and responsive web applications
        using React and its ecosystem.
        {/* <Link href={"https://github.com/hirasheikh92"}>
          <span className=' text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group '>
            Learn More
            <span
              className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
          -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'
            ></span>
          </span>
        </Link> */}
      </motion.p>
      <Link href={"https://github.com/hirasheikh92"}>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 tex-sm font-sans border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
