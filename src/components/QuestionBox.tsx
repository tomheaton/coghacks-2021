
type Question = {
    question: string
    answer: number
    answers: [string]
    type: string
}

const QuestionBox = ({questions}: {questions: Question[]}) => {

    return (
        <ul>
            {questions.map((question, index) => {
                return (
                    <li key={index} id={`${index}`}>
                        <h1>{question.question}</h1>
                        <p>{question.answers[question.answer]}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default QuestionBox;