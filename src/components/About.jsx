import React from 'react'
import { Container, Row, Text, Image} from '@nextui-org/react'

const About = () => {

    var bgImageArray = ["aw-1.jpeg", "aw-2.jpg"];
    let base = "https://nutriediet.com/uploads/";
    let secs = 4;
    // bgImageArray.forEach(function(img){
    //     new Image().src = base + img; 
    // });

    function backgroundSequence() {
        window.clearTimeout();
        var k = 0;
        for (let i = 0; i < bgImageArray.length; i++) {
            setTimeout(function(){ 
                const div = document.getElementById('picture');
                div.style.background = "url(" + base + bgImageArray[k] + ")";
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
        }
    }

    backgroundSequence();

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
                    "backgroundImage": "url(https://nutriediet.com/uploads/aw-1.jpeg)",
                    "backgroundPosition": "70% 45%",
                    "backgroundSize": "cover",
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
                            <Text size={40} weight={"semibold"} color="white">Meet Ankita Gupta</Text>
                            <Text size={22} weight={"normal"} color="white">Ankita Gupta is a renowned dietician in the Hyderabad and Telangana region with over 15 years of experience. She has a Masters degree in Food and Nutrition, and has won many awards and accolades. Testimonials from her thousands of happy clients is proof of her knowledge and dedication.</Text>
                        </div>
                    </Row>
                </Row>
        </Container>
  )
}

export default About
