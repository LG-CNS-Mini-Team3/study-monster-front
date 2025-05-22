import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Containersize = ({ children }) => { 
  return (
    <Container
      fluid
      style={{
        paddingTop: `calc(56px + 2rem)`,
        paddingLeft: `calc(var(--bs-container-padding-x, 0.75rem) + 170px)`,
        paddingRight: `var(--bs-container-padding-x, 0.75rem)`,
        paddingBottom: "2rem",
        minHeight: "calc(100vh - 56px)",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Container>
  );
};

export default Containersize;