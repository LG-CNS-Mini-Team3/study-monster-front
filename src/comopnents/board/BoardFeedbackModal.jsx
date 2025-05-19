import Modal from "../common/Modal.jsx";
import {BoardFeedbackModalImg, FeedbackLoadingIndicatorContainer} from "./styles/BoardFeedback.styled.js";
import {useEffect, useState} from "react";
import {BlinkBlur} from "react-loading-indicators";
import getBoardAiFeedback from "../../api/board/getBoardAiFeedback.js";

const initFeedback = "";
const initFutureStrategy = "";

const BoardFeedbackModal = ({isModalOpen, setModalOpen, boardId}) => {
    const [feedback, setFeedback] = useState(initFeedback);
    const [futureStrategy, setFutureStrategy] = useState(initFutureStrategy);
    const [apiLoaded, setApiLoaded] = useState(false);
    const minSize = "200px";
    useEffect(() => {
        getBoardAiFeedback(boardId).then(response => {
            setFeedback(response.feedback);
            setFutureStrategy(response.futureLearningStrategy);
            setApiLoaded(true);
        });
    }, [boardId]);
    return (
        <>
            <BoardFeedbackModalImg
                onClick={() => setModalOpen(true)}
                src="./../../../public/feedbackAi.png" alt="피드백 받기"/>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                   modalMinWidth={minSize} modalMaxWidth="70%"
                   modalMinHeight={minSize} modalMaxHeight="70%">
                {
                    apiLoaded ? (
                        <>
                            <h2>✅ 피드백</h2>
                            <p style={{whiteSpace: 'pre-line'}}>{feedback}</p>
                            <h2>✅ 향후 학습 방향</h2>
                            <p style={{whiteSpace: 'pre-line'}}>{futureStrategy}</p>
                        </>
                    ) : (
                        <FeedbackLoadingIndicatorContainer width={minSize} height={minSize}>
                            <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} size="medium"
                                       speedPlus="-1"/>
                        </FeedbackLoadingIndicatorContainer>
                    )
                }
            </Modal>
        </>
    )
}

export default BoardFeedbackModal;