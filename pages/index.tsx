import Layout from "../components/Layout";
import HeroImage from "../components/Hero/HeroImage";
import Services from "../components/Services/Services";
import Button from "../components/common/Button";
import React from "react";

const IndexPage = () => {

    // onclick function to bring user to the about page
    const onClick = () => {
        window.location.href = '/about';
    }

    return (
        <Layout>
            <HeroImage
                background={'/assiniboine.jpg'}
                image={'/sandra.jpg'}
                title={'Hey! I\'m Sandra.'}
                description={'I help people struggling with health and wellness concerns make better life decisions about their holistic health.'}
                onclick={onClick}
            />
            <div
                style={{
                    textAlign: "center",
                    fontSize: "1.5em",
                    padding: "2em",
                    backgroundColor: "#FCFCFC",
                }}
            >
                <h1>
                    Therapeutic services in
                    <br/>a supportive environment
                </h1>
                <Button
                    size={'small'}
                    color={'teal'}
                >
                    Book Now
                </Button>
            </div>

            <Services
                title={'Our Services'}
            />
        </Layout>
    );
}

export default IndexPage;
