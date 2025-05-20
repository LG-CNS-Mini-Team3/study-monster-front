import React, { useState } from "react";
import { Modal, Button, Form, Container, InputGroup } from "react-bootstrap";
import { Mail, Lock } from "lucide-react";
import HorizonLine from "../../line/HorizonLine";
import { login } from "../../api/AuthApi";
const SignInModal = ({ show, onHide }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      email: email,
      pwd: pwd,
    };
    try {
      const result = await login(loginData);
      setLoading(false);
      const authToken = result.token;
      if (authToken) {
        localStorage.setItem("accessToken", authToken);
        localStorage.setItem("tokentype", "Bearer");
        onHide();
        setEmail("");
        setPwd("");
      } else {
        alert("아이디 또는 비밀번호를 다시 입력해주세요");
      }
    } catch (err) {
      setLoading(false);
      alert("서버 연결에 실패했습니다");
      console.error("로그인 API 호출 오류:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "아이디 또는 비밀번호가 올바르지 않거나 서버에 문제가 발생했습니다.";
      setError(errorMessage);
    }
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3">
              <Form.Label>이메일</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Mail size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>비밀번호</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Lock size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </InputGroup>
            </Form.Group>
            <Button variant="success" type="submit" className="my-3 w-100">
              로그인
            </Button>
          </Form>
          <HorizonLine text={"OR"} />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;
