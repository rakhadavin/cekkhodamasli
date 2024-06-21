'use client';

import Image from "next/image";
import Khodam from "./Khodam.jpg"
import { useState } from "react";
import { validateHeaderName } from "http";
import ReactSpeedometer from "react-d3-speedometer/slim"
import { setGlobal } from "next/dist/trace";
export default function Home() {

  const [nama,setNama] = useState("")
  const [pemilik_tubuh, setPemilik_tubuh] = useState("")
  const [khodam, setKhodam] = useState("Tidak Ada Khodam")
  const segmentStopLevel:number[] = [0,20,40,60,80,100]
  const [khodam_level, setLevel] = useState("Sangat Lemah")
  const [khodam_value, set_value] = useState(0)

  const setRandomLevel = (()=>{
    const randomValue = Math.floor(Math.random() * 100)
    return randomValue
  })

  const setLabelKekuatan  = (((value:number)=>{
    if(value <= 0){}
    else if(value > 20 && value < 40){
      setLevel("Lemah")
    }
    else if(value > 40 && value < 60){
      setLevel("Biasa Saja")

    }
    else if(value > 60 && value < 80) {
      setLevel("Cukup Kuat")

    }
    else if(value > 80 && value < 90){
      setLevel("Sangat Kuat")

    }
    else if(value >= 90){
      setLevel("Penguasa Leluhur")

    }
  }))

  const submitName = (()=>{
    console.log("submit name")
    console.log(nama)
    console.log(khodam_value)
    setPemilik_tubuh(nama)
    set_value(setRandomLevel())
    setLabelKekuatan(khodam_value)
    setKhodam("Agus")
  })

  const inputHandler = ((e:any)=>{
    setNama(e.target.value)
    console.log(e)
    console.log(nama)

  })





  return (
    <div className="w-100vw h-full text-white  font-serif flex items-center flex-col"  >
        <div style={{zIndex : -1, position:"fixed", width:"100%", height:"100%"}}>
          <Image src={Khodam} alt={""} layout="fill" objectFit="cover"/>


          
        </div>

      <div className="flex flex-col items-center justify-center align-middle  h-2100vh w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100  ">
              <h1 className=" font-serif flex font-extrabold subpixel-antialiased sm:text-6xl  text-4xl align-middle m-4  pt-8 
">CEK KHODAM MU DISINI</h1>
<h4 className="capitalize font-light md:text-lg  text-sm  tracking-widest mx-4 ">Temukan kekuatan abadi yang tersembunyi dalam diri anda</h4>
            
      </div >
      
      
      {/* Content input */}
      
      <div className="flex flex-col gap-5 m-4 p-4  align-middle items-center
h-full w-6/12 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
">
        <label htmlFor="nama" className="text-4xl">Nama Anda</label>
        <div  className="flex align-middle items-center text-3xl text-amber-200 uppercase text-center  p-3 h-20  rounded-full font-bold bg-teal-950 border-slate-200  w-full gap-2">

            <input type="text" id="nama" name="nama"  value={nama} onChange={inputHandler} className="bg-transparent w-full h-full focus:border-0 focus:outline-none focus:ring focus:ring-0"  />
            <button
            className="select-none rounded-full bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" onClick={submitName} 
          >
            CHECK NOW
          </button>
        </div>
      
        <div className="font-normal font-mono text-3xl  text-slate-400">
          Khodam dengan pemilik jiwa atas nama : <b className="tracking-wider text-amber-200"> 
          {pemilik_tubuh}
            </b>
        </div>

        <div>
          <h1 className="md:text-6xl text-xl font-extrabold text-yellow-200">
          {khodam}
          </h1>
        </div>

        <div className="flex items-center flex-row gap-4 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 
" >
          <Image src="https://i.pinimg.com/564x/c1/8d/94/c18d94492403205ee1934aa2e6ddb860.jpg" alt={""} loading="lazy"  width={400} height={400} className="m-4 flex items-center md:w-5/12 w-10/12 "/>
          <div className="items-center flex flex-col   md:w-5/6 w-1/12 justify-center   ">
            <label htmlFor="">Seberapa Kuat Khodammu?</label>
            <ReactSpeedometer className="sm:w-1 p-3 md:w-full  " minValue={0} maxValue={100}  value={khodam_value} currentValueText={khodam_level} labelFontSize={20} valueTextFontSize={20} customSegmentStops={segmentStopLevel} width={300} ringWidth={30}/>
          </div>
        </div>












      </div>




      <div>
        Created by Daveen | rakha.davin_alamsyah
      </div>



























    </div>

   
  );
}
