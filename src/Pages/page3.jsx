import React, { useState } from 'react'

function CalculatorApp() {
 
 const [currentInput,setCurrentInput] = useState("");
//  const[previousInput,setPreviousInput] = useState("");
 const buttonsArray = ["7","8","9","6","5","4","3","2","1","+","-","*","%","=","AC"];

function findAnswer(){
    try{
        let result = eval(currentInput);
        setCurrentInput(result);
    }
    catch(err){
        setCurrentInput("Invalid Input");
    }
}
function clearInput(){
    setCurrentInput("");
}
  return (
    <div className='h-[99vh] flex justify-center items-center bg-gray-950'>
      <div className='w-70 bg-gray-600 rounded shadow-white p-2'>
        {/* Display */}
        <div className='p-3 h-15 bg-gray-50 m-4 rounded overflow-x-auto text-right'>
        <span className='text-3xl text-blue-500 font-extrabold font-mono whitespace-nowrap cursor-pointer'>{currentInput}</span>
        </div>
        {/* end Display */}
        {/* Button */}
        <div className='grid grid-cols-4 justify-center'>
           {
            buttonsArray.map((input)=>{
                 if(input=="="){
                      return <div className='m-1 p-4 text-white font-bold bg-gray-400 rounded text-center col-span-2 text-xl hover:bg-gray-300 cursor-pointer'
                      onClick={()=>{
                        findAnswer();
                      }}
                      >
                         {input}
                        </div>
                 }
                 else if(input=="AC"){
                    
                    return <div className='m-1 p-3 bg-gray-500 text-white text-center text-xl shadow-white rounded hover:bg-gray-400 cursor-pointer'
                      onClick={()=>{
                        clearInput();
                      }}
                    >
                         {input}
                        </div>

                 }
                 else{
                    return <div className='text-center text-white m-1 p-4 bg-gray-500 rounded text-xl hover:bg-gray-700 cursor-pointer'
                      onClick={(e)=>{
                         setCurrentInput(currentInput+e.target.innerText);
                      }}
                    >
                         {input}
                        </div>
                 }
            })
           }
        </div>
        {/* End Buttons */}
      </div>
    </div>
  )
}

export default CalculatorApp
