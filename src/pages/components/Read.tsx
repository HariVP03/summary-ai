import React from "react";
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});
const inter = Inter({ subsets: ['latin'] });

export default function Read(){
    return(
        <main  className=" w-full  h-full lg:h-screen lg:w-screen flex flex-col flex-wrap bac2">
            <div className="flex flex-row m-16 mb-4 lg:m-16 gap-2 flex-wrap">
                <h1 className={inter.className+ ` font-black text-5xl lg:text-8xl text-[#F8F2E9] `}>What is </h1>
                <h1 className={roboto.className+`font-thin text-5xl lg:text-8xl  text-[#F8F2E9]`}> SummerAI</h1>
            </div>
            <div className="flex flex-col m-16 gap-10">
                <p className={inter.className+ ` text-xl lg:text-4xl text-[#F8F2E9] `}>We are a tool for students to use to drastically cut down on their time required to make notes.</p>
                <p className={inter.className+ `  text-xl lg:text-4xl text-[#F8F2E9] `}>With our cutting-edge technology, we have developed a machine learning model that can swiftly summarize extensive PDFs spanning 100 to 150 pages, ensuring that no crucial information is missed.</p>
                <p className={inter.className+ `  text-xl lg:text-4xl text-[#F8F2E9] `}>But that's not all! We go a step further by seamlessly extracting essential insights from YouTube videos, even in cases where written notes are absent.</p>
            </div>
        </main>
    )
}