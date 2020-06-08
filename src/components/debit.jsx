import React, { Component } from "react";
import { Link } from "react-router-dom";
class Debit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debitJson: this.props.debitJson,
      totalDebit: this.props.totalDebit,
    };
  }
  render() {
    // console.log(this.state.debitJson);
    const table = this.state.debitJson;
    const aTable = table.map((i) => {
      return (
        <tr>
          <td>{i.date}</td>
          <td>{i.description}</td>
          <td>{i.amount}</td>
        </tr>
      );
    });
    return (
      <div style={{ textAlign: "center", alignItems: "center" }}>
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
          <h1>${this.state.totalDebit}</h1>
          <div>
            <table className="table table-dark table-hover">
              <thead>
                <td>Date</td>
                <td>Description</td>
                <td>Amount</td>
              </thead>
              {aTable}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Debit;
