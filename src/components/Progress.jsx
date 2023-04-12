import React from 'react'
import { Container, Card, Text, Image } from '@nextui-org/react'

import before from "../assets/before1.png";
import after from "../assets/after1.png";

const Progress = () => {
  return (
    <Container display="flex" direction="column" justify="center" alignContent="center">
      <Text size={40} css={{
                "textAlign": "center",
                "margin": "20px"
            }}>
                Customer Progress
      </Text>
      <div style={{
        "display":"flex",
        "marginLeft":"25%",
        "marginBottom":"20px"
      }}>
        <div style={{
          "height": "192px",
          "width": "2px",
          "backgroundColor": "black",
          "opacity":"70%",
          "marginRight":"28px",
          "boxShadow":"0px 0px 10px"
        }}></div>
          <Card css={{ p: "$6" }}>
            <Card.Header>
            </Card.Header>
            <Card.Body css={{ py: "$2", display:"flex", "flexDirection":"row" }}>
              <Image
                src={before}
                width={200}
                height={200}
              />
              <Image
                src={after}
                width={300}
                height={300}
              />

            </Card.Body>
            <Card.Footer>
              <Text>Wow Wonderful fatloss</Text>
            </Card.Footer>
          </Card> 
      </div>
      <div style={{
        "display":"flex",
        "marginRight":"25%",
        "marginBottom":"20px"
      }}>
        <Card css={{ p: "$6" }}>
            <Card.Header>
              Avatar
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Text>Star Rating</Text>
            </Card.Footer>
        </Card> 
        <div style={{
          "height": "192px",
          "width": "2px",
          "backgroundColor": "black",
          "opacity":"70%",
          "marginLeft":"28px",
          "boxShadow":"0px 0px 10px"
        }}></div>
      </div>
      <div style={{
        "display":"flex",
        "marginLeft":"25%",
        "marginBottom":"20px"
      }}>
        <div style={{
          "height": "192px",
          "width": "2px",
          "backgroundColor": "black",
          "opacity":"70%",
          "marginRight":"28px",
          "boxShadow":"0px 0px 10px"
        }}></div>
          <Card css={{ p: "$6" }}>
            <Card.Header>
              Avatar
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Text>Star Rating</Text>
            </Card.Footer>
          </Card> 
      </div>
      <div style={{
        "display":"flex",
        "marginRight":"25%",
        "marginBottom":"20px"
      }}>
        <Card css={{ p: "$6" }}>
            <Card.Header>
              Avatar
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Text>Star Rating</Text>
            </Card.Footer>
        </Card> 
        <div style={{
          "height": "192px",
          "width": "2px",
          "backgroundColor": "black",
          "opacity":"70%",
          "marginLeft":"28px",
          "boxShadow":"0px 0px 10px"
        }}></div>
      </div>
    </Container>
  )
}

export default Progress