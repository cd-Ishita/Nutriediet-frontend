import React from 'react'
import { Grid, Card, Text } from '@nextui-org/react'
const ServicesM = () => {
  return (
    <>
        <Grid.Container gap={2} justify="center" css={{
            "backgroundImage": "linear-gradient(0deg, rgba(122,88,0,1) 0%, rgba(158,93,2,1) 100%);",
            "mt":"10px",
            "mb":"10px"
        }}>
            <Grid justify="center" xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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
                    css={{ mw: "400px", "backgroundColor": "orange" }}
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

export default ServicesM