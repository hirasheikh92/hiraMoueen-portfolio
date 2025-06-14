import Link from "next/link";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const footer = () => {
  return (
    <div className='hidden md:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
      <Link href={"https://github.com/hirasheikh92"}>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hov text-textGreen cursor-pointer hover:translate-y-2 transition-all ease-in-out'>
          <TbBrandGithub />
        </span>
      </Link>
      <Link href={"https://www.linkedin.com/in/hira-moueen-6b4177198/"}>
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
  );
};

export default footer;
