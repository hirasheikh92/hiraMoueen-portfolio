import About from "@/component/About";
import Banner from "@/component/Banner";
import Contact from "@/component/Contact";
import Leftside from "@/component/Leftside";
import Navbar from "@/component/Navbar";
import Project from "@/component/Project";
import RightSide from "@/component/RightSide";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main
      className='w-full h-screen bg-bodyColor overflow-x-hidden overflow-y-scroll 
    scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 '
    >
      <Navbar />
      {/* hero section */}
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        {" "}
        <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <Leftside />
        </div>
        <div className=' h-[88vh] w-full mx-auto p-4'>
          <Banner />
          {/* About */}
          <About />
          {/* Projects */}
          <Project />
          {/* contact */}
          <Contact />
          <Footer />
        </div>
        {/* rightside */}
        <div className='hidden xl:inline-flex w-32 fixed right-0 bottom-0'>
          <RightSide />
        </div>
      </div>
    </main>
  );
}
