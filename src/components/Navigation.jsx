import React from 'react'
import { Navbar, Button, Link, Text, Container, Row } from '@nextui-org/react'

// Static Imports
import logo from "../assets/logon2.png"

const Navigation = () => {

  const collapseItems = [
    "Features",
    "About",
    "Reviews",
    "Sign Up /Login"
  ];

  return (
      <Navbar css={{
        "background":"white"
      }}>
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Brand>
          <img src={logo} width="180px" height="180px" alt="Nutridiet"/>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">About Us</Navbar.Link>
          <Navbar.Link isActive href="#"> Customers </Navbar.Link>
          <Navbar.Link href="#">Review</Navbar.Link> 
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="#" hideIn="xs"> Login </Navbar.Link>
          <Navbar.Item hideIn="xs">
            <Button auto flat color="warning" as={Link} href="#"> Sign Up </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation