import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [favorite, setFavorite] = useState(false)

  const [allContact, setAllContact] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedName=name.trim()
    const trimmedCompany=company.trim()
    const trimmedNumber=number.trim()

    if(trimmedCompany && trimmedName && trimmedNumber ){
      const copyarr=[...allContact,{name,company,number,favorite}]
      setAllContact(copyarr);
    }
    else{
      alert('fill full form')
    }
    setName("");
    setCompany("");
    setNumber("");
    setFavorite(false)
  };

  const deleteHandler=(index)=>{
    const copyarr=[...allContact];
    copyarr.splice(index,1)
    setAllContact(copyarr)

  }
  return (
    <div className=""> 
      <form 
      className="px-4 text-center"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label className="mr-16 pr-4">Name*</label>
        <input
          className="px-4 py-2 outline-none text-xl rounded-md border-2 border-black mt-4 w-[50%]"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="enter name"
        />
        <br />
        <label className="mr-2">Company Name*</label>

        <input
          className="px-4 py-2 outline-none text-xl rounded-md border-2 border-black mt-4 w-[50%]"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          value={company}
          type="text"
          placeholder="enter company"
        />
        <br />
        <label className="mr-10 ">Contact No.*</label> 

        <input
          className="px-4 py-2 outline-none text-xl rounded-md border-2 border-black mt-4 w-[50%]"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
          type="number"
          placeholder="enter number"
        />
        <br />
        <div className="flex items-center gap-10 justify-center">
        <button className="px-4 py-2 outline-none bg-blue-500 text-white text-xl rounded-md border-2 border-black mt-4 mb-4">
          Add Contact
        </button>

        <div>
        <input 
        className="mr-2" 
        checked={favorite} 
        onChange={(e)=> setFavorite(e.target.value)}
        type="checkbox"  /> 
        <h1 
        className="inline-block text-xl">
          Add to Favorite
          </h1>
        </div>
        </div>
        
      
      </form>
      <div className="px-4 bg-gray-400 h-screen w-full py-2">
        <h2 className="text-2xl  border-2 border-blue-500 bg-blue-500 text-white text-semi-bold mt-4 w-[13%] px-4 py-2 text-center rounded-md"> All contacts</h2>
          {allContact.length > 0 ?(
            allContact.map((elem,index)=>(
              <div key={index} className="px-10 py-4 bg-gray-300 inline-block w-[30%] rounded-md mr-4 mt-2 relative cursor-pointer ">
            <h1 className="text-3xl capitalize font-bold">{elem.name}</h1>
            <h1 className="text-xl capitalize font-semibold ">{elem.company}</h1>
            <h1 className="text-xl">{elem.number}</h1>
            {elem.favorite ?(
              <p className="text-red-700 absolute right-2 top-2 text-3xl">❤️ </p>
            ):(
              <p className="text-red-700 absolute right-2 top-2 text-3xl">🤍 </p>

            )}
            <button 
            onClick={()=>{
              deleteHandler(index);
            }}
            className="bg-red-700 px-4 py-2 rounded-md text-white mt-4">Delete</button>
          </div>
            ))
          ):(
            <h2 className="text-2xl text-semi-bold mt-4 text-gray-100">Add contacts...</h2>

          )}
        

        </div>
    </div>
  );
};

export default App;
