import express, { request, response } from "express"
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import enterprisesRoute from './routes/enterprisesRoute.js'
import cors from "cors"
import { transporter } from "./mailer.js";

// disabled SSL certificate verification so nodemailer doesn't fail
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
app.use(cors())
// Middlewere for parsing body //

app.use(express.json())

app.get("/", (request, response)=>{
    console.log(request)
    return response.status(234).send("works")
});


// endpoint for send mails (hardcoded why i dont have the emails of all enterprises) only need change the pass for a real app password (i change this before gitpush by security)

app.post('/sendEmail', async (req, res) => {
    const { to, html } = req.body;
  
    try {
      await transporter.sendMail({
        from: 'maufacuu91@gmail.com',
        to,
        subject: "POLOIT",
        html,
      });
  
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
  });

app.use('/enterprises', enterprisesRoute)


// connect yo mongo
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


   