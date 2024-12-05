import { useRef, useState } from "react"
import axios from 'axios';
import { API_URL } from "../constant";

const AddProduct = () => {
    const [image,setImage]=useState(false);
    const nameRef=useRef(null);
    const categoryRef=useRef(null);
    const imageRef=useRef(null);
    const new_priceRef=useRef(null);
    const old_priceRef=useRef(null);
    const imageHandler =(e)=>{
        setImage(e.target.files[0]);
    }
    const addProduct = async () => {
        try {
          const productList = {
            name: nameRef.current?.value || "",
            category: categoryRef.current?.value || "",
            image: "",
            new_price: new_priceRef.current?.value || "",
            old_price: old_priceRef.current?.value || "",
          };
      
          // Prepare FormData
          let formData = new FormData();
          formData.append("product", image); // Ensure the key matches the backend
      
          
          const res = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          if (res.data?.image_url) {
            productList.image = res.data.image_url; 
            console.log("Product with Image URL:", productList);
            const result=await axios.post(`${API_URL}/addproduct`,productList);

            if(result?.data){
                alert("product added successfully");
            }
          }
        } catch (error) {
          console.error("Error uploading product:", error.message || error);
        }
      };
      
  return (
    <div className="flex flex-col gap-5 ">
      <h2>Product Title</h2>
      <input ref={nameRef} className="bg-slate-200 rounded-sm" type="text" placeholder="Type here" />
      <h2>new_price</h2>
      <input ref={new_priceRef} className="bg-slate-200 rounded-sm" type="number" placeholder="Type here" />
      <h2>old_price</h2>
      <input ref={old_priceRef} className="bg-slate-200 rounded-sm" type="number" placeholder="Type here" />
      <h2>Product Category</h2>
      <div>
      <select ref={categoryRef} name="category" id="category">
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </select>
      </div>
      <div>
        <label htmlFor="file-input">
            <img className="w-48 h-48" src={image? URL.createObjectURL(image):"https://cdn-icons-png.freepik.com/256/16816/16816945.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid"} alt="" />
        </label>
        <input ref={imageRef} onChange={imageHandler} className="bg-slate-200 rounded-sm" type="file" name="image" id="file-input" hidden/>
      </div>
       <button onClick={addProduct} className="bg-zinc-400 p-3 text-xl rounded-md">Add</button>
    </div>
  )
}

export default AddProduct
