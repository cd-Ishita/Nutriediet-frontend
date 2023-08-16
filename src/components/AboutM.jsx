import React, { useEffect } from 'react'
import { Container, Row, Col, Text, Image} from '@nextui-org/react'
import rutu from "../assets/rutu.jpeg"
import swapna from "../assets/Swapna.jpeg"
const AboutM = () => {
    let base = "https://nutriediet.com/uploads/";
    let images = ["aw-1.jpeg", "aw-2.jpg"];
    let secs = 5;

    useEffect(() => {
        backgroundSequence();
    }, [])

    function backgroundSequence() {
        window.clearTimeout();
        var k = 0;
        const Carousal = document.getElementById("picture");
        for (var i = 0; i < images.length; i++) {
            setTimeout(function(){ 
                Carousal.style.backgroundImage = "url(" + base + images[k] + ")";
            if ((k + 1) === images.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
        }
    }

    return (
        <Container>
                <Row id="picture" css={{
                    "marginTop": "10px",
                    "border":"10px solid white",
                    "borderRadius":"20px",
                    "position":"relative",
                    "display": "flex",
                    "alignItems":"center",
                    "justifyContent":"center",
                    "height": "600px",
                    "width": "100%",
                    "backgroundPosition": "70% 45%",
                    "backgroundSize": "cover",
                    "backgroundRepeat":"no-repeat",
                    "transition":"3s",
                    "&::before": {
                        "content" : "",
                        "position": "absolute",
                        "top": "0px",
                        "backgroundColor": "rgba(0, 0, 0, 0.5)",
                        "right": "0px",
                        "bottom": "0px",
                        "left": "0px",
                    }
                }}>
                    <Row css={{
                        "display": "flex",
                        "alignItems":"center",
                        "justifyContent":"space-around"
                    }}>
                        <div>
                            <img src="https://nutriediet.com/uploads/av-2.jpg" style={{
                                "height":"300px",
                                "width":"300px",
                                "borderRadius":"500px",
                                "border":"5px solid white"
                            }}></img>
                        </div> 
                        <div style={{
                            "width":"60%"
                        }}>
                            <Text size={65} color="white" css={{"fontFamily": "My Soul, cursive"}}>Ankita Gupta</Text>
                            <Text size={22} weight={"normal"} color="white" css={{"fontFamily": "Palatino"}}>Ankita Gupta is a renowned dietician in the Hyderabad and Telangana region with over 15 years of experience. She has a Masters degree in Food and Nutrition, and has won many awards and accolades. Testimonials from her thousands of happy clients is proof of her knowledge and dedication.</Text>
                        </div>
                    </Row>
                </Row>

                <br />
                <br />
                <Container>
                    <Row css={{
                        "display":"flex",
                        "alignItems":"center",
                        "justifyContent":"space-evenly",
                        "paddingTop": "60px",
                        "paddingBottom": "60px"
                    }}>   
                        <div style={{
                            "position":"relative",
                            "marginRight":"30px"
                        }}>
                            <img src={swapna} style={{
                                "height":"175px",
                                "width":"175px",
                                "borderRadius":"500px",
                                "border":"5px solid white"
                                }}></img>
                            <Text weight={"semibold"} size={40} css={{"fontFamily": "Palatino"}}>Swapna Phalsam</Text>
                            <Text weight={"normal"} size={18} css={{"fontFamily": "Palatino"}}>I am a Nutritionist specialising in Weightloss and Diabetes Management. I completed my Bachelors In Food Science and Nutrition and Masters in Dietary and Food service management, both from SNDT University Mumbai. </Text>
                        </div>
                        <div style={{
                            "position":"relative",
                            "display":"flex",
                            "alignItems":"center",
                            "justifyContent":"center",
                        }}>
                            <div style={{
                                "height": "250px",
                                "width":"2px",
                                "backgroundColor":"black",
                                "marginRight":"100px"
                            }}></div>
                            <div style={{
                                "maxWidth":"auto"
                            }}>
                                <img src={rutu} style={{
                                "height":"175px",
                                "width":"175px",
                                "borderRadius":"500px",
                                "border":"5px solid white"
                                }}></img>
                                <Text weight={"semibold"} size={40} css={{"fontFamily": "Palatino"}}>Rutu Savla</Text>
                                <Text weight={"normal"} size={18} css={{"fontFamily": "Palatino"}}>I have completed  my Bachelors In Food Science and Nutrition and  Masters in Clinical Nutrition and Dietetics, both from SNDT University Mumbai.I am a certified Diabetes Educator and have worked as Dietician in Mumbai's renowned hospital like Sir HN Reliance hospital and Kokilaben Dhirubhai Ambani hospital.</Text>
                            </div>
                        </div>
                    </Row>
                </Container>
        </Container>
  )
}

export default AboutM

{/* <div style={{
            "position":"absolute",
            "backgroundColor": "black",
            "height": "300px",
            "opacity": "70%",
            "width": "100%",
            "backgroundImage": "url(https://strategicpsychology.com.au/wp-content/uploads/happy-people-black-and-white-720x360.jpg)"
        }}></div> */}

{/* <div style={{
                        "position":"absolute",
                        "left":"-35%",
                        "display":"flex",
                        "height":"200px",
                        "width": "200px",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <Text size={30}>
                            About Us
                        </Text>
                    </div>
                    <div style={{
                        "position":"absolute",
                        "display":"flex",
                        "height":"200px",
                        "width": "200px",
                        "backgroundColor":"black",
                        "left":"25%",
                        "borderRadius":"100px",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <Text css={{
                            "color":"White",
                        }}>Get it today!</Text>
                    </div> */}