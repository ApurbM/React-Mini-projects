import React, { useEffect, useState } from 'react'

function TimerSystem() {
  
  const [time,setTime] = useState("");
    useEffect(()=>{
     const close = setInterval(()=>{
          setTime(new Date().toLocaleTimeString());
       },1000);

       return ()=>{
           clearInterval(close);
       }
  },[])


  return (
    <div className='flex justify-center items-center bg-gray-900 h-screen'>
        <div className='bg-white rounded-2xl shadow-white p-6'>
         <span className='text-2xl text-gray-600'>{time?time:<>
                
<div className="h-9 w-9 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</>}</span>
        </div>
    </div>
  )
}

export default TimerSystem
