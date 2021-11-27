import {NextPage} from "next";

const Login: NextPage = () => {

    const handleLogin = async (e: any) => {
        e.preventDefault();
        console.log("login");
    }

    return (
        <div>
            <h1>
                Login to Lana!
            </h1>
            <div>
                <input placeholder={"username"}/>
                <input placeholder={"password"}/>
                <button className={"btn"} onClick={handleLogin}>
                    login
                </button>
            </div>
        </div>
    );
}

export default Login;