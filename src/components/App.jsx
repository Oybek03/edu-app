import React from "react";
import Courses from "./Courses";
import Education from "./Education";
import Feature from "./Feature";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        {/* <Education /> */}
        {/* <Feature />*/}
        <Courses />
      </div>
    );
  }
}

export default App;
