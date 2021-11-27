import {NextPage} from "next";

const Join: NextPage = () => {

    const handleJoin = async (e: any) => {
        e.preventDefault();
        console.log("join");
    }

    return (
        <div className={"main"}>
            <h1>
                Join Lana!
            </h1>
            <div>
                <input placeholder={"username"}/>
                <input placeholder={"password"}/>
                <button className={"btn"} onClick={handleJoin}>
                    Join
                </button>
            </div>
        </div>
    );
}

export default Join;