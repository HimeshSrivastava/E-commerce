import axios from "axios";
import { API_URL } from "../constant";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

 
  const GetAllData = async () => {
    try {
      const res = await axios.get(`${API_URL}/getall`);
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllData();
  }, []);

  
  const removeitem = async (id) => {
    try {
      const result = await axios.post(`${API_URL}/removeproduct`, { id });
      if (result.data) {
        
        setProductData((prevData) => prevData.filter((product) => product._id !== id));
        console.log(result.data); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold m-3">ALL PRODUCT</h1>
      <div className="flex gap-32 text-xl font-medium m-2 overflow-y: scroll">
        <p>Name</p>
        <p>Category</p>
        <p>Old_Price</p>
        <p>New_Price</p>
        <p>Image</p>
        <p>Remove</p>
      </div>
      <div className="overflow-y-auto max-h-96">
        {productData.length > 0 ? (
          <ul className="flex flex-col gap-10">
            {productData.map((product) => (
              <li className="flex text-md font-normal" key={product.id || product._id}>
                <p className="w-52">{product.name}</p>
                <p className="w-52">{product.category}</p>
                <p className="w-52">{product.old_price}</p>
                <p className="w-52">{product.new_price}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-30 h-20 mr-12"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/4682/4682137.png?semt=ais_hybrid"
                  alt="delete_icon"
                  className="w-10 h-10"
                  onClick={() => removeitem(product._id)} // Call removeitem on click
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
