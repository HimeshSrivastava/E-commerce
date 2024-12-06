// import {Link} from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col gap-10 m-4'>
//       <Link to={'/addproduct'}>
//         <div className='flex gap-5 items-center bg-slate-300 p-3 rounded-md '>
//             <img className='w-10 h-10' src="https://cdn-icons-png.freepik.com/256/10553/10553142.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid" alt="" />
//             <h2>Add Product</h2>
//         </div>
//       </Link>
//       <Link to={'/productlist'}>
//         <div className='flex gap-5 items-center bg-slate-300 p-3 rounded-md'>
//             <img className='w-10 h-10' src="https://cdn-icons-png.freepik.com/256/17551/17551239.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid" alt="" />
//             <h2>Product List</h2>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default Sidebar
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-10 m-4'>
     <Link to="/addproduct">
        <div className="flex gap-4 items-center bg-slate-300 p-3 rounded-md w-full hover:bg-slate-400 transition">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="https://cdn-icons-png.freepik.com/256/10553/10553142.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid"
            alt="Add Product"
          />
          <h2 className="text-sm md:text-lg font-medium text-center md:text-left">
            Add Product
          </h2>
        </div>
      </Link>
      <Link to="/productlist">
        <div className="flex gap-4 items-center bg-slate-300 p-3 rounded-md w-full hover:bg-slate-400 transition">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="https://cdn-icons-png.freepik.com/256/17551/17551239.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid"
            alt="Product List"
          />
          <h2 className="text-sm md:text-lg font-medium text-center md:text-left">
            Product List
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
