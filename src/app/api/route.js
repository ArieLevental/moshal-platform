import fs from 'fs';
import path from 'path';
const {NextResponse} = require("next/server")

export const GET = async()=>{
    try{
        const filePath = path.resolve('./public/data/db.json');
        const infodata = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return new NextResponse(
            JSON.stringify(infodata,{status:200}),
        )
    }
    catch(err){
        console.log(err);
        return new NextResponse({status:500,body:err})
    }
}