import React from 'react';
import { ToastContainer } from 'react-toastify';
import "./App.css";
import "./index.css"
import Contact from "./component/Contact";
import FormComp from "./component/FormComp";
import {addInfo,editContact} from "./utils/functions"



const initialValue = {userName : '', phoneNumber : "", email : ""}
function App() {
  const [info,setInfo] = React.useState(initialValue)
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(info.id){
      editContact(info)
    }else{
      addInfo(info);
    }
    setInfo(initialValue);
  }

const editHandler = (id,userName,phoneNumber,email)=>{
  setInfo({id,userName,phoneNumber,email})
}
  
  return (
    <div className="App">
      <FormComp info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
      <Contact editHandler={editHandler}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
