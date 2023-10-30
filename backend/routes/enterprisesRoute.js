import  Express  from "express"
import { ent } from "../models/enterprisesModel.js"

const router = Express.Router()



// Rout for save enterprises
router.post('/', async (request, response) => {
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
            name: request.body.name,
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

router.get('/', async (request, response)=>{
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


router.get('/:id', async (request, response)=>{
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

router.put('/:id', async(request, response)=>{
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

router.delete('/:id', async(request, response)=>{
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

export default router