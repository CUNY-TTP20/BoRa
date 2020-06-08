import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./components/login";
import axios from "axios";
import Debit from "./components/debit";
import Credit from "./components/credit"

class App extends Component {
  state = {
    logInBool: false,
    true_user: {
      username: "admin",
      pswd: "admin",
      amount: 15,
      fName: "John",
      lName: "Doe",
    },
    debit: "",
    total_debit: 0,
    credit: "",
    total_credit: 0,
  };
  giveBool = (someBool) => {
    this.setState({ logInBool: someBool });
  };
  componentDidMount() {
    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((res) => {
        let data = res.data;
        this.setState({
          credit: data,
        });
        let total_credit = this.state.total_credit;
        for (let i of data) {
          total_credit += i.amount;
        }
        this.setState({
          total_credit: total_credit,
        });
      }) // Error handling
      .catch((err) => {
        console.log("Errored because of ==> " + err);
      });
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((res) => {
        let data = res.data;
        this.setState({
          debit: data,
        });
        let total_debit = this.state.total_debit;
        for (let i of data) {
          total_debit += i.amount;
        }
        this.setState({
          total_debit: total_debit,
        });
      }) // Error handling
      .catch((err) => {
        console.log("Errored because of ==> " + err);
      });
  }
  render() {
    const HomeComponent = () => <Home userList={this.state.true_user} />;
    const DebitComponent = () => (
      <Debit debitJson={this.state.debit} totalDebit={this.state.total_debit} />
    );
        const CreditComponent = () => (
          <Credit
            creditJson={this.state.credit}
            totalCredit={this.state.total_credit}
          />
        );
    return (
      <div className="App">
        <header className="App-header">
          <h2>| Bank Of React. |</h2>
        </header>
        <body>
          {this.state.logInBool ? (
            <Router>
              <div>
                <Route exact path="/" render={HomeComponent} />
                <Route exact path="/debit" render={DebitComponent} />
                <Route exact path="/credit" render={CreditComponent} />
              </div>
            </Router>
          ) : (
            <div>
              <LoginPage
                onSubmit={this.giveBool}
                userList={this.state.true_user}
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </body>
      </div>
    );
  }
}

export default App;
