'use client';

import Image from "next/image";
import Khodam from "./Khodam.jpg"
import { useRef, useState } from "react";
import { validateHeaderName, validateHeaderValue } from "http";
import ReactSpeedometer from "react-d3-speedometer"
import { setGlobal } from "next/dist/trace";
import React from "react";
import {CircularProgress} from "@nextui-org/progress";

export default function Home() {
  const baseURLTranslate = "https://api.mymemory.translated.net/get?q=pantat%20panci!&langpair=id|en"
  const basURLFetch = "https://cekkhodamasli.vercel.app//api/kata"

  const [nama,setNama] = useState("")
  const [pemilik_tubuh, setPemilik_tubuh] = useState("")
  const [khodam, setKhodam] = useState("")
  const [penjelasan, setPenjelasan] = useState("")
  const khodam_level = useRef("Sangat Lemah")
  const khodam_value = useRef(0)

  const setRandomLevel = (()=>{
    const randomValue = Math.floor(Math.random() * 100)
    console.log(randomValue)
    return randomValue
  })

  const setLabelKekuatan  = (((value:number)=>{
    if(value <= 0){}
    else if(value > 20 && value < 40){
      khodam_level.current = ("Lemah")
    }
    else if(value > 40 && value < 60){
      khodam_level.current = ("Biasa Saja")

    }
    else if(value > 60 && value < 80) {
      khodam_level.current = ("Cukup Kuat")

    }
    else if(value > 80 && value < 90){
      khodam_level.current = ("Sangat Kuat")

    }
    else if(value >= 90){
      khodam_level.current = ("Penguasa Leluhur")

    }
  }))

  const submitName =  (async ()=>{
    setPemilik_tubuh(nama)
    setKhodam("Loading..")
    
    //SON.stringify(data.data_khodam) --> sloved from Error: Objects are not valid as a React child (found: object with keys {nama, penjelasan}). If you meant to render a collection of children, use an array instead.
    const data = await ( await fetch(basURLFetch)).json() 
    const data_khodam = JSON.stringify(data.data_khodam)
    const nama_khodam = data.data_khodam.nama
    const penjelasan = data.data_khodam.penjelasan
    console.log(  data_khodam )
    setKhodam(nama_khodam)
    setPenjelasan(penjelasan)
    khodam_value.current = setRandomLevel()
    setLabelKekuatan(khodam_value.current)


    return (data_khodam)

  })

  const inputHandler = ((e:any)=>{
    setNama(e.target.value)
    console.log(e)
    console.log(nama)

  })




  const loadingHadnler = ((e:any)=>{

  })

  return (
    <div className="md:w-100vw w-full h-full text-white  font-serif flex items-center flex-col"  >
        <div style={{zIndex : -1, position:"fixed", width:"100%", height:"100%"}}>
          <Image src={Khodam} alt={""} layout="fill" objectFit="cover" loading="lazy"/>


          
        </div>

      <div className="flex flex-col items-center justify-center align-middle  h-2100vh w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100  ">
              <h1 className=" font-serif flex font-extrabold subpixel-antialiased sm:text-5xl  text-2xl align-middle m-4  pt-8 
">CEK KHODAM MU DISINI</h1>
<h4 className="capitalize font-light md:text-lg  text-sm  tracking-widest mx-4 mb-4 ">Temukan kekuatan abadi yang tersembunyi dalam diri anda</h4>
            
      </div >
      
      
      {/* Content input */}
      
      <div className="flex flex-col gap-5 m-4 p-4  align-middle items-center
h-full md:w-6/12 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
">
        <label htmlFor="nama" className="md:text-4xl text-xl">Nama Anda</label>
        <div  className="flex align-middle items-center text-3xl text-amber-200 uppercase text-center  p-3 h-20  rounded-full font-bold bg-teal-950 border-slate-200  w-full gap-2">

            <input type="text" id="nama" name="nama"  value={nama} onChange={inputHandler} className="bg-transparent w-full h-full focus:border-0 focus:outline-none focus:ring focus:ring-0"  />
            <button
            className="select-none rounded-full bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" onClick={submitName} 
          >
            CHECK NOW
          </button>
        </div>
      
        <div className="font-normal font-mono md:text-3xl text-xl text-center  text-slate-400">
          Khodam dengan pemilik jiwa atas nama  <b className="tracking-wider text-amber-200 md:text-3xl text-xl"> 
          {pemilik_tubuh} :
            </b>
        </div>

        <div className="flex flex-col items-center text-center mb-9">
          <h1 className="md:text-4xl text-center w-full text-wrap text-lg font-extrabold text-yellow-200 capitalize">
          {khodam}
          </h1>

          <p className="md:text-xl text-normal w-4/6 text-center">{penjelasan}</p>
        </div>

        <div className="flex  items-center justify-centerti md:flex-row flex-col gap-4 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 
" >
          {/* <Image src="https://i.pinimg.com/564x/c1/8d/94/c18d94492403205ee1934aa2e6ddb860.jpg" alt={""} loading="lazy"  width={400} height={400} className="m-4 flex items-center md:w-5/12 w-10/12 "/> */}
          
          {/* md:w-3/6  untuk ukuran meteran jika sudah ada gambar */}
          <div className="items-center flex flex-col flex-wrap w-full justify-center  p-4">
            <p  className="md:text-3xl text-s w-full align-middle items-center text-center " >Seberapa Kuat Khodammu?</p>

            <div className="flex flex-row gap-y-2 mb-9 items-center ">

            <img width="36" height="36" src="https://img.icons8.com/fluency/48/spam.png" alt="spam" className="mx-2"/>
            <p className="md:text-lg  text-sm font-extralight text-slate-400 text-justify">Kekuatan khodam bisa berubah sesuai mood khodam nya</p>
            </div>
            <h2 className="md:text-xl font-bold text-green-600 text-center">{khodam_level.current}</h2>
          
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          className=""
          value={khodam_value.current}
          strokeWidth={3}
          showValueLabel={true}
          onLoad={loadingHadnler}
        />
      
          </div>
        </div>












      </div>




      <div className="m-6 flex flex-row items-center ">
        Created by Daveen | <a target="blank" href="https://www.instagram.com/rakha.davin_alamsyah/"><img width="40" height="40" src="https://img.icons8.com/papercut/60/instagram-new.png" alt="instagram-new"/></a>
      </div>



























    </div>

   
  );
}
