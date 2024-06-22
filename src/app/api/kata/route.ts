import type { NextFetchEvent,NextRequest } from "next/server"
import { Pool } from "@neondatabase/serverless"
import { json } from "stream/consumers"
import { Container } from "postcss"


export const runtime = "edge"

export async function GET(req:NextRequest , event:NextFetchEvent) {

    const pool = new Pool({
        connectionString : process.env.DATABASE_URL
    })
    
    const jml_kata_benda = (await pool.query('select  count(id) from kata_benda;')).rows[0].count
    const jml_kata_sifat = (await pool.query('select  count(id) from kata_sifat;')).rows[0].count
    const jml_duakatalucu = (await pool.query('select  count(id) from duakatalucu;')).rows[0].count
    const id_benda = Math.floor(Math.random() * 100) % Number(jml_kata_benda)
    const id_sifat = Math.floor(Math.random() * 100) % Number(jml_kata_sifat)
    const id_duakatalucu = Math.floor(Math.random() * 100) % Number(jml_duakatalucu)



    const query = `select nama , penjelasan from duakatalucu where id = ${id_duakatalucu}` 
    const data_khodam = (await pool.query(query)).rows[0]
    console.log("Lolos 2")
    console.log(data_khodam)
    
    pool.end()


    return new Response(JSON.stringify({data_khodam}),{status:200})
    // return JSON.parse(data)
}
