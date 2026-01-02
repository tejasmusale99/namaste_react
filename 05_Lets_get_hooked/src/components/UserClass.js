import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <>
        <h3 style={{ color: "blue" }}>Username:{this.props.UserName}</h3>
        <h3 style={{ color: "red" }}>Username:{this.props.Designation}</h3>
      </>
    );
  }
}

export default UserClass;
