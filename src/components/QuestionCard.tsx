const QuestionCard = ({question, answers}: {question: string, answers: string[]}) => {

    return (
        <div>
            <p>{question}</p>
            <div className={"buttonList2"}>
                {answers.map((answer, index) => {
                    return (
                        <button className={"btn"} key={index}>
                            {answer}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionCard;