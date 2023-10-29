import express, { request } from "express"
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import { ent } from "./models/enterprisesModel.js";


const app = express();

// Middlewere for parsing body //

app.use(express.json())

app.get("/", (request, response)=>{
    console.log(request)
    return response.status(234).send("works")
});

// Rout for save enterprises
app.post('/entp', async (request, response) => {
    try{
        if(
            !request.body.name ||
            !request.body.description
        ) {
            return response.status(400).send({
                message: 'send all required fields: name and description'
            })
        }
        const newent = {
            name: request.body.title,
            description: request.body.description
        }
        const enterprise1 = await ent.create(newent)
        return response.status(201).send(enterprise1)
    } catch (err) {
        console.log(err.message)
        response.status(500).send({ message: err.message})
    }
})

// roout all enterprises

app.get('/enterprises', async (request, response)=>{
    try {
        const enterprises = await ent.find({})
        return response.status(200).json({
            count:enterprises.length,
            data: enterprises
        })
    } catch (err){
        console.log(err.message)
        response.status(500).send({ message: err.message})
    }
})

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('App conected')
        app.listen(PORT, () => {
            console.log(`listen port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


   