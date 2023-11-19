import dotenv from "dotenv"

dotenv.config({path: "../.env"})

const mongopass = process.env.mongopass


export const PORT = 5555


// URL OF DATABASE it 
export const mongoDBURL = `mongodb+srv://prueba:${mongopass}@cluster0.8obp27j.mongodb.net/?retryWrites=true&w=majority`

