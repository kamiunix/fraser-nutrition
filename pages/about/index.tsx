import Layout from "../../components/Layout/Layout";
import HeroImage from "../../components/Hero/HeroImage";
import WideImage from "../../components/WideImage/WideImage";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import styles from "./About.module.scss";
import Image from "next/image";

const Team = () => {
    return (
        <Layout>
            <WideImage
                background={'/assiniboine.jpg'}
            >
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
                        About Me
                    </h1>
                </div>
            </WideImage>
            <div
                className={styles.mainContent}
            >
                <SplitScreen
                    leftChildren={
                        <div
                            className={"flex flex-col text-center items-center"}
                        >
                            <div
                                className={"mt-5 mb-10 md:w-4/6"}
                            >
                                <h2
                                    className={"pb-5"}
                                    style={{
                                        color: "rgb(38,121,61)",
                                        fontSize: "1.3em",
                                    }}
                                >
                                    Areas of Focus
                                </h2>
                                <p
                                    style={{
                                        fontSize: ".8em",
                                    }}
                                >
                                    Gastrointestinal Health, picky eating, family meal planning, plant-based diets, celiac disease and more.
                                </p>
                            </div>

                            <div
                                className={"mt-5 mb-10 md:w-4/6"}
                            >
                                <h2
                                    className={"pb-5"}
                                    style={{
                                        color: "rgb(38,121,61)",
                                        fontSize: "1.3em",
                                    }}
                                >
                                    Who I Work With
                                </h2>
                                <p
                                    style={{
                                        fontSize: ".8em",
                                    }}
                                >
                                    All ages, as nutrition is key at all stages of life.
                                </p>
                            </div>

                            <div
                                className={"mt-5 mb-10 md:w-4/6"}
                            >
                                <h2
                                    className={"pb-5"}
                                    style={{
                                        color: "rgb(38,121,61)",
                                        fontSize: "1.3em",
                                    }}
                                >
                                    Availability
                                </h2>
                                <p
                                    style={{
                                        fontSize: ".8em",
                                    }}
                                >
                                    Monday and Friday evenings (virtual appointments only)
                                </p>
                            </div>

                            <div
                                className={"mt-5 mb-10 md:w-4/6"}
                            >
                                <h2
                                    className={"pb-5"}
                                    style={{
                                        color: "rgb(38,121,61)",
                                        fontSize: "1.3em",
                                    }}
                                >
                                    Interesting Facts About Me
                                </h2>
                                <p
                                    style={{
                                        fontSize: ".8em",
                                    }}
                                >
                                    I have qualified and run the Boston Marathon
                                    <br/>
                                    I used to live in Queenstown, New Zealand
                                    <br/>
                                    I often travel to mountainous regions of the world for climbing and mountaineering
                                </p>
                            </div>
                        </div>
                    }
                    rightChildren={
                        <div
                            className={"flex flex-col text-center items-center md:p-5 md:pl-20 md:pr-10"}
                        >
                            <p>
                                I’m <b>Sandra Fraser</b>, a Registered Dietitian (RD) originating from Halifax, Nova Scotia. I completed my BSc. in Applied Human Nutrition and Dietetics at Mount Saint Vincent University. My work has brought me from coast to coast where I have had the pleasure of meeting a large variety of people in outpatient settings, primary care, long term care and private practice.
                                <br/>
                                <br/>
                                <br/>
                                I have extended my services online to reach a wider audience who are seeking nutrition counselling.
                                <br/>
                                <br/>
                                <br/>
                                I work closely with clients using a holistic approach to health and wellness. Using current, evidence-based research, we can work together in creating a nutrition plan that works for you. I believe in creating realistic goals that fit your lifestyle using a step by step approach.
                                <br/>
                                <br/>
                                <br/>
                                I’m a strong believer that all foods fit. Small, simple changes can have big impacts with long-lasting effects.
                                <br/>
                                <br/>
                                <br/>
                                My experience ranges from gastrointestinal health issues (IBS, IBD), food intolerances and sensitivities, gerontology, diabetes (gestational, pre-diabetes, type 1, type 2), celiac disease, heart disease, plant-based diets, gerontology, basic sports nutrition, intuitive eating and much more.
                                <br/>
                                <br/>
                                <br/>
                                In my free time, you can find me trail running, hiking, rock or ice climbing.
                                <br/>
                                <br/>
                                <br/>
                                Reach out today and we can have a free 10 minute phone conversation to see if a dietitian consult is right for you.
                            </p>
                        </div>
                    }
                />
            </div>
        </Layout>
    )
}

export default Team;