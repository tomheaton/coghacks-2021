import {useUser} from "@auth0/nextjs-auth0";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {Navbar, Container} from "react-bootstrap";

const NavBar = () => {

    const {user, error, isLoading} = useUser();

/*    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                {user ? (
                    <div className={styles.holder}>
                        <div>
                            <a href={"/api/auth/logout"}>
                                <p>Logout</p>
                            </a>
                        </div>
                        <a href={"/profile"}>
                            <Image className={styles.profileImage} src={user.picture ? user.picture : "/default.png"}
                                   height={40} width={40}
                            />
                        </a>
                    </div>
                ) : (
                    <div className={styles.holder}>
                        <a href={"/api/auth/login"}>
                            <p>Login</p>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );*/

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {
                        user ? (
                            <>
                                <Navbar.Text>
                                    Signed in as: <a href={"/api/auth/logout"}>{user.name}</a>
                                </Navbar.Text>
                                <Image className={styles.profileImage} src={user.picture ? user.picture : "/default.png"} height={40} width={40} />
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    <a href={"/api/auth/login"}>Login</a>
                                </Navbar.Text>
                            </>
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;