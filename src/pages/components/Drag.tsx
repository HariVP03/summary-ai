import React from 'react'
import { Inter } from "next/font/google";
import Dropzone from 'react-dropzone'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const inter = Inter({ subsets: ['latin'] });

const firebaseConfig = {
    apiKey: "AIzaSyCQ3ILEKdTSXiMXCGEaFBWcKe0lTMEDRm4",
    authDomain: "summarai-f1e55.firebaseapp.com",
    projectId: "summarai-f1e55",
    storageBucket: "summarai-f1e55.appspot.com",
    messagingSenderId: "1044192921887",
    appId: "1:1044192921887:web:f253296dfaf087c5ee082a",
    measurementId: "G-2LVCJJN2RT"
};

export default function Drag(){
    
    return(
        <main className={`w-screen h-screen lg:h-screen bac m-0 p-0` + inter.className}>
            <h1 className={
              `text-4xl lg:text-[70px] font-black text-[#565353] p-8 leading-tight flex items-center justify-center  ` +
              inter.className
            }>Upload here!</h1>
            <div className='w-screen h-auto flex items-center justify-center'>
                <div className='w-4/6 h-96 bg-[#D9D9D9] rounded-3xl shadow-xl my-20 flex items-center justify-center flex-wrap '>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                        )}
                    </Dropzone> 
                </div>
            </div>
        </main>
    )
}