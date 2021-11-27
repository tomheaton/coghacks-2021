import {useUser} from "@auth0/nextjs-auth0";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {Breadcrumb, Container, Nav, Navbar} from "react-bootstrap";
import {useRouter} from "next/router";

const NavBar = () => {

    const {user, error, isLoading} = useUser();
    const router = useRouter();

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
                <Nav className="me-auto">
                    <Nav.Link active={router.pathname === "/company"} href="/company">Company</Nav.Link>
                    <Nav.Link active={router.pathname === "/posting"} href="/posting">Posting</Nav.Link>
                    <Nav.Link active={router.pathname === "/user"} href="/user">User</Nav.Link>
                </Nav>
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