import express, { request, response } from "express"
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


app.get('/enterprises/:id', async (request, response)=>{
    try {
        const { id } = request.params;

        const enterprise = await ent.findById(id)

        return response.status(200).json({
          enterprise
        })
    } catch (err){
        console.log(err.message)
        response.status(500).send({ message: err.message})
    }
})

// update enterprises

app.put('/enterprises/:id', async(request, response)=>{
    try{
        if(
            !request.body.name ||
            !request.body.description
        ) {
            return response.status(400).send({
                message:'Plase, send all params.'
            })
        }
        const { id } = request.params

        const result = await ent.findByIdAndUpdate(id, request.body)
        
        if(!result){
            return response.status(404).json({ message:'Enterprise not found'})
        }
        return response.status(200).send({message: 'Enterprise updated.'})
    } catch (err){
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
})

// Delete Rout

app.delete('/enterprises/:id', async(request, response)=>{
    try {
        const { id } = request.params
        const result = await ent.findByIdAndDelete(id) 
        if(!result){
            return response.status(400).useChunkedEncodingByDefault({message:'Enterprise not found'})
        }
        return response.status(200).send({message: 'Enterprise deleted'})
    } catch (err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
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


   