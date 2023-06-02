import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Allamerica from './Allamerica';

function Api2() {

    const [users, setUsers] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    try{

      fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      ).then((response) => response.json())
        .then((json)=>{
          console.log(json);
          setUsers(json);
        })
    }
    catch(error){
      console.error("error");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      {/* <button onClick={getApiData}>fetch</button> */}
      {/* {JSON.stringify(users,null,2)} */}
      {users && users.map((data,index)=>{
        return(

        <div key={index}>
          <Link to='/allamerica'>
          
            <button >{data.show.name}</button>
          </Link>
          
          <p></p>
      
        </div>
        )
      })}
    </div>
  )
}

export default Api2;