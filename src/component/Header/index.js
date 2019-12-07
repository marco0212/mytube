import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  handlerOnSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.inputText}`);
  }
  handlerOnChange(e) {
    this.setState({ inputText: e.target.value });
  }
  render() {
    return (
      <header className="py-3 bg-dark sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <h1 className="logo mr-sm-3 my-auto">
                  <Link to="/" className="text-white">
                    MYTUBE
                  </Link>
                </h1>
                <form
                  className="d-flex my-auto"
                  onSubmit={this.handlerOnSubmit.bind(this)}
                >
                  <input
                    className="form-control form-control-lg mr-3 mr-sm-1"
                    placeholder="Search"
                    onChange={this.handlerOnChange.bind(this)}
                  />
                  <button className="btn btn-outline-success btn-lg">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
