const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const os= require("os");
const freememory= os.freemem()
console.log(`${freememory/1024/1024/1024}`);
const app = express();

app.use(express.json());
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors({ origin: 'https://e-commerce-admin-sn3i.onrender.com/' }));

//Database connection with maongodb
mongoose.connect(
  "mongodb+srv://himeshsrivastava123:rk9RUCdC3aJsdqWA@cluster0.aqzjeb9.mongodb.net/E-commerence"
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
    image_url: `https://e-commerce-1-px4m.onrender.com/images/${req.file.filename}`,
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

console.log("SAVED");
return res.json(newuser);

});

app.post("/login",async(req,res)=>{
 const email=req.body.email;
  // password:req.body.password;
  CheckEmail=await Loginuser.findOne({email});
  if(CheckEmail){
    res.json(CheckEmail);
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