import styles from "./cookies.module.css";
import Layout from "../../../components/Layout";

interface Props {
}

const Cookies = ({}: Props) => {

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.h1}>Cookies Policy</h1>
                <section className={styles.section}>
                    <h2 className={styles.h3}>Effective: January 1st 2024</h2>
                </section>
                <section className={styles.section}>
                    <h2>1. Introduction</h2>

                    <p>Welcome to our website ("Website"). This Cookies Policy explains what cookies are, how we use cookies, how third-parties we partner with may use cookies on the Service, your choices regarding cookies, and further information about cookies.</p>

                    <h2>2. What are cookies?</h2>

                    <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

                    <h2>3. How our Website uses cookies</h2>

                    <p>When you use and access the Service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:</p>

                    <ul>
                        <li>To enable certain functions of the Service</li>
                        <li>To provide analytics</li>
                        <li>To store your preferences</li>
                    </ul>

                    <p>We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:</p>

                    <ul>
                        <li>Essential cookies: We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                        <li>Preference cookies: We may use preference cookies to remember information that changes the way the Service behaves or looks, such as the "remember me" functionality.</li>
                        <li>Analytical cookies: We may use analytical cookies to track information how the Service is used so that we can make improvements. We may also use analytical cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.</li>
                    </ul>

                    <h2>4. Third-party cookies</h2>

                    <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>

                    <h2>5. What are your choices regarding cookies?</h2>

                    <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>

                    <h2>6. Where can you find more information about cookies?</h2>

                    <p>You can learn more about cookies at the following third-party websites:</p>

                    <ul>
                        <li><a href="http://www.allaboutcookies.org/">AllAboutCookies</a></li>
                        <li><a href="http://www.networkadvertising.org/">Network Advertising Initiative</a></li>
                    </ul>

                    <h2>7. Contact Us</h2>

                    <p>If you have any questions about our use of cookies, please contact us:</p>
                    <p>By email: [Contact Email]</p>
                </section>
            </div>
        </Layout>
    )
};

export default Cookies;