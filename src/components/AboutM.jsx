import React from 'react'

import { Container, Row, Col, Text } from '@nextui-org/react'

const AboutM = () => {
  return (
    <Container>
        <Row>   
            <div>
                <Text weight={"medium"} size={40}>Our Process</Text>
                <Text size={25}>Simple and healthy diets, no medication - no side-effects</Text>
            </div>
        </Row>
        <Row>
            <div>
                <Text size={18}>1-on-1 detailed consultation</Text>
                <Text size={18}>Nutritional assessment</Text>
                <Text size={18}>Blood report analysis</Text>
                <Text size={18}>Weekly diet plans</Text>
                <Text size={18}>Tasty and healthy recipes</Text>
                <Text size={18}>Focused exercise regimen</Text>
                <Text size={18}>Weekly follow-up and quick support</Text>
            </div>
        </Row>
    </Container>
  )
}

export default AboutM