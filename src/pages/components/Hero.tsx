import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <main
      className={`w-screen h-full lg:h-screen bac m-0 p-0` + inter.className}
    >
      <Navbar />
      <div className="flex flex-row flex-wrap w-screen items-center justify-center">
        <div className="basis-3/5">
          <motion.h1
            className={
              `text-4xl lg:text-[70px] font-black text-[#565353] m-12 lg:my-24 leading-tight flex items-center justify-center ` +
              inter.className
            }
          >
            Note making revolutionized
          </motion.h1>
          <p
            className={
              inter.className +
              `text-lg font-semibold lg:font-bold lg:text-3xl m-12 text-[#F8F2E9]`
            }
          >
            with a click of button convert boring long pdf’s into short and
            concise notes
          </p>
          <p
            className={
              inter.className +
              `text-lg font-semibold lg:font-bold lg:text-3xl m-12 text-[#F8F2E9]`
            }
          >
            Say hello to the only thing you need a night before the exam.
          </p>
        </div>
        <div className="basis-2/5">
          <motion.div
            className="flex justify-center items-center flex-col "
            whileHover={{ scale: 1.2 }}
          >
            <motion.div className="w-64 h-36 bg-[#D9D9D9] rounded-3xl flex items-center justify-center flex-col drop-shadow-lg ">
              <motion.div
                className={`w-56 h-7 bg-[#CDBA9E] rounded-3xl flex items-center justify-center m-auto drop-shadow-lg`}
              >
                module1.pdf
              </motion.div>
              <motion.div
                className={`w-56 h-7 bg-[#CDBA9E] rounded-3xl flex items-center justify-center m-auto drop-shadow-lg`}
              >
                module2.pdf
              </motion.div>
              <motion.div
                className={`w-56 h-7 bg-[#CDBA9E] rounded-3xl flex items-center justify-center m-auto drop-shadow-lg`}
              >
                YT Link
              </motion.div>
            </motion.div>
            <motion.div>
              <Image src={"/Arrow.svg"} width={25} height={25} alt="|" />
            </motion.div>
            <motion.div className="w-64 h-56 bg-[#D9D9D9] rounded-3xl drop-shadow-lg flex flex-col items-center justify-center">
              <h1 className="font-bold">Heading</h1>
              <p className="flex items-center justify-center m-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                auctor est in justo cursus, at tincidunt lectus gravida.,
                lacus.............................
                ....................................................
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
