import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [favorite, setFavorite] = useState(false)

  const [allContact, setAllContact] = useState([]);



  const submitHandler = (e) => {
    e.preventDefault();      // prevent default nature of form 

    //ensuring that form is not empty by trimming it 
    const trimmedName=name.trim()
    const trimmedCompany=company.trim()
    const trimmedNumber=number.trim()

//if form is not empty than add contact to allcontact 

    if(trimmedCompany && trimmedName && trimmedNumber ){
      const copyarr=[...allContact,{name,company,number,favorite}]
      setAllContact(copyarr);
    }

    // otherwise alert
    else{
      alert('fill full form')
    }

    //form empty after each submmition 

    setName("");
    setCompany("");
    setNumber("");
    setFavorite(false)
  };

  //for deleting any contact

  const deleteHandler=(index)=>{
    const copyarr=[...allContact];
    copyarr.splice(index,1)
    setAllContact(copyarr)
  }

  // for deleting all contact

  const deleteAll =()=>{
setAllContact([]);
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
        onChange={(e)=> setFavorite(e.target.checked)}
        type="checkbox"  /> 
        <h1 
        className="inline-block text-xl">
          Add to Favorite
          </h1>
        </div>
        </div>
        
      
      </form>
      <div className="px-4 bg-gray-800 h-screen w-full py-2 ">
        <div className="w-full gap-10 flex ">
        <h2 className="text-2xl  border-2 border-blue-500 bg-blue-500 text-white text-semi-bold mt-4 w-[13%]  py-2 text-center rounded-md ml-2 mb-4"> All contacts</h2>
          <button 
          onClick={()=>{
            deleteAll()
          }}
          className=" bg-red-700 rounded-md py-2 text-2xl mt-4 ml-2 mb-4 text-white w-[13%]">🗑️ Delete All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mx-auto">
        {allContact.length > 0 ?(
            allContact.map((elem,index)=>(
              <div key={index} className="px-10 py-4 bg-gray-300 inline-block  rounded-md mr-4 mt-2 relative cursor-pointer  ">
            <h1 className="text-3xl capitalize font-bold">{elem.name}</h1>
            <h1 className="text-xl capitalize font-semibold ">{elem.company}</h1>
            <h1 className="text-xl">{elem.number}</h1>
            {elem.favorite ?(
              <p className="text-red-700 absolute right-2 top-2 text-3xl">❤️ </p>         //if  checked=true
            ):(
              <p className="text-red-700 absolute right-2 top-2 text-3xl">🤍 </p>         //otherwise show this 

            )}
            <button 
            onClick={()=>{
              deleteHandler(index);
            }}
            className="bg-red-700 px-4 py-2 rounded-md text-white mt-4">Delete</button>
          </div>
            ))
          ):(
            <h2 className="text-2xl text-semi-bold mt-4 text-gray-100">Contact Book is Empty..</h2>

          )}
        
        </div>
      

        </div>
    </div>
  );
};

export default App;
