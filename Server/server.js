const express = require('express');
const cors = require('cors');
const fs = require('fs')

const app = express();
app.use(express.json({ limit: '6mb' }));
app.use(cors());
app.use(express.urlencoded({extended: true }));

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Server Running at Port 3000")
})

app.post('/SignUp',(req,res)=>{
    
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
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(`image.${imageType}`, buffer);

    res.send("Hello")
    
})