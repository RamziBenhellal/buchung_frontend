import axios from "axios";
import React, { useRef } from "react";

function Add(props) {

  const refName = useRef();
  const refBemerkung = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/buchung/zweck/add";
    axios
      .post(url, {
        name: refName.current.value,
        bemerkung: refBemerkung.current.value,
      })
      .then(alert("Zweck Added"));
      
  };

  return (
    <div>
      <h1>Zweck Hinzufügen</h1>
      <form>
        <label>Name :</label>
        <input type="text" name="name" ref={refName} />
        <br />
        <br />
        <label>Bemerkung : </label>
        <textarea
          rows="4"
          cols="50"
          name="bemerkung"
          ref={refBemerkung}
        ></textarea>
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Hinzufügen
        </button>
      </form>
    </div>
  );
}


export default Add;
