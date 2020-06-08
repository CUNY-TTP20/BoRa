import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userList: this.props.userList,
      name: "",
      passwd:"",
    }
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // le.state.userList;
    console.log(this.state.userList.username);
    if (this.state.userList.username === this.state.name && this.state.userList.pswd === this.state.passwd) { 
      let return_bool = true;
              this.props.onSubmit(true);
    } else {
      alert("The password or username is incorrect.")
    }
  }
  render() {
    return (
      <div
        className="container p-3 my-3 bg-dark text-white"
        style={{
          position: "relative",
          textAlign: "center",
          margin: "0 auto",
          width: "35%",
          height: "90%",
          top: "5%",
          topPadding: "80%",
          borderRadius: "8%",
        }}
      >
        <form
          style={{
            position: "relative",
            top: "10%",
          }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <img
              src="https://picsum.photos/300/300?grayscale"
              alt="Avatar"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              left: "20%",
              position: "relative",
              alignItems: "center",
              top: "50%",
              width: "60%",
            }}
          >
            <div className="form-group">
              <label for="usr">Name:</label>
              <input type="text" name="name" className="form-control" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" name="passwd" className="form-control" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-light">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginPage;
