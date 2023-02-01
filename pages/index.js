import {
  Layout,
  Intro,
  Container,
  Projects,
  Contact,
  Footer,
  Quote,
  DomHead,
} from "../components";
import { useEffect, useState } from "react";
import Aos from "aos";
import { DataContextProvider } from "../context/DataContext";

export default function HomePage() {
  let [modalState, updateState] = useState(false);
  let [overLayState, updateOverLayState] = useState("hidden");
  const changeState = () => {
    const body = document.querySelector("body");
    updateState(!modalState);
    updateOverLayState(!modalState ? "" : "hidden");
    body.style.overflow = !modalState ? "hidden" : "";
    console.log("Hello", modalState, overLayState);
  };
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <DataContextProvider>
      <DomHead />
      <Layout overLayState={overLayState} changeState={changeState}>
        <Container>
          <Intro />
          <Projects changeState={changeState} />
        </Container>
        <Quote />
        <Contact />
        <Footer />
      </Layout>
    </DataContextProvider>
  );
}
