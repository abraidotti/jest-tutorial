import React from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  static defaultProps = {
    page: "https://www.google.com",
    children: "Google"
  };

  _onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  };

  _onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  };

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        style={{
          color: this.state.class === "hovered" ? "#61dafb" : "white"
        }}
      >
        {this.props.children}
      </a>
    );
  }
}
