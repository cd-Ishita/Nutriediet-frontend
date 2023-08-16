import React from 'react'
import { Navbar, Button, Link, Text, Container, Row, styled } from '@nextui-org/react'

// Static Imports
import logo from "../assets/logon2.png"

const Box = styled("div", {
    boxSizing: "border-box",
  });
  

const Layout = ({ children }) => (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      {children}
    </Box>
  );

const Navigation = () => {

  const collapseItems = [
    {
      name: "Features",
      link: "#"
    },
    {
      name: "About",
      link: "#"
    },
    {
      name: "Reviews",
      link: "#"
    },
    {
      name: "Login",
      link: "https://nutriediet.com/views/login.html"
    },
    {
      name: "Sign Up",
      link: "https://nutriediet.com/views/signup.html"
    }
  ];

  return (
    <Layout>
      <Navbar isBordered variant="floating" css={{
        "background":"white"
      }}>
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Brand>
          <img src={logo} width="180px" height="180px" alt="Nutridiet"/>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link css={{"textDecoration":"underline", "fontFamily": "Palatino"}} href="/">Home</Navbar.Link>
          <Navbar.Link css={{"textDecoration":"underline", "fontFamily": "Palatino"}} href="/progress"> Progress </Navbar.Link>
          <Navbar.Link css={{"textDecoration":"underline", "fontFamily": "Palatino"}} href="/review">Review</Navbar.Link> 
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="https://nutriediet.com/views/login.html" hideIn="xs"> Login </Navbar.Link>
          <Navbar.Item hideIn="xs">
            <Button auto flat color="warning" as={Link} href="https://nutriediet.com/views/signup.html"> Sign Up </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, i) => (
            <Navbar.CollapseItem
              key={item.name}
              activeColor="warning"
              css={{
                color: i === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={i === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.link}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      </Layout>
  )
}

export default Navigation