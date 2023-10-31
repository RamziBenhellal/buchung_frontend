import { Component } from "react";

export default class extends Component{
   
    render(){

        return(
            <div>
                <nav>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">Home</li>
                        <li className="nav-item"><a href="/zweck/index" onClick={this.handleClick}>Zweck</a></li>
                        <li className="nav-item"><a href="/termin/index" onClick={this.handleClick}>Termin</a></li>
                         
                    </ul>
                </nav>
            </div>
        )
    }







}