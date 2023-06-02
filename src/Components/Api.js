import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
// import All_america from "C:/Users/AMD/Desktop/Show React/shows/src/Components/All_america"


function App() {
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
          <p>{JSON.stringify(data.show.summary,null,2)}</p>
          <p></p>
      
        </div>
        )
      })}
      

      
  
  
      


    </div>
  );
}

export default App;