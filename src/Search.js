import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";


export default function Search() {
  let [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let text = document.querySelector(".text");
    if (city.length <= 0) {
      text.innerHTML = "";
    } else {
      text.innerHTML = `Weather in ${city}`;
    setShow(true);
    }
    
  }
  
  
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div>
    
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className="text"></div>
        {show && <Weather place={city} />}
    </div>
  );
}
