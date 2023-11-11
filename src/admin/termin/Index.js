import axios from "axios";
import { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termine:[]
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/buchung/termin/index";

    axios.get(url).then((response) => this.setState({ termine: response.data }));
  }

  render() {

    return (
        <div>
          <a href="/admin/termin/add">Termin hinzufügen</a>
          <table>
            <thead>
            <tr>
              <th>Id</th>
              <th>Datum</th>
              <th>Zeit</th>
              <th>Zweck</th>
              <th>Buchungsstatus</th>
              <th>Aktion</th>

            </tr>
            </thead>
            <tbody>
            {this.state.termine.map((item, index) => (
              <tr key={item.terminNr}>
                <td>{item.terminNr}</td>
                <td>{item.datum}</td>
                <td>{item.zeit}</td>
                <td>{item.zweck.name}</td>
                <td>{item.status}</td>
              <td><a href={"/admin/termin/edit/"+item.terminNr}>Bearbeiten</a></td>
              <td><a href={"/admin/termin/details/"+item.terminNr}>Details</a></td>
              </tr>
            ))}
            </tbody>
          </table>
          
        </div>
      );
  }
}
