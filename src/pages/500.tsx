import {NextPage} from "next";
import {Image} from "react-bootstrap";

const Error500: NextPage = () => {

    return (
        <div className={"main"}>
            <h2>500</h2>
            <p>Sorry, it looks like there was an error on our end. Please retry later.</p>
            <Image src={"/default.png"} height={64} width={64}/>
        </div>
    );
}

export default Error500;