import type { NextFetchEvent,NextRequest } from "next/server"
import { Pool } from "@neondatabase/serverless"
import { json } from "stream/consumers"

export const config ={
    runtime : 'edge',
}

export async function GET(req:NextRequest , event:NextFetchEvent) {
    const pool = new Pool({
        connectionString : process.env.DATABASE_URL
    })

    const query = 'select * from kata_benda limit 10;'
    const {rows} = await pool.query(query)
    pool.end()
    const data = rows[1]
    const id = data.id
    const kata_benda = data.kata_benda


    return new Response(JSON.stringify({data}),{status:200})
    // return JSON.parse(data)
}
