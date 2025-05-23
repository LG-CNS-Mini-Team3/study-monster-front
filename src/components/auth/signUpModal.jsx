import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Container, InputGroup } from "react-bootstrap";
import { Mail, Lock, User } from "lucide-react";
import HorizonLine from "../HorizonLine";
import { register } from "../../api/user/AuthApi";
const SignUpModal = ({ show, onHide }) => {
  const [email, setEmail] = useState("");
  const [originPwd, setOriginPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(true);

  useEffect(() => {
    originPwd === checkPwd ? setConfirm(true) : setConfirm(false);
  }, [originPwd, checkPwd]);

  const submithandler = async (e) => {
    e.preventDefault();
    if (!confirm) {
      return;
    }
    setLoading(true);
    const registerData = {
      email: email,
      originPwd: originPwd,
      checkPwd: checkPwd,
      name: name,
      nickname: nickname,
    };
    try {
      const result = await register(registerData);
      setLoading(false);
      alert("회원가입에 성공했습니다!");
      onHide();
      setEmail("");
      setOriginPwd("");
      setCheckPwd("");
      setName("");
      setNickname("");
      setConfirm(true);
    } catch (err) {
      setLoading(false);
      alert("서버 연결에 실패했습니다");
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
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submithandler}>
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
                  value={originPwd}
                  onChange={(e) => {
                    setOriginPwd(e.target.value);
                  }}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>비밀번호 확인</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <Lock size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={checkPwd}
                  onChange={(e) => {
                    setCheckPwd(e.target.value);
                  }}
                  isInvalid={!confirm}
                />
              </InputGroup>
              {!confirm && (
                <Form.Text className="text-danger">
                  비밀번호가 일치하지 않습니다.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>이름</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <User size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>닉네임</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <User size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
              </InputGroup>
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="my-3 w-100"
              disabled={loading}
            >
              {loading ? "처리중" : "회원가입"}
            </Button>
          </Form>
          <HorizonLine text={"OR"} />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
