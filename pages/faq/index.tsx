import Layout from "../../components/Layout/Layout";
import WideImage from "../../components/WideImage/WideImage";
import Collapsible from "../../components/common/Collapsible";
import {useEffect, useState} from "react";
import faqs from './faq.mock'

const Faq = () => {


    const [title, setTitle] = useState("Frequently Asked Questions");

    // change the title of the page to faq if page is too small
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setTitle("FAQ");
        } else {
            setTitle("Frequently Asked Questions");
        }
    }, []);




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
                className={"md:ml-32 max-md:ml-2 md:mr-32 max-md:mr-2 mt-20 mb-20"}
                style={{
                    textAlign: "center",
                    backgroundColor: "#FCFCFC",
                }}
            >
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto' // this will take the full height of the viewport
                }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={"p-4 max-md:w-full"}
                        >
                            <Collapsible
                                title={faq.question}
                            >
                                <p>{faq.answer}</p>
                            </Collapsible>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Faq;