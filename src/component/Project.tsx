import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  currency,
  ecommerce,
  panaverse2,
  pricing,
  ochiDesign,
} from "../../public/assets";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section
      id="project"
      className=" max-w-contentContainer z-10 mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {" "}
        {/* projectOne */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href={"https://nextjs-ochidesign.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={ochiDesign} alt="ochi-design" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">UI & Ux website </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className=" text-textGreen">
                  Through this project, I learned how to:
                </span>
                <br />
                Implement a scalable and responsive frontend using Next.js and
                Tailwind CSS. Using framer motion build animations and
                transitions use third party libraries like locomotive scroll for
                smooth scrolling.
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs14</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>Framer motion</li>
                <li>Locomotive scroll</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={"https://github.com/hirasheikh92/hackathon-ecommerce"}
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={"https://hackathon-ecommerce-app.vercel.app/"}
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* projectTwo */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href={"https://nextjs-ochidesign.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={ochiDesign} alt="ochi-design" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">UI & Ux website </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className=" text-textGreen">
                  Through this project, I learned how to:
                </span>
                <br />
                Implement a scalable and responsive frontend using Next.js and
                Tailwind CSS. Using framer motion build animations and
                transitions use third party libraries like locomotive scroll for
                smooth scrolling.
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs14</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>Framer motion</li>
                <li>Locomotive scroll</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={"https://github.com/hirasheikh92/hackathon-ecommerce"}
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={"https://hackathon-ecommerce-app.vercel.app/"}
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* projectThree */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href={"https://hackathon-ecommerce-app.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={ecommerce} alt="panaverse dao" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Ecommerce website </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className=" text-textGreen">
                  Through this project, I learned how to:
                </span>
                <br />
                Implement a scalable and responsive frontend using Next.js and
                Tailwind CSS. Manage state efficiently with Redux Toolkit.
                Integrate and utilize Sanity CMS for dynamic content management.
                Interact with a PostgreSQL database using Drizzle ORM. Implement
                Clerk authentication.Deploy and manage the application on Vercel
                for seamless performance.
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs13</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>Sanity</li>
                <li>Stripe API for payment</li>
                <li>PostgressSQL and drizzle ORM</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={"https://github.com/hirasheikh92/hackathon-ecommerce"}
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={"https://hackathon-ecommerce-app.vercel.app/"}
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* projectFour */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href={"https://currency-project-alpha.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={currency} alt="panaverse dao" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Currency Converter </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                <span className=" text-textGreen">
                  Through this project, I learned how to:
                </span>
                <br />
                Fetching Third part APIs build custom hooks and custom
                components and manage state
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs13</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>API integration</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={"https://github.com/hirasheikh92/currency-project"}
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={"https://currency-project-alpha.vercel.app/"}
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* projectThree */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              href={"https://panaverse-dao-website-hirasheikh92.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={panaverse2} alt="panaverse dao" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Panaverse dao website</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16  rounded-md">
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers,
                <span className=" text-textGreen">
                  startup founders and service providers.
                </span>
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs13</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={
                    "https://github.com/hirasheikh92/panaverse-dao-website-chakra-ui"
                  }
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={"https://panaverse-dao-website-tailwindcss.vercel.app/"}
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* projectThree */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href={"https://with-chakra-ui-fzn6d08j5-hirasheikh92.vercel.app/"}
              className="w-full xl:w-1/2 h-auto realtive group"
            >
              <Image src={pricing} alt="pricing" />
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-sans text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Panaverse dao website</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Minimal design for Simple Pricing UI for business,
                <span className=" text-textGreen">
                  Plans that are crafted your business.
                </span>
              </p>
              <ul className="text-sm md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs13</li>
                <li>Typescript</li>
                <li>ChakraUI</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href={"https://github.com/hirasheikh92/with-chakra-ui-app"}
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </Link>
                <Link
                  href={
                    "https://with-chakra-ui-fzn6d08j5-hirasheikh92.vercel.app/"
                  }
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
