import React from "react";
import { useState } from "react";
function CalculatorData(){

    const [secondLetter,setSecondLetter]=useState(false)
    const [displayValue,setDisplayValue]=useState("0")
    const [firstOperand,setFirstOperand]=useState(null)
    const [operator, setOperator] = useState(null);
    const Calculator = (digit) =>{
     console.log(digit)
     if(secondLetter){
       setDisplayValue(String(digit));
       setSecondLetter(false)
     }else{
       setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
     }
     
    }
    const calculate = (firstOperand, secondOperand, operator) => {
     switch (operator) {
       case '+':
         return firstOperand + secondOperand;
       case '-':
         return firstOperand - secondOperand;
       case '*':
         return firstOperand * secondOperand;
       case '/':
         return firstOperand / secondOperand;
       default:
         return secondOperand;
     }
   };
    const performOperation = (nextOperator) => {
     console.log(nextOperator)
     const inputValue = parseFloat(displayValue);
     console.log(inputValue)
     if (firstOperand === null) {
       setFirstOperand(inputValue);
     } else if (operator) {
       const result = calculate(firstOperand, inputValue, operator);
       setDisplayValue(String(result));
       setFirstOperand(result);
     }
   
     setSecondLetter(true);
     setOperator(nextOperator);
   
    }
    const clearDisplay = () => {
     setDisplayValue('0');
     
   };
    return(
<>
<div className="container-fluid">
      <div className="row">
        <div className='col-4 offset-4 card mt-5'>
        <div className="card-header row">Simple Calculator</div>
        <div className="card-body row">
          <div className='col-12  mb-5'><input
            type="text"
            className=" calculator-screen"
            value={displayValue}
            placeholder="Enter expression"
            
          /></div>
          
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="1" onClick={(e)=>Calculator(e.target.value)} >1</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="2" onClick={(e)=>Calculator(e.target.value)}>2</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="3" onClick={(e)=>Calculator(e.target.value)}>3</button></div>
          <div className='col-3'><button className="btn btn-info waves-effect mb-3" value="+" onClick={(e)=>performOperation(e.target.value)}>+</button></div>
            
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="4" onClick={(e)=>Calculator(e.target.value)}>4</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="5" onClick={(e)=>Calculator(e.target.value)}>5</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="6" onClick={(e)=>Calculator(e.target.value)}>6</button></div>
          <div className='col-3'><button className="btn btn-info waves-effect mb-3" value="-" onClick={(e)=>performOperation(e.target.value)}>-</button></div>
          
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="7" onClick={(e)=>Calculator(e.target.value)}>7</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="8" onClick={(e)=>Calculator(e.target.value)}>8</button></div>
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="9" onClick={(e)=>Calculator(e.target.value)}>9</button></div>
          <div className='col-3'><button className="btn btn-info waves-effect mb-3" value="*" onClick={(e)=>performOperation(e.target.value)}>&times;</button></div>
         
          <div className='col-3'><button className="btn btn-light waves-effect mb-3" value="0" onClick={(e)=>Calculator(e.target.value)}>0</button></div>
          <div className='col-3'><button className="btn btn-danger waves-effect mb-3 " value="c" onClick={(e)=>clearDisplay(e.target.value)}>c</button></div>
          <div className='col-3'><button className="btn btn-info waves-effect mb-3" value="=" onClick={(e)=>performOperation(e.target.value)}>=</button></div>
          <div className='col-3'><button className="btn btn-info waves-effect mb-3" value="/" onClick={(e)=>performOperation(e.target.value)}>&divide;</button></div>
         
         
        </div>
        </div>
        
      </div>
    </div>  
</>
    )
}
export default CalculatorData;