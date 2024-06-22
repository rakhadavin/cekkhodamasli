import type { NextFetchEvent,NextRequest } from "next/server"
import { Pool } from "@neondatabase/serverless"
import { json } from "stream/consumers"
import { Container } from "postcss"

export const config ={
    runtime : 'edge',
}

export async function GET(req:NextRequest , event:NextFetchEvent) {

    const pool = new Pool({
        connectionString : process.env.DATABASE_URL
    })
    
    const jml_kata_benda = (await pool.query('select  count(id) from kata_benda;')).rows[0].count
    const jml_kata_sifat = (await pool.query('select  count(id) from kata_sifat;')).rows[0].count
    const id_benda = Math.floor(Math.random() * 100) % Number(jml_kata_benda)
    const id_sifat = Math.floor(Math.random() * 100) % Number(jml_kata_sifat)



    const query = `select concat_ws(' ', kata_benda,kata_sifat) from kata_sifat, kata_benda where kata_benda.id = ${id_benda} and kata_sifat.id = ${id_sifat};` 
    const nama_khodam = (await pool.query(query)).rows[0].concat_ws
    console.log("Lolos 2")
    console.log(nama_khodam)
    
    pool.end()


    return new Response(JSON.stringify({nama_khodam}),{status:200})
    // return JSON.parse(data)
}
