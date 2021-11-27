import type {Question} from "../types/types";
import QuestionCard from "./QuestionCard";
import styles from "../styles/QuestionBox.module.css";

const QuestionBox = ({questions}: { questions: Question[] }) => {

    return (
        <div className={styles.box}>
            <ul>
                {questions.map((question, index) => {
                    return (
                        <li key={index} id={`${index}`}>
                            <QuestionCard question={question.question} answers={question.answers}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuestionBox;