import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

export default function Edit() {
  const params = useParams();

  const [id, setId] = useState(params.id);
  const [name, setName] = useState("");
  const [bemerkung, setBemerkung] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/buchung/zweck/details/" + id)
      .then((response) => {
        setName(response.data.name);
        setBemerkung(response.data.bemerkung);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const refName = useRef();
  const refBemerkung = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/buchung/zweck/edit/" + id;
    axios.put(url, {
      name: refName.current.value,
      bemerkung: refBemerkung.current.value,
    });
  };

  return (
    <div>
      <h1>Zweck Hinzufügen</h1>
      <form>
        <label>Name :</label>
        <input type="text" defaultValue={name} ref={refName} />
        <br />
        <br />
        <label>Bemerkung : </label>
        <textarea
          rows="4"
          cols="50"
          name="bemerkung"
          defaultValue={bemerkung}
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
