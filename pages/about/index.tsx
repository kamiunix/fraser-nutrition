import Layout from "../../components/Layout";
import HeroImage from "../../components/Hero/HeroImage";
import WideImage from "../../components/WideImage/WideImage";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
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
                style={{
                    textAlign: "center",
                    fontSize: "1.5em",
                    paddingTop: "2em",
                    paddingLeft: "10em",
                    paddingRight: "10em",
                    paddingBottom: "2em",
                    backgroundColor: "#FCFCFC",
                }}
            >
                <SplitScreen
                    leftChildren={
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                textAlign: "center",
                                padding: "1em",

                            }}
                        >
                            <div>
                                <h2>
                                    Areas of Focus
                                </h2>
                                <p>
                                    Gastrointestinal Health, picky eating, family meal planning, plant-based diets, celiac disease and more.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Who I Work With
                                </h2>
                                <p>
                                    All ages, as nutrition is key at all stages of life.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Availability
                                </h2>
                                <p>
                                    Monday and Friday evenings (virtual appointments only)
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Interesting Facts About Me
                                </h2>
                                <p>
                                    I have qualified and run the Boston Marathon
                                </p>
                                <p>
                                    I used to live in Queenstown, New Zealand
                                </p>
                                <p>
                                    I often travel to mountainous regions of the world for climbing and mountaineering
                                </p>
                            </div>
                        </div>
                    }
                    rightChildren={
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                textAlign: "center",
                                padding: "1em",
                            }}
                        >
                            <p>
                                I’m Sandra Fraser, a Registered Dietitian (RD) from Halifax, Nova Scotia. I completed my BSc. in Applied Human Nutrition and Dietetics at Mount Saint Vincent University. I have worked with patients in a variety of settings such as hospital outpatients, private practice and long-term care.
                            </p>

                            <p>
                                My focus is a holistic, evidence-based approach where I use current research to guide you in reaching your optimal nutrition. I do not believe in one-size fits all nutrition recommendations and I will work with you to discover what path best meets your needs and long-term goals.
                            </p>

                            <p>
                                I have experience in gastrointestinal health issues (IBS, IBD), food intolerances and sensitivities, gerontology, diabetes, celiac disease, plant-based diets and much more.
                            </p>

                            <p>
                                I have taken additional courses that focus on counselling for behaviour change, as it is my belief that in order to change our health, we must first change our behaviours.
                            </p>

                            <p>
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