import { Button, Container, Navbar, Text } from '@nextui-org/react'
import React from 'react'

const Test = () => {
    const collapseItems = [
        "Features",
        "Customers",
        "Pricing",
        "Company",
        "Login"
    ];

    return (
        <Container>
            <Navbar variant={"static"}>
                <Navbar.Toggle showIn="xs"/>
                <Navbar.Brand
                    css={{
                        "@xs": {
                        w: "12%",
                        },
                        }}   
                >
                    <Text b color="inherit">
                        NutriDiet
                    </Text>
                </Navbar.Brand>
                <Navbar.Content 
                    enableCursorHighlight
                    activeColor="warning"
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link href="#">Link A</Navbar.Link>
                    <Navbar.Link href="#">Link B</Navbar.Link>
                    <Navbar.Link href="#">Link C</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link>
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat href="#">Sign Up</Button>
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
    </Container>
  )
}

export default Test