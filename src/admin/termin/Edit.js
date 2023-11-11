import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

export default function Edit() {
  const params = useParams();

  const id = params.id;
  const [datum, setDatum] = useState("");
  const [zeit, setZeit] = useState("");
  const [zweck, setZweck] = useState({ name: "", bemerkung: "" });
  const [zwecke, setZwecke] = useState([]);

  const refDatum = useRef();
  const refZeit = useRef();
  const refZweck = useRef();

  useEffect(() => {
    const url = "http://localhost:8080/buchung/zweck/index";
    axios
      .get(url)
      .then((response) => setZwecke(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/buchung/termin/details/" + id)
      .then((response) => {
        setDatum(response.data.datum);
        setZeit(response.data.zeit);
        setZweck(response.data.zweck);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/buchung/termin/edit/" + id;

    axios
      .put(url, {
        datum: refDatum.current.value,
        zeit: refZeit.current.value,
      })
      .then(() => {
        const url2 =
          "http://localhost:8080/buchung/termin/edit/" +
          id +
          "/" +
          refZweck.current.value;
        axios.put(url2);
      });
  };

  return (
    <div>
      <h1>Termin bearbeiten</h1>
      <form onSubmit={handleSubmit}>
        <label>Datum</label>
        <input type="date" name="datum" defaultValue={datum} ref={refDatum} />
        <br />
        <br />
        <label>Zeit</label>
        <input type="time" name="zeit" defaultValue={zeit} ref={refZeit} />
        <br />
        <br />
        <select name="zweck" ref={refZweck}>
          <option value={zweck.id} disabled selected>
            {zweck.name}
          </option>
          {zwecke.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button type="submit">Bearbeiten</button>
      </form>
    </div>
  );
}
