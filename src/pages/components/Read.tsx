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
        <main  className="w-screen h-screen flex bac2">
            <div className="flex flex-row">
                <h1 className={inter.className+ ` font-black text-8xl text-[#F8F2E9] `}>What is</h1>
                <h1>SummerAI</h1>
            </div>
        </main>
    )
}