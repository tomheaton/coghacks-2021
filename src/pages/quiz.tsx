import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from "next";
import {questions} from "../data/questions";
import QuestionBox from "../components/QuestionBox";

export const getServerSideProps = withPageAuthRequired();

type Props = {
    user: any
}

const Quiz: NextPage<Props> = ({ user }) => {
    return (
        <div className={"main"}>
            <h1>
                Quiz
            </h1>
            <div>
                <QuestionBox questions={questions} />
            </div>
        </div>
    );
}

export default Quiz;
