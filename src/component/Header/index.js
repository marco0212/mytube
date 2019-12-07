import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  handlerChange(e) {
    const typingText = e.target.value;
    this.setState({
      inputText: typingText
    });
  }
  render() {
    return (
      <header className="sticky-top bg-danger py-2 shadow">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-7">
              <h1 className="mb-0">
                <Link className="text-white" to="/">
                  MYTUBE
                </Link>
              </h1>
            </div>
            <div className="col-6 col-sm-6 col-md-5 my-auto">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handlerChange.bind(this)}
                />
                <Link
                  className="input-group-append"
                  to={{
                    pathname: `/search/${this.state.inputText}`,
                    state: { id: this.state.inputText }
                  }}
                >
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
