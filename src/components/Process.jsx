import React from 'react'
import "../index.css"
import { Container, Row, Text } from '@nextui-org/react'

const Process = () => {
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
                <Text h1 weight={"bold"} size={55} css={{"fontFamily": "My Soul, cursive", "fontWeight": "10", "fontStretch": "ultra-expanded"}}>Our Process</Text>
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
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• 1-on-1 detailed consultation</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Nutritional assessment</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Blood report analysis</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Weekly diet plans</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Tasty and healthy recipes</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Focused exercise regimen</Text>
                    <Text size={22} css={{"fontFamily": "Palatino"}}>• Weekly follow-up and quick support</Text>
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default Process