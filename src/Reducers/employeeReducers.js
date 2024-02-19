const initialState = {
    employees: [],
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return {
          ...state,
          employees: [...state.employees, action.payload],
        };
      default:
        return state;
    } 
  };
  
  export default employeeReducer;
// const initialState = {
//       count:0,
//    };
   
//    const employeeReducer = (state=initialState,action) => {
//     switch (action.type){
      
//       case 'increment':
//         console.log(state.count+Number(action.payload),"value")
//         return {
//           ...state,
// count:state.count+Number(action.payload)

//         }
       
      
//     }
  
    
//     }
   
//     export default employeeReducer
   