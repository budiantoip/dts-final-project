import React from "react";
import { BikeDelivery } from "../Assets";
// import { motion } from "framer-motion";
const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-bold">Food Catalog</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The Complete Food Catalog
        <span className="text-orange-600 text-[2.5rem] lg:text-[4.6rem]">Online</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        This is a web-based food catalog, you'll find complete information regarding food here.
      </p>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Order Now
      </motion.button> */}
    </div>
  );
};

export default Left;