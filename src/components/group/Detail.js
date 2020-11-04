import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const {group_name, history} = this.props;
    if (group_name === undefined) {
      history.push("/");
    }
  }
  render() {
    const {location} = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
} 

export default Detail;