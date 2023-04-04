import React from 'react'

import { Card, Container, Grid, Text, User, Link } from '@nextui-org/react'


const Review = () => {
  return (
        <Container css={{
            "marginBottom": "30px"
        }}>
            <Text size={40} css={{
                "textAlign": "center",
                "margin": "20px"
            }}>
                Reviews By Our Customers
            </Text>

            <Grid.Container gap={2}>
                <Grid xs={12} sm={4}>
                    <Card css={{ p: "$6" }}>
                        <Card.Header>
                            Avatar
                            <Grid.Container css={{ pl: "$6" }}>
                            <Grid xs={12}>
                                <Text h4 css={{ lineHeight: "$xs" }}>
                                Rithik Marudappa
                                </Text>
                            </Grid>
                            </Grid.Container>
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
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card css={{ p: "$6" }}>
                        <Card.Header>
                            Avatar
                            <Grid.Container css={{ pl: "$6" }}>
                            <Grid xs={12}>
                                <Text h4 css={{ lineHeight: "$xs" }}>
                                Rithik Marudappa
                                </Text>
                            </Grid>
                            </Grid.Container>
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
                </Grid>
                <Grid xs={12} sm={4}>
                    <Card css={{ p: "$6" }}>
                        <Card.Header>
                            Avatar
                            <Grid.Container css={{ pl: "$6" }}>
                            <Grid xs={12}>
                                <Text h4 css={{ lineHeight: "$xs" }}>
                                Rithik Marudappa
                                </Text>
                            </Grid>
                            </Grid.Container>
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
                </Grid>
            </Grid.Container>
        </Container>
  )
}

export default Review
