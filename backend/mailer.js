import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config({path: "../.env"})

const passMailer = process.env.passMailer
const userMailer = process.env.userMailer

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,  
    secure: true,
    auth: {
        user: `${userMailer}`,
        pass:  `${passMailer}` //to make it work enter a app password and gmail user
    }
});

transporter.verify().then(() => {
    console.log('Ready for send emails');
});

