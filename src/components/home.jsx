import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.userList
        }
    }
    render() {
        return (
          <div style={{ textAlign: "center" }}>
            <div className="btn-group">
              <Link className="btn btn-info" to="/">
                Home
              </Link>
              <Link className="btn btn-info" to="/debit">
                Debits
              </Link>
              <Link className="btn btn-info" to="/credit">
                Credit
              </Link>
            </div>
            <div className="container p-3 my-3 bg-dark text-white">
              <h1>User Name :&emsp;{this.state.user.username}</h1>
              <br />
              <h1>First Name :&emsp;{this.state.user.fName}</h1> &emsp;
              <h1>Last Name :&emsp;{this.state.user.lName}</h1>
              <br />
              <h1>Amount :&emsp;$ {this.state.user.amount}</h1>
            </div>
          </div>
        );
    }
}
export default Home;