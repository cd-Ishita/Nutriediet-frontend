import React from 'react'
import { Grid, Card, Text } from '@nextui-org/react'
const Services = () => {
  return (
    <>
        <Grid.Container gap={2} justify="center" css={{
            "backgroundImage": "radial-gradient(square, #c0de66 90%, #92de66 10%, white);",
            "mt":"10px",
            "mb":"10px"
        }}>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Weight loss</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Diabetes</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Hypertension</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">PCOS</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Weight gain</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Pediatric nutrition</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Other issues</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid justify="center" xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "#c0de66" }}
                    >
                    <Card.Body>
                        <Text b size={18} align="center">Online consultation</Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
        
    </>
  )
}

export default Services