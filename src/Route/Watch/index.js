import React from "react";
import { getVideoById } from "../../functions";
export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  getVideoById = id => {
    getVideoById(id, data => {
      if (!data) {
        this.props.history.push("/");
        return;
      }
      this.setState({ data, isLoading: false });
    });
  };
  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.id;
    if (prevProps.match.params.id !== currentId) {
      this.getVideoById(currentId);
    }
  }
  componentDidMount() {
    this.getVideoById(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.setState({ isLoading: true });
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      "Loading..."
    ) : (
      <div>
        <p>{this.state.data.snippet.title}</p>
      </div>
    );
  }
}
