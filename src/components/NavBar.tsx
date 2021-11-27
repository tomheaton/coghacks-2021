import {useUser} from "@auth0/nextjs-auth0";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {Navbar, Container} from "react-bootstrap";

const NavBar = () => {

    const {user, error, isLoading} = useUser();

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href={"/"}>
                    <img
                        alt=""
                        src={"/default.png"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Lana
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {
                        user ? (
                            <>
                                <Navbar.Text>
                                    Signed in as: <a href={"/api/auth/logout"}>{user.name}</a>
                                </Navbar.Text>
                                <div className={styles.imageWrapper} >
                                    <Image className={styles.image} src={user.picture ? user.picture : "/default.png"} height={40} width={40} />
                                </div>
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