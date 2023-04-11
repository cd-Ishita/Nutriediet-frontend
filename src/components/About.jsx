import React from 'react'
import { Container, Row, Col, Text } from '@nextui-org/react'
const About = () => {
  return (
    <Container>
            <Row css={{
                "marginTop": "10px",
                "border":"10px solid white",
                "borderRadius":"20px",
                "position":"relative",
                "display": "flex",
                "alignItems":"center",
                "justifyContent":"center",
                "height": "300px",
                "width": "100%",
                "backgroundImage": "url(https://cms-b-assets.familysearch.org/dims4/default/4bcee33/2147483647/strip/true/crop/800x420+0+40/resize/1200x630!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fae%2Fa4%2Fc115b544646d3a16c57880a572ba%2Ffamily-portrait-no-smile.jpg)"
            }}>
                <Row css={{
                    "display": "flex",
                    "alignItems":"center",
                    "justifyContent":"center"
                }}>
                    <div style={{
                        "position":"absolute",
                        "display":"flex",
                        "left":"20%",
                        "height":"200px",
                        "width": "200px",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <Text size={30} color="white">
                            About Us
                        </Text>
                    </div>
                    <div style={{
                        "position":"absolute",
                        "right":"20%",
                        "display":"flex",
                        "height":"200px",
                        "width": "200px",
                        "background": "rgba(255, 255, 255, 1)",
                        "boxShadow": "0px 0px 40px",
                        "borderRadius":"100px",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <Text css={{
                            "color":"black",
                        }}>Get it today!</Text>
                    </div>
                    
                </Row>
            </Row>
    </Container>
  )
}

export default About

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