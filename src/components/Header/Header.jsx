import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignUpModal from "../Signup/signUpModal";
import SignInModal from "../Signin/signInModal";
import { fetchUser } from "../../api/UserApi";
import { Edit, Search, Settings } from "lucide-react";

const Header = () => {
  const [signUpOn, setSignUpOn] = useState(false);
  const [signInOn, setSignInOn] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.log("로그아웃됨");
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokentype");
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const handleSignInModalClose = () => {
    setSignInOn(false);
    setUser(fetchUser());
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokentype");
    setUser(null);
  };

  return (
    <>
      <SignUpModal show={signUpOn} onHide={() => setSignUpOn(false)} />
      <SignInModal show={signInOn} onHide={handleSignInModalClose} />
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "8px" }} // 부모에 alignItems가 있으므로 verticalAlign 제거 가능
            >
              <defs>
                <linearGradient
                  id="sGradientHeaderDirect"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#28a745", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#218838", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                width="100"
                height="100"
                rx="20"
                ry="20"
                fill="url(#sGradientHeaderDirect)"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="65"
                fontWeight="bold"
                fill="white"
              >
                S
              </text>
            </svg>
            <span style={{ fontWeight: "bold" }}>StudyShare</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {user ? (
                <>
                  <Nav.Item className="me-3">
                    <Button
                      variant="success"
                      className="d-flex align-items-center"
                    >
                      <Edit className="me-1" size={18} /> 기록
                    </Button>
                  </Nav.Item>
                  <Nav.Item className="me-3">
                    <Search
                      size={24}
                      style={{ cursor: "pointer" }}
                      onClick={() => alert("검색 기능 구현 예정")}
                    />
                  </Nav.Item>
                  <Nav.Item className="me-3">
                    <Settings
                      size={24}
                      style={{ cursor: "pointer" }}
                      onClick={() => alert("알림 기능 구현 예정")}
                    />
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="outline-secondary" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item className="me-2">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSignInOn(true);
                      }}
                    >
                      Sign In
                    </Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="success" onClick={() => setSignUpOn(true)}>
                      Sign Up
                    </Button>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
