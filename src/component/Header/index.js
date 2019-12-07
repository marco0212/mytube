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
      <header>
        <h1>
          <Link to="/">mytube</Link>
        </h1>
        <form onSubmit={this.handlerOnSubmit.bind(this)}>
          <input onChange={this.handlerOnChange.bind(this)} />
          <button>검색</button>
        </form>
      </header>
    );
  }
}
