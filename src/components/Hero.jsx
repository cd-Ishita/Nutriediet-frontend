import React from 'react'
import { Container, Row, Grid, Col, Text, Button} from '@nextui-org/react'

import { useState, useEffect } from 'react';

const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Weight Loss", "Diabetes", "PCOS / PCOD", "Thyroid"]; 
    const [text, setText] = useState(' ');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 300;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      },delta)

      return () => { clearInterval(ticker); }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }

    return (
            <Row css={{
                "height": "450px",
                "display":"flex",
                "flexDirection":"column",
                "justifyContent":"center",
                "alignItems":"center",
                "backgroundImage":"url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-jane-doan-1132047.jpg&fm=jpg)",
                "backgroundRepeat":"no-repeat",
                "backgroundSize": "cover",
                "&::before": {
                    "content" : "",
                    "position": "absolute",
                    "top": "0px",
                    "right": "0px",
                    "bottom": "0px",
                    "left": "0px",
                    "backgroundColor": "rgba(0, 0, 0, 0.3)",
                }
            }}>
                <Row css={{
                    "display":"flex",
                    "flexDirection":"column",
                    "alignItems":"center",
                    "justifyContent":"center"
                }}>
                    <Text color="white" weight={"bold"} size={50} css={{"textAlign": "center"}}>
                        {text}
                    </Text>
                    <Text color="white" weight={"normal"} size={20}>NutrieDiet, Rediscover Yourself</Text>
                    <Button size="sm" shadow color="warning" css={{
                        "width": "20%",
                        "justifyContent": "center",
                        "marginTop": "20px"
                    }}>
                        Join Now!
                    </Button>
                </Row>
                
                
            </Row>
    )
}

export default Hero


{/* <Container>
             <Grid.Container justify='center' css={{
                "height": "700px",
                "width": "100%",
                "backgroundImage":"url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-jane-doan-1132047.jpg&fm=jpg)",
                "backgroundRepeat":"no-repeat",
                "backgroundSize": "cover",
            }}>
                <Grid xs={12} sm={6} alignItems="center">
                    <Col css={{
                        "display": "flex",
                        "width": "100%",
                        "alignItems": "center",
                        "flex-direction": "column",
                        "justifyContent": "center"
                    }}>
                        <Text color="white" weight={"bold"} size={70} css={{"textAlign": "center"}}>
                            {text}
                        </Text>
                        <Text color="white" weight={"normal"} size={30} css={{"textAlign": "center"}}>
                            Change your diet, Change your life!
                        </Text>
                        <Button size="md" shadow color="warning" css={{
                            "width": "20%",
                            "justifyContent": "center",
                            "marginTop": "20px"
                        }}>
                            Join Now!
                        </Button>
                    </Col>
                </Grid>
            </Grid.Container>
        </Container>  */}

