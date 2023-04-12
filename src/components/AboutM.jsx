import React, { useEffect } from 'react'
import { Container, Row, Col, Text, Image} from '@nextui-org/react'

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
                            <Text size={40} weight={"semibold"} color="white">Ankita Gupta</Text>
                            <Text size={22} weight={"normal"} color="white">Ankita Gupta is a renowned dietician in the Hyderabad and Telangana region with over 15 years of experience. She has a Masters degree in Food and Nutrition, and has won many awards and accolades. Testimonials from her thousands of happy clients is proof of her knowledge and dedication.</Text>
                        </div>
                    </Row>
                </Row>
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