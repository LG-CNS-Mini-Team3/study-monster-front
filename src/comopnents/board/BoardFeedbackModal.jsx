import Modal from "../common/Modal.jsx";
import {BoardFeedbackModalImg} from "./styles/BoardFeedback.styled.js";

const BoardFeedbackModal = ({isModalOpen, setModalOpen}) => {
    return (
        <>
            <BoardFeedbackModalImg
                onClick={() => setModalOpen(true)}
                src="./../../../public/feedbackAi.png" alt="피드백 받기"/>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} modalMaxWidth="70%" modalMaxHeight="70%">
                <h2>✅ 피드백</h2>
                <p>기사의 제목과 본문이 동일하며, 지나치게 간략하여 기사로서의 구체적인 내용을 전달하지 못하고 있습니다. 제목과 본문 모두 구체적이고 명확한 정보를 담아야 독자의 흥미를 끌 수 있습니다.</p>
                <h2>✅ 향후 학습 방향</h2>
                <p>기사의 제목과 본문을 작성할 때, 어떻게 하면 독자의 관심을 끌 수 있을지에 대한 연구가 필요합니다. 또한, 기술 칼럼에 적합한 주제를 선정하고 이를 구조화된 방식으로 설명하는 방법에 대해 심도 깊게 학습할 필요가 있습니다.</p>
            </Modal>
        </>
    )
}

export default BoardFeedbackModal;