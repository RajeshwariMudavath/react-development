import './App.css';
import CountOfStudent from './Components/CountOfStudent';
import EmployeeeData from "./EmployeeData"
import RegistrationForm from "./Login"
import EmployeeForm from "./Components/employeeForm"
import EmployeeTable from "./Components/employeeTable"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import employeeReducer from "./Reducers/employeeReducers";


const store = createStore(employeeReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CountOfStudent/> */}
        
        <EmployeeForm/>
        <EmployeeTable/>
        {/* Other child components */}
      </div>
    </Provider>
  );
}

export default App;
