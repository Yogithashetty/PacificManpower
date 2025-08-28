import React, { useEffect, useState } from "react"
import {LocationOn ,Facebook,LinkedIn, }from "@mui/icons-material";


function DateAndTime(){
     const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);


     return(
     <div>
      <LocationOn sx={{color:"white"}} fontSize="large" />
      Location: Bengalore, Karnataka
      <Facebook />
      <LinkedIn />
      
      {dateTime.toLocaleString("en-US", {
        month: "short",   // Aug
        day: "2-digit",   // 25
        year: "numeric",  // 2025
        hour: "2-digit",  // 10
        minute: "2-digit",// 28
        second: "2-digit",// 39
        hour12: true      // AM/PM
      })}
   
  
    </div>     


     );

}

export default DateAndTime   
           
