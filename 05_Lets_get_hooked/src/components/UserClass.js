import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      count: 0,
      count1: 1,
    };

    console.log(this.props.UserName + "child constructor"); 
  }

  componentDidMount(){
    console.log(this.props.UserName + "child componentDidMount");
  }

  render() {
    const { UserName, Designation } = this.props;
    const { count, count1 } = this.state;

    console.log(this.props.UserName + 'child render')

    return (
      <>
        <h3 style={{ color: "blue" }}>Username: {UserName}</h3>
        <h3 style={{ color: "red" }}>Designation: {Designation}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1, count1: this.state.count1 + 1});
          }}
        >
          IncreseCount
        </button>

        <h1>Count: {count}</h1>
        <h1>Count1: {count1}</h1>
      </>
    );
  }
}

export default UserClass;
