//there can only be one default  componenent function to be exported from a file.

import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Index(){

  const[data,setdata]=useState({
    main:{
      temp:0,
      temp_max:0,
      temp_min:0,

    },
    weather:[{
      description:'this is nothing',
    }],
    wind:{
      speed:0,
    }

  });
  //using axios to call weather api to display weather app information 
  
 
  //use eeffect funciton takes in a single call back function and if u want to call only one time then pass []
  useEffect(() =>{
    console.log("use effect bhitra xa haio")
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=    London, GB &units=metric&appid=1dc456c0e1625fb8d3ec4d9a4dd0402e",).then((result)=>{
      console.log(result.data)
      setdata(result.data)
    })


  },[])








  

  return (

   
     <div className="body">
    <main>
        <div class="display">
            <div class="city" id="city">{data.name}</div>    
            <div class="date" id="date">{data.dt}</div>     
             
            <div class="data">
                <div class="temp" id="temperature">{data.main.temp}</div> 
                <img class="ticon" id="ticon"/>
                <div class="high" id="high">{data.main.temp_max}</div>
                <div class="low" id="low">{data.main.temp_min}</div>
                <div class="desc" id="desc"> des:{data.weather[0].description}</div>
                <div class="wind" id="win">{data.wind.speed}</div> 
                


            </div>
           
            
                
            

            
           
        </div>
        
    </main>
    </div>



  )
}