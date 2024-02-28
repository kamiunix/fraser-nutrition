import styles from "./tos.module.css";
import Layout from "../../../components/Layout/Layout";

interface Props {
}

const ToS = ({}: Props) => {

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.h1}>Terms of Service</h1>
                <section className={styles.section}>
                <h2 className={styles.h2}>Effective: August 1st 2023</h2>
                </section>
                    <section className={styles.section}>
                        <h2 className={styles.h2}>1. Introduction</h2>

                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={styles.p}>Welcome to our website Nutraplanner, a tool designed to assist dietitians in creating meal plans. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Website. Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.</p>

                        <h2 className={styles.h2}>2. Conditions of Use</h2>

                        <p className={styles.p}>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have permission to access the Service.</p>

                        <h2 className={styles.h2}>3. User Accounts</h2>

                        <p className={styles.p}>When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</p>

                        <p className={styles.p}>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service.</p>

                        <h2 className={styles.h2}>4. Intellectual Property Rights</h2>

                        <p className={styles.p}>All intellectual property rights in and to the Service and its content (excluding content provided by users), such as text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the property of the Website and are protected by international copyright laws.</p>

                        <h2 className={styles.h2}>5. Content Provided by Users</h2>

                        <p className={styles.p}>By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.</p>

                        <h2 className={styles.h2}>6. Termination</h2>

                        <p className={styles.p}>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

                        <h2 className={styles.h2}>7. Limitation of Liability</h2>

                        <p className={styles.p}>In no event shall the Website, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                        <h2 className={styles.h2}>8. Governing Law</h2>

                        <p className={styles.p}>These Terms shall be governed and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of law provisions.</p>

                        <h2 className={styles.h2}>9. Changes</h2>

                        <p className={styles.p}>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>

                        <h2 className={styles.h2}>10. Contact Us</h2>

                        <p className={styles.p}>If you have any questions about these Terms, please contact us:</p>
                        <p className={styles.p}>By email: help@nutraplanner.com</p>

                        <p className={styles.p}>By accessing or using our Website, you signify your agreement to be bound by our Terms of Service. If you do not agree to these terms, you may not access or use our Website.</p>
                </section>
            </div>
        </Layout>
    )
};

export default ToS;