import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from "next";
import {questions} from "../data/questions";
import QuestionBox from "../components/QuestionBox";

export const getServerSideProps = withPageAuthRequired();

type Props = {
    user: any
}

const Profile: NextPage<Props> = ({ user }) => {
    return (
        <div className={"main"}>
            <div>
                user information
            </div>
            <div>
                take test
                <button>
                    <QuestionBox questions={questions} />
                </button>
            </div>
        </div>
    );
}

export default Profile;
