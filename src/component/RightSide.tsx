"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'
    >
      <Link href={"mailto:hiramoueen@gmail.com"}>
        <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>
          hiramoueen@gmail.com
        </p>
      </Link>
      <span className='w-[2px] h-32 bg-textDark'></span>
    </motion.div>
  );
};

export default RightSide;
