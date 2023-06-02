import React, {useEffect, useState } from "react";



function Allamerica() {
  
  const [data,setdata]=useState([{}]); 
  

  const getData=()=>{


    try{

        fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        ).then((response)=>response.json())
        .then((json)=>{
          setdata(json);
          // console.log(json);
      
        })
    }
    catch(error){
      console.error("error");
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
     {(data[0].show.summary)}
      
       
       {/* {data.show ? data.show : 'Default Name'} */}

    </div>
  )
}

export default Allamerica