const QuestionCard = ({question, answers}: {question: string, answers: string[]}) => {

    return (
        <div>
            <p>{question}</p>
            <div>
                {answers.map((answer, index) => {
                    return (
                        <button key={index}>
                            {answer}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionCard;