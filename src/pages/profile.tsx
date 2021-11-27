import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from "next";

export const getServerSideProps = withPageAuthRequired();

type Props = {
    user: any
}

const Profile: NextPage<Props> = ({ user }) => {
    return (
        <div className={"main"}>
            <p>
                hello {user.name}
            </p>
        </div>
    );
}

export default Profile;
