import React from "react";
import UserClass from "./UserClass";


/******** Class component ********/

class About extends React.Component {
  constructor(props){
    super(props)
    console.log("parent Constructor");
  }

  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    
    return (
      <>
        <h1>About Page</h1>
        <UserClass
          UserName={"tejas99"}
          Designation={"Frontend Developer"}
        />
        <UserClass
          UserName={"shubham99"}
          Designation={"Backend Developer"}
        />
      </>
    );
  }
}



/* 

- parent constructor 
- parent render 
  - tejas constructor
  - tejas render 

  - shubham constructor
  - shubham render

  - tejas componentDidMount
  - shubham componentDidMount

- parent componentDidMount

*/

/******* function Component *****/

// const About = () => {
//   return (
//     <>
//       <h1>About Page</h1>
//       <UserClass UserName={"tejas99"} Designation={"Full stack ai developer"}/>
//     </>
//   );
// };

export default About;
