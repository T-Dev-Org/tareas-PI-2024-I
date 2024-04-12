import React, { Component } from "react";

const imageSize = 60;

class Navigation extends Component {


  render() {
    const { appName, logoApp } = this.props;

    return (
      <nav className='navbar navbar-dark bg-dark px-2'>
        <div className="d-flex align-items-center">
          <img src={logoApp} width={imageSize} height={imageSize} className="mx-2" />
          <p className="h2 text-white ms-2">{appName}</p>
        </div>
      </nav>

    );
  }

}

export default Navigation;