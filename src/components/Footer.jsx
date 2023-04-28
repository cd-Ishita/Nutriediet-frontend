import React from 'react'

import { Col, Container, Row, Text, Link} from '@nextui-org/react'

// Icons
import { HiOutlinePhone } from "react-icons/hi"
import { HiOutlineCalendar } from "react-icons/hi"
import { HiOutlineMail } from "react-icons/hi"
import { HiLocationMarker } from "react-icons/hi"
import { FaFacebookSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <Container fluid css={{
      "backgroundColor": "black",
      "padding":"5px"
    }}>
      <Row css={{
        "justifyContent":"center"
      }}>
        <Text b color="white">All Rights Belong to NutrieDiet</Text>
      </Row>
      <Row css={{
        "display":"flex",
        "alignItems":"center",
        "justifyContent":"center",
        "gap":"3%",
        "padding":"50px"
      }}>
        <div>
          <Text color="white" size={30} b css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><HiOutlineCalendar value={{ style: { verticalAlign: 'middle' } }}/>CONTACT US</Text>
          <Text color="white" css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><HiOutlinePhone value={{ style: { verticalAlign: 'middle' } }}/>+91 93914 50725</Text>
          <Link color="white" css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><HiOutlineMail value={{ style: { verticalAlign: 'middle' } }}/>nutriedietplan@gmail.com</Link>
        </div>
        <div style={{
          "height":"130px",
          "width": "2px",
          "backgroundColor": "white"
        }}>
        </div>
        <div>
          <Text color="white" size={25} b css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><HiLocationMarker value={{ style: { verticalAlign: 'middle' } }}/>OUR LOCATIONS</Text>
          <div style={{
            "width":"90%"
          }}>
            <Text color="white" size={20}>1. Nutrie Diet, Near Mayabazar Restaurant, Karkhana, Hyderabad - 500015</Text>
            <Text color="white" size={20}>2. Image Hospital, Kavuri Hills, Madhapur, Hyderabad - 500081</Text>
          </div>
        </div>
        <div style={{
          "height":"130px",
          "width": "2px",
          "backgroundColor": "white"
        }}>
        </div>
        <div>
          <Text size={25} weight={"semibold"} color="white">Reach Out To Us On : </Text>
          <Link size={20} weight={"semibold"} color="white" css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><FaFacebookSquare/>Facebook </Link>
          <Link size={20} weight={"semibold"} color="white" css={{"display":"flex", "alignItems":"center", "gap":"5px"}}><FaWhatsappSquare/>WhatsApp</Link>
        </div>
      </Row>
      <Row css={{
        "justifyContent":"center"
      }}>
        <Text color="white">Made with Love, By Rithik ♥</Text>
      </Row>
    </Container>
  )
}

export default Footer