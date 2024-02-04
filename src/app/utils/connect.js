import fs from 'fs';
import path from 'path';
export async function connectToDB(){
    const filePath = path.resolve('public/data/db.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
return data
}
