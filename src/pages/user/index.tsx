import Head from "next/head";

const User = () => {
    return (
        <div className={"main"}>

            <Head>
                <title>User | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h1>
                User
            </h1>
        </div>
    )
}

export default User;