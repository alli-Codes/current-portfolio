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
  let [index, updateIndex] = useState(0);
  const changeState = (index) => {
    updateIndex(index);
    updateState(!modalState);
    updateOverLayState(!modalState ? "" : "hidden");
  };
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <DataContextProvider>
      <DomHead />
      <Layout
        overLayState={overLayState}
        changeState={changeState}
        index={index}
      >
        <Container>
          <Intro />
          <Projects changeState={changeState} />
          <Contact />
        </Container>
        {/* <Quote /> */}
        <Footer />
      </Layout>
    </DataContextProvider>
  );
}
