import Layout from "../components/Layout/Layout";
import HeroImage from "../components/Hero/HeroImage";
import Services from "../components/Services/Services";
import Button from "../components/common/Button";
import React from "react";
import {BookNowButton} from "../components/common/EmailButton";

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
                className="flex flex-col items-center justify-center p-8"
            >
                <h1
                    className="text-4xl text-center font-bold text-gray-800 p-4"
                >
                    Therapeutic services in
                    <br/>a supportive environment
                </h1>
                <br/>
                {/*<BookNowButton*/}
                {/*    color={'teal'}*/}
                {/*    textColor={'white'}*/}
                {/*/>*/}
            </div>
            <div
                className={"pb-20 pt-20"}
            >
                <Services
                    title={'My Services'}
                />
            </div>
        </Layout>
    );
}

export default IndexPage;
