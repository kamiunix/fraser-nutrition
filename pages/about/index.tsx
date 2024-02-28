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
                                I’m <b>Sandra Fraser</b>, a Registered Dietitian (RD) from Halifax, Nova Scotia. I completed my BSc. in Applied Human Nutrition and Dietetics at Mount Saint Vincent University. I have worked with patients in a variety of settings such as hospital outpatients, private practice and long-term care.
                                <br/>
                                <br/>
                                <br/>
                                My focus is a holistic, evidence-based approach where I use current research to guide you in reaching your optimal nutrition. I do not believe in one-size fits all nutrition recommendations and I will work with you to discover what path best meets your needs and long-term goals.
                                <br/>
                                <br/>
                                <br/>
                                I have experience in gastrointestinal health issues (IBS, IBD), food intolerances and sensitivities, gerontology, diabetes, celiac disease, plant-based diets and much more.
                                <br/>
                                <br/>
                                <br/>
                                I have taken additional courses that focus on counselling for behaviour change, as it is my belief that in order to change our health, we must first change our behaviours.
                                <br/>
                                <br/>
                                <br/>
                                I’m a runner, hiker, climber and mountain lover. In my spare time you can find me in the mountains or outside picking up a new active hobby.
                            </p>
                        </div>
                    }
                />
            </div>
        </Layout>
    )
}

export default Team;