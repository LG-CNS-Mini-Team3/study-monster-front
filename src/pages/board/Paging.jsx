import { useEffect, useState } from "react";
import axios from 'axios';

const Paging = () => {
    const [boards, setBoards] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const fetchBoards = (pageNum) => {
        axios.get(`http://localhost:8080/boards`, {
            params: { page: pageNum, size: 5 }
        })
            .then(res => {
                setBoards(res.data.content);
                setTotalPages(res.data.totalPages);
                setPage(res.data.number);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchBoards(0);
    }, []);

    return (
        <div style={{ marginTop: '16px' }}>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => fetchBoards(i)}
                    style={{ margin: '0 5px', fontWeight: i === page ? 'bold' : 'normal' }}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}

export default Paging;
