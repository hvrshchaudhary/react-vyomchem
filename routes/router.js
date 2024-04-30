const  express = require('express');
const router = new express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.get("/apply-jobs",(req,res)=>{
    res.send("not a valid method")
})

router.post("/apply-jobs",(req,res)=>{
    const {email} = req.body;
    console.log(process.env.EMAIL,process.env.PASSWORD)

    try {
       const transporter = nodemailer.createTransport({
        service:"gmail" , 
        auth : {
            user :process.env.EMAIL,
            pass: process.env.PASSWORD
        }
       });
       const mailOptions = {
        from :process.env.EMAIL,
        to : email,
        subject : "sending email for checking",
        html : '<h1> congratulation for sending mail with nodemailer <h1>'
       } 
       transporter.sendMail(mailOptions, (error , info)=>{
        if(error){
            console.log("Error" , error)
        }else{
            console.log("Email send", info.response);
            res.status(201).json({status:402 ,error})
        }
       })
    } catch (error) {
        res.status(201).json({status:402 ,error})
        
    }
});
 

module.exports = router