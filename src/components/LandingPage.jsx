import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-5 w-[8vw] rounded-md h-[5vw] bg-red-300 relative -top-[0.7vw] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[7.5vw] leading-[0.75] tracking-tight font-['Founders_Grotesk_Condensed'] font-light">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
