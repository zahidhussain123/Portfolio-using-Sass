import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [appOpen, setAppOpen] = useState(false);

  return (
    <div className="app">
      <Topbar appOpen={appOpen} setAppOpen={setAppOpen} />
      <Menu appOpen={appOpen} setAppOpen={setAppOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
