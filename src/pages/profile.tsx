import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from "next";
import {questions} from "../data/questions";
import QuestionBox from "../components/QuestionBox";
import {useState} from "react";
import styles from "../styles/Profile.module.css";
import Modal from "../components/Modal";

export const getServerSideProps = withPageAuthRequired();

type Props = {
    user: any
}

const Profile: NextPage<Props> = ({ user }) => {

    const [tab, setTab] = useState<string>("general");
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [takingQuiz, setTakingQuiz] = useState<boolean>(false);
    const [quizData, setQuizData] = useState<string[]>([]);

    const handleQuizStart = (e: any) => {
        e.preventDefault();
        console.log("starting quiz");
        setTakingQuiz(true);
    }

    const updateQuestion = () => {

    }

    return (
        <div className={"main"}>
            <div>
                <h2>Tasks</h2>
            </div>
            <div className={styles.tasks}>
                {!takingQuiz && (
                    <>
                    <button onClick={handleQuizStart} className={"btn"}>
                        Take Quiz
                    </button>
                    </>
                )}
                <br/>
                <Modal title={"Personal Quiz"} show={takingQuiz}>
                    <QuestionBox questions={questions} />
                </Modal>
            </div>
        </div>
    );
}

export default Profile;