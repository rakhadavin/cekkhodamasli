'use client';

import Image from "next/image";
import Khodam from "./Khodam.jpg"
import { useState } from "react";
import { validateHeaderName } from "http";
export default function Home() {

  const [nama,setNama] = useState("")

  const submitName = (()=>{
    console.log("submit name")
    console.log(nama)
  })

  const inputHandler = ((e:any)=>{
    setNama(e.target.value)
    console.log(e)
    console.log(nama)

  })





  return (
    <div className="w-100vw h-full text-white  font-serif "  >
        <div style={{zIndex : -1, position:"absolute", width:"100%", height:"100%"}}>
          <Image src={Khodam} alt={""} layout="fill" objectFit="cover"/>


          
        </div>

      <div className="flex flex-col items-center justify-center align-middle  h-2100vh w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100  ">
              <h1 className=" font-serif flex font-extrabold subpixel-antialiased sm:text-6xl  text-4xl align-middle m-4  pt-8 
">CEK KHODAM MU DISINI</h1>
<h4 className="capitalize font-light md:text-lg  text-sm  tracking-widest mx-4 ">Temukan kekuatan abadi yang tersembunyi dalam diri anda</h4>
            
      </div >
      <div className="flex flex-col gap-5 m-4 p-4  align-middle items-center
h-full w-100vw bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
">
        <label htmlFor="nama" className="text-4xl">Nama Anda</label>
        <input type="text" id="nama" name="nama"  value={nama} onChange={inputHandler}  className="flex align-middle items-center text-3xl text-amber-200 uppercase text-center  p-3 h-20 w-2/4 rounded-md font-bold bg-teal-950 border-slate-200"/>
        <button
        className="select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" onClick={submitName} 
      >
        CHECK NOWgit 
      </button>
      </div>



























    </div>

   
  );
}
