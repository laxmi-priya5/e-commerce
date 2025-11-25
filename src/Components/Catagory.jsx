const Catagory = ()=>{
    const catagories = [
    { name: "Mobiles", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Electronics", icon: "💻" },
    { name: "Appliances", icon: "🔌" },
    { name: "Home", icon: "🏠" },
  
    { name: "Beauty", icon: "💄" },

    { name: "Toys", icon: "🧸" },
    { name: "Sports", icon: "🏀" },

    { name: "Books", icon: "📚" },

    { name: "Groceries", icon: "🛒" },

    { name: "Gaming", icon: "🎮" },

    { name: "Stationery", icon: "✏️" },

    { name: "Music", icon: "🎵" },

    { name: "Movies", icon: "🎬" },

    { name: "Pet Care", icon: "🐶" }

  ];

  return(
   <div className="w-full bg-white p-4 flex  gap-10 overflow-x-auto">
      {catagories.map((catagory , index )=> 
      (
        <div key={index} >
        <div className="text-3xl ">{catagory.icon}</div>
        <p className="mt-1 text-sm">{catagory.name}</p>
      </div>
      
       
      ))}
  </div>)

}

export default Catagory;