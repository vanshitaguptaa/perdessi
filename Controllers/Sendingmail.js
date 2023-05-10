import nodemailer from "nodemailer";


export const SendBirthdaymail = (userEmail)=>{
    console.log(userEmail,process.env.EMAIL,typeof  process.env.PASSWORD)
    let config = {
        service : 'gmail',
        secure: true,
        auth : {
            user: process.env.EMAIL,
            pass:  process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let message = {
        from : process.env.EMAIL,
        to : userEmail,
        subject: "Happy Birthday bro",
        text: "Successfully Mail Send by Node JS", 
        html: "<b>Mail From Node Mail</b>",
    }
    //***** Sending Mail ******//
    try {
        transporter.sendMail(message)
        console.log("Email Just Send")
    } catch (error) {
        console.log("Facing error in sending mail");
    }

}

