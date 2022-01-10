import React from 'react';
import "./App.css";
import Contact from "./component/Contact";
import FormComp from "./component/FormComp";

const initialValue = {userName : '', phoneNumber : "", email : ""}
function App() {
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(info);
  }

  const [info,setInfo] = React.useState(initialValue)
  return (
    <div className="App">
      <FormComp info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
      <Contact />
    </div>
  );
}

export default App;
