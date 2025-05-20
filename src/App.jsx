import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import "./App.css";

function App() {

  return (
    <>
      <Header>
        <Container style={{ minHeight: "75vh" }}>studyMonster</Container>
      </Header>
    </>
  );
}

export default App;
