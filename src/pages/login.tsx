import {NextPage} from "next";

const Login: NextPage = () => {

    return (
        <div>
            <h1>
                Login to lana!
            </h1>
            <div>
                <input placeholder={"username"}/>
                <input placeholder={"password"}/>
                <button className={"btn"}>
                    login
                </button>
            </div>
        </div>
    );
}

export default Login;