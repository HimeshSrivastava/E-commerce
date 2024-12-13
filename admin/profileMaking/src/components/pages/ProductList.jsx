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
    <div className="w-full h-screen flex flex-col bg-gray-100">
  
      <h1 className="text-3xl font-bold text-center mt-4 mb-4">ALL PRODUCTS</h1>

      <div className="hidden md:flex justify-between px-4 py-2 bg-gray-200 text-lg font-semibold shadow-md">
        <p className="w-1/6 text-center">Name</p>
        <p className="w-1/6 text-center">Category</p>
        <p className="w-1/6 text-center">Old Price</p>
        <p className="w-1/6 text-center">New Price</p>
        <p className="w-1/6 text-center">Image</p>
        <p className="w-1/6 text-center">Remove</p>
      </div>

      <div className="flex-grow overflow-y-auto px-4">
        {productData.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {productData.map((product) => (
              <li
                className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-md shadow-md"
                key={product._id}
              >
                <p className="w-full md:w-1/6 text-center">{product.name}</p>
                <p className="w-full md:w-1/6 text-center">{product.category}</p>
                <p className="w-full md:w-1/6 text-center">{product.old_price}</p>
                <p className="w-full md:w-1/6 text-center">{product.new_price}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-md mx-auto"
                />
                <button
                  onClick={() => removeitem(product._id)}
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/4682/4682137.png?semt=ais_hybrid"
                    alt="delete_icon"
                    className="w-6 h-6"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-4 text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

