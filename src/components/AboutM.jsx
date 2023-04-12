import React from 'react'

import { Container, Row, Col, Text } from '@nextui-org/react'

const AboutM = () => {
  return (
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
                <Text weight={"semibold"} size={40}>Our Process</Text>
                <Text weight={"normal"} size={25}>Simple and healthy diets, no medication - no side-effects</Text>
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
                    <Text size={22}>• 1-on-1 detailed consultation</Text>
                    <Text size={22}>• Nutritional assessment</Text>
                    <Text size={22}>• Blood report analysis</Text>
                    <Text size={22}>• Weekly diet plans</Text>
                    <Text size={22}>• Tasty and healthy recipes</Text>
                    <Text size={22}>• Focused exercise regimen</Text>
                    <Text size={22}>• Weekly follow-up and quick support</Text>
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default AboutM