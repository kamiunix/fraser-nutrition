import styles from './Footer.module.scss'
import {Icon} from "semantic-ui-react";
import Link from "next/link";
import Button from "../common/Button";

export const Footer = () => {

    return (
        <>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "1.5em",
                    padding: "2em",
                    backgroundColor: "#152c0b",
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        color: "#f6f6f6",
                    }}
                >
                    Discover how you can improve your overall well-being.
                </h1>
                <Button
                    size={"medium"}
                    color={"rgb(162,162,162)"}
                    textColor={"#000000"}
                    onClick={() => window.location.href = '/contact'}
                >
                    Book Online Today!
                </Button>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerbottom}>
                    <div>
                        {/*<Link href={"#"} className={styles.socialicon}>*/}
                        {/*    <Icon name="twitter" />*/}
                        {/*</Link>*/}
                        <Link href={"#"} className={styles.socialicon}>
                            <Icon name="facebook" />
                        </Link>
                        <Link href={"#"} className={styles.socialicon}>
                            <Icon name="instagram" />
                        </Link>
                        {/*<Link href={"#"} className={styles.socialicon}>*/}
                        {/*    <Icon name="youtube" />*/}
                        {/*</Link>*/}
                        {/*<Link href={"#"} className={styles.socialicon}>*/}
                        {/*    <Icon name="linkedin" />*/}
                        {/*</Link>*/}

                    </div>
                    <div>
                        <ul>
                            <li><Link href="/policies/tos">Terms of service</Link></li>
                            <li><Link href="/policies/privacy">Privacy policy</Link></li>
                            <li><Link href="/policies/cookies">Cookies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>Copyright © 2024 Fraser Nutrition</p>
                    </div>
                </div>
            </footer>
        </>
    )
};