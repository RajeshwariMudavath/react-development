import {useDispatch} from "react-redux";
import { useState } from "react";
import {Increment} from "../Actions/count"
import  {useSelector}  from "react-redux"
function CountOfStudent(){
    const[increment,setIncrement]=useState(0)
    
    
  
    const dispatch = useDispatch();
    const handleChange1 = (e) =>{
        setIncrement(e.target.value)
        dispatch(Increment(increment))

    }
   
    const UpdateValue = useSelector((state) => {
       
        if (state && state.count !== undefined) {
            
            return state.count;
        }
        // Default value or handle the case when count is undefined
        return 0; // Set a default value, replace it with your desired logic
    });

    return(
<div>
    <label>Increment :</label>
    <input type="number" value={increment} onChange={handleChange1}/>
    <label>total count :</label>
    <input type="text" value={UpdateValue}/>
    

</div>

    )
}
export default CountOfStudent;