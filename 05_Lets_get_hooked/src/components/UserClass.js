import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);

//     this.state = {
//       count: 0,
//       count1: 1,
//     };

//     console.log(this.props.UserName + "child constructor");
//   }

//   componentDidMount(){
//     console.log(this.props.UserName + "child componentDidMount");
//   }

//   render() {
//     const { UserName, Designation } = this.props;
//     const { count, count1 } = this.state;

//     console.log(this.props.UserName + 'child render')

//     return (
//       <>
//         <h3 style={{ color: "blue" }}>Username: {UserName}</h3>
//         <h3 style={{ color: "red" }}>Designation: {Designation}</h3>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1, count1: this.state.count1 + 1});
//           }}
//         >
//           IncreseCount
//         </button>

//         <h1>Count: {count}</h1>
//         <h1>Count1: {count1}</h1>
//       </>
//     );
//   }
// }

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { 
        name: "dummy", 
        location: "default"
       }
    };
  }

  async componentDidMount() {
    const userFetch = await fetch("https://api.github.com/users/tejasmusale99");
    const json = await userFetch.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { name, login, avatar_url,followers,following,url,public_repos } = this.state.userInfo;
    return (
      <div className="about-page">
        <h1 className="about-title">About Me</h1>

        <div className="about-container">
          {/* Left */}
          <div className="about-left">
            <img
              src={avatar_url}
              alt="Tejas"
              className="about-avatar"
            />
          </div>

          {/* Right */}
          <div className="about-right">
            <h2>{name}</h2>
            <p className="username">{login}</p>

            <p className="bio">
              Frontend Developer passionate about building clean, scalable and
              user-friendly web applications using modern JavaScript and React.
            </p>

            <div className="stats">
              <div>
                <strong>{public_repos}</strong>
                <span>Repositories</span>
              </div>
              <div>
                <strong>{followers}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>{following}</strong>
                <span>Following</span>
              </div>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
