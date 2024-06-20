import React from "react";
import "./styles/styles.css";
import article1 from "./assets/images/imagemCard1.png";
import article3 from "./assets/images/imagemCard3.png";
import article2 from "./assets/images/imagemCard2.png";


import Navbar from "./components/navbar/navbar";
import { Article } from "./components/card/Article";
// import { Counter } from "./components/counter/Counter";

class App extends React.Component {
  render() {
    return(
    <>
      <Navbar />
      <section id="articles">
      <Article title="Designing Dashboards" provider="NASA" img={article1}/>
      <Article title="36 Days of Malayalam type" provider="Spaceflight Now" img={article2}/>
      <Article title="36 Days of Malayalam type" provider="Spaceflight Now" img={article3}/>
      
      <Article title="Designing Dashboards" provider="NASA" img={article1}/>
      </section>
   {/* <Counter /> */}
    </>);
  }
}

export default App;
