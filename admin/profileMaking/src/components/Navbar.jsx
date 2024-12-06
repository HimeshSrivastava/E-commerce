

// const Navbar = () => {
//   return (
//     <div>
//      <div className="flex items-center m-0 p-0 bg-orange-200 gap-4">
//           <img className="w-20 h-20" src="https://cdn-icons-png.freepik.com/256/11137/11137664.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid" alt="logo"  />
//           <p className="text-center font-bold text-2xl" >SHOPPER</p>
//         </div>
     
//     </div>
//   )
// }

// export default Navbar
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center  p-4 bg-orange-200 gap-4">
        
        <img 
          className="w-16 h-16 md:w-20 md:h-20" 
          src="https://cdn-icons-png.freepik.com/256/11137/11137664.png?ga=GA1.1.1340374240.1733212174&semt=ais_hybrid" 
          alt="logo" 
        />
        
       
        <p className="text-xl font-bold text-center md:text-2xl">
          SHOPPER
        </p>
      </div>
    </div>
  );
};

export default Navbar;

