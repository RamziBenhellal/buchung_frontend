import React, { Component } from "react";

class Index extends Component {
  state = {
    zwecke: [
      { id: 1, name: "Anmeldung", bemerkung: "Wohnungsgeberbestaetigung" },
      { id: 2, name: "Legalisierung", bemerkung: "Dokumente im Original" },
      {
        id: 3,
        name: "Verpflichtserklaerung",
        bemerkung: "EInkommen von letzte 3 Monaten",
      },
    ],
  };
  render() {
    const data = this.state.zwecke.map((item) => {
      return (
        <ul key={item.id}>
          <li>Id: {item.id}</li>
          <li>Zweck: {item.name}</li>
          <li>Bemerkung: {item.bemerkung}</li>
        </ul>
      );
    });
    return (
      <div>
        Hello World!
        <div>{data}</div>
        <table>
          <tr>
            <th>Id</th>
            <th>Zweck</th>
            <th>Bemerkung</th>
          </tr>
          {this.state.zwecke.map(
            (item,index)=>
            <tr key={item.index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.bemerkung}</td>
          </tr>
          )}
          
          
        </table>
        <ul>
          {this.state.zwecke.map((item) => (
            <li>{item.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Index;
