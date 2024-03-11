import Layout from "../../components/Layout/Layout";
import WideImage from "../../components/WideImage/WideImage";
import Collapsible from "../../components/common/Collapsible";
import {useEffect, useState} from "react";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {


    const [title, setTitle] = useState("Contact");

    return (
        <Layout>
            <WideImage background={'/assiniboine.jpg'}>
                <div
                    style={{
                        backgroundColor: "rgba(100, 100, 100, 0.7)",
                        height: "60%",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10%",
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "3em",
                            color: "white",
                            padding: "1em",
                        }}
                    >
                        {title}
                    </h1>
                </div>
            </WideImage>
            <div
                className={"text-center md:ml-32 max-md:ml-2 md:mr-32 max-md:mr-2 mt-20 mb-20"}
            >
                <ContactForm/>
            </div>
        </Layout>
    )
}

export default Contact;
