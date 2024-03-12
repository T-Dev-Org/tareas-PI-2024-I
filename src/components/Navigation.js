import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { appName } = this.props;

    return (
      <nav className='navbar  navbar-dark bg-dark px-2'>
        <a class="navbar-brand h2 text-white mx-auto"> <p className="h2">{appName}</p> por Juan Loaiza </a>
      </nav>
    );
  }

}

export default Navigation;