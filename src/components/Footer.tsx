import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={styles.footerContainer}>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Lana</h2>
                    <Image src={"/default.png"} alt="Lana Logo" width={128} height={128} />
                </div>
                <div className={styles.card}>
                    <h2>Pages</h2>
                    <ul>
                        <li><a href={"/company"}>Company</a></li>
                        <li><a href={"/posting"}>Posting</a></li>
                        <li><a href={"/user"}>User</a></li>
                        <li><a href={"/profile"}>Profile</a></li>
                        <li><a href={"/join"}>Join</a></li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h2>Stay up to date</h2>
                    <p>Check us out!</p>
                    <div className={styles.socials}>
                        <a href={"https://twitter.com/lana_platform"}>
                            <i className="bi bi-twitter" aria-label="Twitter"/>
                        </a>
                        <a href={"https://instagram.com/lana_platform"}>
                            <i className="bi bi-instagram" aria-label="Twitter"/>
                        </a>
                        <a href={"https://facebook.com/lana_platform"}>
                            <i className="bi bi-facebook" aria-label="Twitter"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
