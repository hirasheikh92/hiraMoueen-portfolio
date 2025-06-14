"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "../../public/assets";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenuOpen } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <header className='w-full shadow-navbarShadow h-20 lg:h-[12vh] z-10 sticky top-0bg-bodyColor px-4'>
      <div className='max-w-container  h-full mx-auto py-1 font-titleFont flex justify-between items-center'>
        {/* logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt='logo' className='w-14 cursor-pointer' />
        </motion.div>
        <nav className='hidden mdl:flex items-center gap-7 justify-between'>
          <ul className='flex items-center gap-7 text-[13px]'>
            <a
              href={"/#home"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Home
              </motion.li>
            </a>
            <a
              href={"#about"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                About
              </motion.li>
            </a>
            <a
              href={"#project"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Project
              </motion.li>
            </a>
            <a
              href={"#contact"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </a>
          </ul>
          <a href='/assets/Hira Moueen.pdf' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </a>
        </nav>

        {toggle ? (
          <div className='text-3xl text-textGreen cursor-pointer mdl:hidden flex top-0 right-4'>
            <AiOutlineClose onClick={() => setToogle(!toggle)} />
          </div>
        ) : (
          <div className='text-3xl text-textGreen cursor-pointer  mdl:hidden flex   top-0 right-4'>
            <AiOutlineMenu onClick={() => setToogle(!toggle)} />
          </div>
        )}
        {/* mobilenav */}
        <nav
          className={`mdl:hidden fixed  w-[80%] top-[76px]  px-4 py-10 h-screen  bg-[#112240] 
      ${toggle ? "right-[0] " : "right-[-100%] "}`}
        >
          <ul className='flex flex-col items-center gap-10 text-[20px]'>
            <a
              href={"/#home"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <li>Home</li>
            </a>
            <a
              href={"#about"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <li>About</li>
            </a>
            <a
              href={"#project"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <li>Project</li>
            </a>
            <a
              href={"#contact"}
              className='font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
