import { Container, Text, Input, Spacer } from '@nextui-org/react'
import React from 'react'

const Contact = () => {
  return (
    <Container css={{
        "backgroundColor": "$gray400",
        "borderRadius": "10px",
    }}>
        <Text size={30} align="center">Want to Hear More, Contact Us</Text>
        <Spacer y={2.5} />
        <Container>
            <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
            <Spacer y={2.5} />
            <Input
                clearable
                underlined
                labelPlaceholder="Name"
                initialValue="NextUI"
            />
            <Spacer y={1.5} />
            <Input clearable label="Name" placeholder="Name" initialValue="NextUI" />
        </Container>
    </Container>
  )
}

export default Contact