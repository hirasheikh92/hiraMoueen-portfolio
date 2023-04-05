import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id='contact'
      className=' max-w-contentContainer z-10 mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <span className='font-sans text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        What&apos;s Next
      </span>
      <h2 className='font-sans text-5xl font-semibold'>Get In Touch</h2>
      <p className=' max-w-[600px] text-center text-textDark'>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Link href={'"mailto:hiramoueen@gmail.com"'}>
        {" "}
        <button className='w-40 h-14 border border-textGreen mt-6 font-sans text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
          Say Hello
        </button>
      </Link>
    </section>
  );
};

export default Contact;
