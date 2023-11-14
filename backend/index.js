import express, { request, response } from "express"
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import enterprisesRoute from './routes/enterprisesRoute.js'
import cors from "cors"


const app = express();
app.use(cors())
// Middlewere for parsing body //

app.use(express.json())

app.get("/", (request, response)=>{
    console.log(request)
    return response.status(234).send("works")
});

app.use('/enterprises', enterprisesRoute)

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('App conected to mongo')
        app.listen(PORT, () => {
            console.log(`listen port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


   