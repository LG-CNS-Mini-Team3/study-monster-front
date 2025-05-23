import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Pencil } from "lucide-react";
import { fetchUser, updateUser, deleteUser } from "../../api/user/AuthApi";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { Containersize } from "./styles/MyPage.styled";
import BookmarkList from "../bookmark/BookmarkList";

const MyPage = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const userInfo = async () => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const res = await fetchUser();
        console.log("가져온 데이터", res);
        if (res) {
          setUser(res);
        } else {
          console.error("유효하지 않은 값 반환");
        }
      } catch (error) {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokentype");
        alert("로그인에 실패했습니다.");
        navigate("/");
      }
    } else {
      setUser(null);
      alert("로그아웃되었습니다.");
      navigate("/");
    }
    setLoading(false);
  };
  const handleNameChange = (e) => setName(e.target.value);
  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handleNewPwd = (e) => setNewPwd(e.target.value);
  const handleOldPwd = (e) => setOldPwd(e.target.value);

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    if (user) {
      setId(user.id)
      setName(user.name);
      setNickname(user.nickname);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);

    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      setLoading(false);
      navigate("/");
      return;
    }

    try {
      const updateData = {
        oldPwd: oldPwd,
        newPwd: newPwd,
        name: name,
        nickname: nickname,
      };
      const response = await updateUser(updateData);

      if (response) {
        alert("변경이 완료되었습니다.");
        setOldPwd("");
        setNewPwd("");
        setNickname("");
        setName("");
        setEmail("");
        await userInfo();
      } else {
        alert(
          response?.message ||
            "정보 변경에 실패했습니다. 입력값을 확인해주세요."
        );
        navigate("/auth/MyPage");
      }
    } catch (err) {
      console.error("회원 정보 업데이트 중 오류 발생:", err);
      alert(
        err.data?.message ||
          err.message ||
          "정보 변경 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      );
      navigate("/auth/MyPage");
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("오류: 로그인이 되어 있지 않습니다. 다시 로그인 후 시도해주세요.");
      setLoading(false);
      navigate("/");
      return;
    }
    try{
        const res = await deleteUser();
        if(res){
            alert("회원탈퇴가 완료되었습니다.");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("tokentype");
            navigate("/");
        }
        else {
          // deleteUser API가 성공했으나, 응답 내용에 따라 실패로 간주해야 할 경우
          alert(res?.message || "회원 탈퇴에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (err) {
        console.error("회원 탈퇴 처리 중 오류 발생:", err);
        alert(
          err.response?.data?.message || // axios 에러의 경우
          err.message ||
          "회원 탈퇴 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
    }
  };
  return (
    <>
      <Containersize>
        <BookmarkList userId = {id}/>
        <h2 className="text-start mb-4 mt-3">회원정보</h2>

        <Form
          className="flex-grow-1 d-flex flex-column"
          onSubmit={(e) => {
            handleUpdate(e);
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label
                column
                sm={3}
                md={2}
                className="text-md-end fw-medium pt-0"
              >
                이름
              </Form.Label>
              <Col sm={9} md={10}>
                <Form.Control
                  type="text"
                  value={"이름"}
                  readOnly
                  plaintext
                  className="fs-5 px-0 mb-1"
                />
                <Form.Control
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="변경할 이름 입력"
                  className="fs-6"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label
                column
                sm={3}
                md={2}
                className="text-md-end fw-medium pt-0"
              >
                닉네임
              </Form.Label>
              <Col sm={9} md={10}>
                <Form.Control
                  type="text"
                  value={"닉네임"}
                  readOnly
                  plaintext
                  className="fs-5 px-0 mb-1"
                />
                <Form.Control
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  placeholder="변경할 닉네임 입력"
                  className="fs-6"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label
                column
                sm={3}
                md={2}
                className="text-md-end fw-medium pt-0"
              >
                기존 비밀번호
              </Form.Label>
              <Col sm={9} md={10}>
                <Form.Control
                  type="password"
                  value={oldPwd}
                  onChange={handleOldPwd}
                  placeholder="원래 비밀번호 입력"
                  className="fs-6"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label
                column
                sm={3}
                md={2}
                className="text-md-end fw-medium pt-0"
              >
                새로운 비밀번호
              </Form.Label>
              <Col sm={9} md={10}>
                <Form.Control
                  type="password"
                  value={newPwd}
                  onChange={handleNewPwd}
                  placeholder="변경할 비밀번호 입력"
                  className="fs-6"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4 align-items-center">
              <Form.Label
                column
                sm={3}
                md={2}
                className="text-md-end fw-medium"
              >
                이메일
              </Form.Label>
              <Col sm={9} md={10}>
                <Form.Control
                  type="email"
                  value={email}
                  readOnly
                  plaintext
                  className="fs-5 px-0"
                />
                <Form.Text className="text-muted mt-1 d-block">
                  이메일 주소는 변경할 수 없습니다.
                </Form.Text>
              </Col>
            </Form.Group>
          </div>

          <hr className="my-4" />
          <div className="d-grid gap-3 mt-auto">
            <Button variant="success" size="lg" type="submit">
              편집완료
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/my-posts")}
            >
              내가 쓴 글 보기
            </Button>
            <Button
              variant="danger"
              size="lg"
              onClick={handleDelete}
            >
              회원 탈퇴
            </Button>
          </div>
        </Form>
      </Containersize>
    </>
  );
};

export default MyPage;
