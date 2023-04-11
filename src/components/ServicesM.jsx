import React from 'react'
import { Grid, Card, Text } from '@nextui-org/react'
const ServicesM = () => {
  return (
    <>
        <Grid.Container gap={4} justify="center" css={{
            "backgroundColor": "orange",
        }}>
            <Grid xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "250px" }}
                    >
                    <Card.Body>
                        <Text>Weight loss</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Diabetes</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Hypertension</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>PCOS</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={2}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Weight gain</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Pediatric nutrition</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Other issues</Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={3}>
                <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px" }}
                    >
                    <Card.Body>
                        <Text>Online consultation</Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
        
    </>
  )
}

export default ServicesM