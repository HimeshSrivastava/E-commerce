const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const os= require("os");
const freememory= os.freemem()
console.log(`${freememory/1024/1024/1024}`);
const app = express();
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const directoryPath = path.join(__dirname, 'upload/images');
app.use(express.json());
const allowedOrigins = [ 'https://e-commerce-admin-sn3i.onrender.com', 'https://e-commerce-new-t4rk.onrender.com', 'http://localhost:3000', 'http://localhost:5173' ]; 
app.use(cors({ origin: allowedOrigins }));
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

//Database connection with maongodb
mongoose.connect(
  process.env.mongo_db_url
);

//api cration

app.get("/", (req, res) => {
  res.send("Express App is Running ");
});


//Image Storage engine

const storage = multer.diskStorage({
   destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//creating upload endpoint for images
app.use("/images", express.static("upload/images"));


app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `https://e-commerce-zq42.onrender.com/images/${req.file.filename}`,
  });
});

const Loginuser=mongoose.model("Loginuser",{
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:Number,
    required:true,

  }
})

const Product=mongoose.model("Product",{
  id:{
      type:Number,
      required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  new_price:{
    type:Number,
    required:true,
  },
  old_price:{
    type:Number,
    required:true,
  },

})
app.post("/addUser",async(req,res)=>{
  
const newuser =new Loginuser({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password,
  
});

await newuser.save();

const token = jwt.sign({ id: newuser._id }, process.env.jwt_secret_key, {
  expiresIn: '1h', // Token expiration time (1 hour)
});

console.log("SAVED");
return res.json({newuser,token});

});

app.post("/login",async(req,res)=>{
 const email=req.body.email;
  // password:req.body.password;
  CheckEmail=await Loginuser.findOne({email});
  if(CheckEmail){
    const token=jwt.sign(process.env.jwt_secret_key);
    res.json({CheckEmail,token});
  }
  else{
    res.json("data not found");
  }
})

app.post("/addproduct",async(req,res)=>{
const products= await Product.find({});
let id;
  if(products.length>0){
    let last_product_array=products.slice(-1);
    let last_product=last_product_array[0];
    id=last_product.id+1;
  }
  else{
    id=1;
  }


  const product =new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  });

  await product.save();
  console.log("SAVED");
  res.json({
    success:true,
    name:req.body.name,
  })
})

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({
      _id:req.body.id,
    });
    console.log("removed");
    res.json({
      success:true,
      name:req.body.name,
    })
})

app.get('/getall',async(req,res)=>{
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    // Log each file name
    files.forEach(file => {
        console.log(file);
    });
});
let po= await Product.find();
  console.log("All Data");
  res.json(
    po
  )
})

app.listen(port, (error) => {
  if (!error) {
    console.log("server Runnning on port " + port);
  } else {
    console.log("Error spotted on port " + port);
  }
});