"use client";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter,
} from "react-icons/sl";
import Link from "next/link";
import { motion } from "framer-motion";

const Leftside = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'
    >
      <div className='flex flex-col gap-4'>
        <Link href={"https://github.com/hirasheikh92"}>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hov text-textGreen cursor-pointer hover:translate-y-2 transition-all ease-in-out'>
            <TbBrandGithub />
          </span>
        </Link>
        <Link href={"https://www.linkedin.com/in/hira-moueen-835a14306/"}>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hov text-textGreen cursor-pointer hover:translate-y-2 transition-all ease-in-out'>
            <SlSocialLinkedin />
          </span>
        </Link>
        <Link href={"https://web.facebook.com/hira.moueen.7"}>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hov text-textGreen cursor-pointer hover:translate-y-2 transition-all ease-in-out'>
            <SlSocialFacebook />
          </span>
        </Link>
        <Link href={"https://twitter.com/HiraMoueen"}>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hov text-textGreen cursor-pointer hover:translate-y-2 transition-all ease-in-out'>
            <SlSocialTwitter />
          </span>
        </Link>
      </div>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </motion.div>
  );
};

export default Leftside;
