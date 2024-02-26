import Layout from "../../components/Layout";
import WideImage from "../../components/WideImage/WideImage";

const Services = () => {
    const faqs = [
        {
            key: 1,
            question: "What is the difference between a dietitian and a nutritionist?",
            answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
        },
        {
            key: 2,
            question: "What is the difference between a dietitian and a nutritionist?",
            answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
        },
        {
            key: 3,
            question: "What is the difference between a dietitian and a nutritionist?",
            answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
        },
        {
            key: 4,
            question: "What is the difference between a dietitian and a nutritionist?",
            answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
        },
        {
            key: 5,
            question: "What is the difference between a dietitian and a nutritionist?",
            answer: "Dietitians are regulated health professionals who have a degree in food and nutrition, have completed an internship, and have passed a national exam. Nutritionists are not regulated and do not require a degree in food and nutrition."
        },
    ]

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
                        Frequently Asked Questions
                    </h1>
                </div>
            </WideImage>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "1.5em",
                    padding: "2em",
                    backgroundColor: "#FCFCFC",
                }}
            >
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h2>{faq.question}</h2>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Services;