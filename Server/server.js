const express = require('express');
const cors = require('cors');
const fs = require('fs')
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(express.json({ limit: '6mb' }));
app.use(cors());
app.use(express.urlencoded({extended: true }));

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Server Running at Port 3000")
})
          
cloudinary.config({ 
  cloud_name: 'dtclwtjyp', 
  api_key: '283138351422626', 
  api_secret: '9nTu4HMZRoE7psw2hDCy76dmpkA' 
});

app.post('/SignUp',async (req,res)=>{
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    console.log(firstName,lastName,email,password);
    const pic = req.body.picture;

    const matches = pic.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches) {
        throw new Error('Invalid base64 image string');
    }

    const imageType = matches[1];
    const base64Data = matches[2];

    const result = await cloudinary.uploader.upload(`data:image/${imageType};base64,${base64Data}`);

    const imageUrl = result.secure_url;
    console.log(imageUrl)
    res.send(imageUrl)
    
})