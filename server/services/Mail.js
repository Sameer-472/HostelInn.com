import nodemailer from 'nodemailer';

const MAIL_SETTINGS = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    service: "gmail",
    auth:{
        user: "hostelindata@gmail.com",
        pass: "cfygzitepccqzdzx"
    }
}

const transporter = nodemailer.createTransport(MAIL_SETTINGS);

export const sendMailForUser = async(name , email , confirmationCode)=>{
    try {
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: email,
            subject: 'Please confirm your email',
            html: `<h1>Email Confirmation</h1>
            <h2>Hello ${name}</h2>
            <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:8000/register/user/confirm${confirmationCode}> Click here</a>
            </div>`,
        })
        return info;
    } catch (error) {
        console.log("error while executing function sendMail..." , error )
    }
}

export const sendMailForOwner = async(name , email , confirmationCode)=>{
    try {
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: email,
            subject: 'Please confirm your email',
            html: `<h1>Email Confirmation</h1>
            <h2>Hello ${name}</h2>
            <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:8000/register/hostelOwner/confirm${confirmationCode}> Click here</a>
            </div>`,
        })
        return info;
    } catch (error) {
        console.log("error while executing function sendMail..." , error )
    }
}
