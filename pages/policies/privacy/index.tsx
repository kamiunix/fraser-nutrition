import styles from "./privacy.module.css";
import Layout from "../../../components/Layout";

interface Props {
}

const Privacy = ({}: Props) => {

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.h1}>Terms of Service</h1>
                <section className={styles.section}>
                <h2 className={styles.h3}>Effective: August 1st 2023</h2>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.h2}>
                        1. Introduction
                    </h2>
                    <p className={styles.p}>
                        Welcome to Nutraplanner, a website is designed to help dietitians create advanced meal plans. We are committed to protecting your personal information and your right to privacy.
                    </p>
                    <h2 className={styles.h2}>
                        2. What Information Do We Collect?
                    </h2>
                    <p className={styles.p}>
                        While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
                        This may include, but is not limited to:
                    </p>
                    <li className={styles.li}>
                        email address
                    </li>
                    <li className={styles.li}>
                        first name and last name
                    </li>
                    <li className={styles.li}>
                        cookies and usage data
                    </li>
                    <h2 className={styles.h2}>
                        3. How Do We Use Your Information?
                    </h2>
                    <p className={styles.p}>
                        We use the information we collect or receive:
                    </p>
                    <li className={styles.li}>
                        To provide and maintain our Service
                    </li>
                    <li className={styles.li}>
                        To notify you about changes to our Service
                    </li>
                    <li className={styles.li}>
                        To allow you to participate in interactive features of our Service when you choose to do so
                    </li>
                    <li className={styles.li}>
                        To provide customer support
                    </li>
                    <li className={styles.li}>
                        To gather analysis or valuable information so that we can improve our Service
                    </li>
                    <li className={styles.li}>
                        To monitor the usage of our Service
                    </li>
                    <li className={styles.li}>
                        To detect, prevent and address technical issues
                    </li>
                    <h2 className={styles.h2}>
                        4. Your Data Proection Rights
                    </h2>
                    <p className={styles.p}>
                        You have the following data protection rights:
                    </p>
                    <li className={styles.li}>
                        The right to access, update, or delete the information we have on you.
                    </li>
                    <li className={styles.li}>
                        The right of rectification.
                    </li>
                    <li className={styles.li}>
                        The right to object.
                    </li>
                    <li className={styles.li}>
                        The right of restriction.
                    </li>
                    <li className={styles.li}>
                        The right to data portability.
                    </li>
                    <li className={styles.li}>
                        The right to withdraw consent.
                    </li>
                    <h2 className={styles.h2}>
                        5. Cookies
                    </h2>
                    <p className={styles.p}>
                        We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
                    </p>
                    <h2 className={styles.h2}>
                        6. Disclosure of Data
                    </h2>
                    <p className={styles.p}>
                        We may disclose your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <li className={styles.li}>
                        To comply with a legal obligation
                    </li>
                    <li className={styles.li}>
                        To protect and defend the rights or property of our Website
                    </li>
                    <li className={styles.li}>
                        To prevent or investigate possible wrongdoing in connection with the Service
                    </li>
                    <li className={styles.li}>
                        To protect the personal safety of users of the Service or the public
                    </li>
                    <li className={styles.li}>
                        To protect against legal liability
                    </li>
                    <h2 className={styles.h2}>
                        7. Security of Data
                    </h2>
                    <p className={styles.p}>
                        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                        While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                    <h2 className={styles.h2}>
                        8. Changes to This Privacy Policy
                    </h2>
                    <p className={styles.p}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <h2 className={styles.h2}>
                        9. Contact Us
                    </h2>
                    <p className={styles.p}>
                        If you have any questions about this Privacy Policy, please contact us by email: help@nutraplanner.com
                    </p>
                </section>
                <section className={styles.section}>
                    <p className={styles.p}>
                        This Privacy Policy page was created at <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net</a> and modified/generated by <a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a>
                    </p>
                </section>
            </div>
        </Layout>
    )
};

export default Privacy;