import {NextPage} from "next";
import {Image} from "react-bootstrap";
import Head from "next/head";

const Error500: NextPage = () => {

    return (
        <div className={"main"}>

            <Head>
                <title>500 | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h2>500</h2>
            <p>Sorry, it looks like there was an error on our end. Please retry later.</p>
            <Image src={"/default.png"} height={64} width={64}/>
        </div>
    );
}

export default Error500;