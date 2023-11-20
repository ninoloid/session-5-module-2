import { string } from "prop-types";
import { Component } from "react";
import "../styles/common.css";

export default class TitleClass extends Component {
  render() {
    const styles = { color: "coral" };

    return <h1 style={styles}>{this.props.title}</h1>;
  }
}

TitleClass.propTypes = {
  title: string,
};
