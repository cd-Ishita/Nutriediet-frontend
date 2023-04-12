import React from 'react'
import Contact from './Contact'
import { Container, Row, Col, Card, Text } from '@nextui-org/react'

const Services = () => {
  return (
    <Container display="flex" direction="column" justify="center" alignContent="center">
      <Text size={40} css={{
                "textAlign": "center",
                "margin": "20px"
            }}>
                Reviews By Our Customers
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

export default Services