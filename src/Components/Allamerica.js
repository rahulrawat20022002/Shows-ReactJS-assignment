import React, {useEffect, useState } from "react";



function Allamerica() {
  
  const [data,setdata]=useState([{}]); 
  

  const getData=()=>{


      fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      ).then((response)=>response.json())
      .then((json)=>{
        setdata(json);
        console.log(json);
    
      })
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      {data.show.name}
    </div>
  )
}

export default Allamerica