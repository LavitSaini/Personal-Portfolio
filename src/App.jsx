import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <NavigationMenu />
      <main>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
