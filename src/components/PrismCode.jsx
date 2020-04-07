import React, { Component } from "react";
import Prism from "prismjs";
import "../assets/css/prism.css";
import "./prism";
class PrismCode extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  };

  render() {
    const { code, plugins, language } = this.props;
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    );
  }
}

export default PrismCode;