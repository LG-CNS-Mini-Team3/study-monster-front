import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [searchType, setSearchType] = useState("all");

    const pageSize = 10;

    const fetchBoards = (pageNum, searchKeyword = "", type = "all") => {
        const params = {
            page: pageNum,
            size: pageSize,
            keyword: searchKeyword.trim(),
            type
        };

        axios.get(`http://localhost:8080/boards`, {
            params,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => {
                if (res.data && Array.isArray(res.data.content)) {
                    setBoards(res.data.content);
                    setTotalPages(res.data.totalPages || 1);
                    setPage(res.data.number || 0);
                } else {
                    setBoards([]);
                    setTotalPages(1);
                    setPage(0);
                }
            })
            .catch(err => {
                console.error("에러:", err);
            });
    };

    useEffect(() => {
        fetchBoards(0);
    }, []);

    const handleSearch = () => {
        const trimmedKeyword = keyword.trim();
        fetchBoards(0, trimmedKeyword, searchType);
    };

    return (
        <div style={{ marginTop: '16px' }}>
            {Array.isArray(boards) && boards.length > 0 ? (
                <ul>
                    {boards.map(board => (
                        <Link key={board.id} to={`/boards/${board.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
                                <h3>{board.title}</h3>
                                <p>{board.writer}</p>
                                <p>{new Date(board.created_at).toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>게시글이 없습니다.</p>
            )}

            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => fetchBoards(i, keyword, searchType)}
                        style={{ margin: '0 5px', fontWeight: i === page ? 'bold' : 'normal' }}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="all">전체</option>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                    <option value="writer">작성자</option>
                </select>

                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    style={{ marginLeft: '10px' }}
                />

                <button onClick={handleSearch} style={{ marginLeft: '10px' }}>
                    검색
                </button>
            </div>
        </div>
    );
};

export default BoardList;
