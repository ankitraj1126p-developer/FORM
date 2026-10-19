import {useState} from "react";

export default function Form(){

  let[fullName,setFullName]= useState("");

    let handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  return(

    <form>

      <label htmlFor="username">Full Name</label>
      <h1>Student's Detail</h1>

      <input placeholder="Enter your full name" type="text" value={fullName} onChange={handleNameChange}/>

      &nbsp;
      &nbsp;

      <button>Submit</button>


      


    </form>

  );

  
}