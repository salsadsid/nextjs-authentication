
import {connectToDB} from"@utils/database.js"
import User from "@models/user"
// import { mailOptions, transporter } from "@utils/nodemailer"
import{ genSaltSync, hashSync } from "bcrypt"



export const POST = async (req,res) =>{
    
    const {email,password}=await req.json()
    console.log(email)
    await connectToDB();

    // only post method is accepted
 
        let otp=Math.round(Math.random()*50000)
        if(!email && !password) return new Response("No Email Pass",{status:500})
     
        // const response  =await transporter.sendMail({
        //     ...mailOptions,
        //     to:email,
        //     subject:"Hello",
        //     html:`opt: ${otp}`
        //   });
        //   console.log(response)
        // check duplicate users
        const checkExisting = await User.findOne({ email });
        if(checkExisting) return new Response("Already Exists",{status:422})

        // hash password
        const hashedPass=hashSync(password, genSaltSync(8), null);
        console.log(hashedPass)
        const newUser= new User({email:email,password:hashedPass,otp:131541,verified:false})
        
        await newUser.save()
        const {email:signedEmail} = newUser
        return new Response(JSON.stringify(signedEmail),{status:201},{email})
}