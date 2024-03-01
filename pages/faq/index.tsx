import Layout from "../../components/Layout/Layout";
import WideImage from "../../components/WideImage/WideImage";
import Collapsible from "../../components/common/Collapsible";
import {useEffect, useState} from "react";

const faqs = [
    {
        key: 1,
        question: "Are all sessions virtual?",
        answer: "Yes, all sessions are virtual. I use a secure video platform to meet with clients."
    },
    {
        key: 2,
        question: "What is the difference between a dietitian and a nutritionist?",
        answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
    },
    {
        key: 3,
        question: "What is the cost of a session?",
        answer: "The cost of an initial session is $135.00 and $95.00 for follow-ups."
    },
    {
        key: 4,
        question: "Do you direct bill insurance?",
        answer: "I do not direct bill insurance companies at this time, but I can provide you with a receipt to submit to your insurance company for reimbursement."
    },
    {
        key: 5,
        question: "How long is a session?",
        answer: "The initial session is 60 minutes and follow-up sessions are 45 minutes."
    },
    {
        key: 6,
        question: "What is your cancellation policy?",
        answer: "I require 24 hours notice for cancellations. If you cancel with less than 24 hours notice, you will be charged the full session fee."
    },
    {
        key: 7,
        question: "What is your availability?",
        answer: "I am available for virtual appointments on Tuesday and Thursday evenings."
    },
    {
        key: 8,
        question: "What provinces are you licensed to practice in?",
        answer: "I am licensed to practice in Alberta and British Colombia."
    }
]


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