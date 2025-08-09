import { useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import Resume from "./components/Resume";

export default function App() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    summary:"",
  })

  const handleChange = (e) => {
    const key = e.target.name;
    setInfo({...info, [key]: e.target.value});
  }



  return (
    <div className = "App">
      <GeneralForm change = {handleChange}/>
      <Resume info = {info} />
    </div>
  );
}
