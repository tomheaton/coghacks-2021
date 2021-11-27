import type {Question} from "../types/types";
import QuestionCard from "./QuestionCard";
import styles from "../styles/QuestionBox.module.css";

const QuestionBox = ({onSubmit, questions}: { onSubmit: any, questions: Question[] }) => {

    return (
        <form onSubmit={onSubmit} className={styles.box}>
            <ul>
                {questions.map((question, index) => {
                    return (
                        <li key={index} id={`${index}`}>
                            <QuestionCard question={question.question} answers={question.answers}/>
                        </li>
                    );
                })}
            </ul>
            <button className={"btn"} type={"submit"}>
                Submit
            </button>
        </form>
    );
};

export default QuestionBox;