import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignUpModal from "../Auth/signUpModal";
import SignInModal from "../Auth/signInModal";
import { fetchUser } from "../../api/user/AuthApi";
import { Edit, Search, Settings } from "lucide-react";
import { SvgIcon } from "../common/HeaderSvgIcon";

const Header = () => {
  const [signUpOn, setSignUpOn] = useState(false);
  const [signInOn, setSignInOn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    userInfo();
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokentype");
    setUser(null);
  };
  const myPageHandler = () => {
    if (user) {
      navigate("/auth/MyPage");
    } else {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  };
  return (
    <>
      <SignUpModal show={signUpOn} onHide={() => setSignUpOn(false)} />
      <SignInModal show={signInOn} onHide={handleSignInModalClose} />
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-1">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <SvgIcon />
            <span style={{ fontWeight: "bold" }}>StudyMonster</span>
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
                      <Edit className="me-1" size={18} onClick={() => {
                        navigate("/boards/new")
                      }}/> 기록
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
                      onClick={myPageHandler}
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
