
import dotenv from 'dotenv'
dotenv.config();
import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_host,
    port: process.env.EMAIL_port,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_user,
      pass: process.env.EMAIL_pass
    }
})



class UserController{
    static sentmail = async(req , res)=>{
        const data = req.body;
        try {
            let info = await transporter.sendMail({
                from: `${data.name} <${"raunakabhishek234@gmail.com"}> ` , 
                to:"raunakabhishek234@gmail.com",
                subject: `${data.subject}` ,
                html:`<p  >${data.description}</p>
                        <a href = ''> ${data.email} </a>
                `
            })
        } catch (error) {
            res.send({error})
        }
        res.send({"message":"email sent successfully "})
    }
}

export default UserController