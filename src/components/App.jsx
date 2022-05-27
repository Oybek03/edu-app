import React from "react";
import Courses from "./Courses";
import Education from "./Education";
import Feature from "./Feature";
import Home from "./Home";
import Teachers from "./Teachers";
import Programs from "./Programs";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Education />
        <Feature />
        <Courses />
        <Teachers />
        <Programs />
        <Client />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
