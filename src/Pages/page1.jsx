import React, { useState } from 'react'



function RandomeJoke() {

   const [joke,setJoke] = useState({
      type:"",
      Santa:"",
      Banta:""
   })

async function fetchJoke(){
      
    try{
      const res = await fetch("https://official-joke-api.appspot.com/random_joke"); 
      const data = await res.json();
      console.log(data);
      setJoke({
        type:data.type,
        Santa:data.punchline,
        Banta:data.setup
      });
    }
    catch(err){
console.log(err);
    }
}


  return (
    <div className="flex justify-center items-center h-[95vh] bg-amber-500">
      <div className='flex flex-col gap-3 justify-center items-center'>
        <div className="bg-white p-5 rounded-xl shadow-md w-75 sm:w-[35vw]">
          <h2 className='text-center text-2xl pb-2.5'>{joke.type.length==0?"Welcome":joke.type.charAt(0).toUpperCase()+joke.type.slice(1)+" Jokes!"}</h2>
       <div className='flex flex-col gap-11'>
            {joke.type.length==0?
            <><p className='text-3xl text-red-500'>Press down to see new jokes!!</p></>:<>
                  <p className="text-lg font-semibold text-blue-600">Banta: <span className='text-yellow-600'>{joke.Banta}</span></p>
                <p className="text-lg font-semibold text-blue-600">Santa: <span className='text-yellow-600'>{joke.Santa}</span></p>
            </>}   
       </div>
      </div>
      <button onClick={()=>{
        fetchJoke();
      }}
      className='bg-blue-600 w-30 p-2 rounded-2xl outline-none'>
        New Joke!
      </button>
      </div>
    </div>
  )
}

export default RandomeJoke
