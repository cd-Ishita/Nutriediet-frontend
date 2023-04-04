import React from 'react'

import { Grid, Col, Text, Container, Card} from '@nextui-org/react'

const Hero = () => {
  return (
    <>
        <Card css={{
            "height": "700px",
            "backgroundImage":"url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-jane-doan-1132047.jpg&fm=jpg)",
            "backgroundRepeat":"no-repeat",
            "backgroundSize": "cover",
            "borderRadius":"0px",
            "filter":"blur(8px)"
        }}>
        </Card>
        <div style={{
                "color": "$accents3",
                "position":"absolute",
                "top":"50%",
                "left":"50%",
                "transform": "translate(-50%, -50%)",
                "zIndex":"2",
                "width": "80%",
                "textAlign": "center"
        }}>
            <Text color='white' size={70} weight="bold">Nutridiet</Text>
            <Text color='white' size={25} weight="normal">Change your diet, Change your life</Text>
        </div>
    </>
    
  )
}

export default Hero

{/* <Grid.Container justify='center' css={{
        "height": "700px",
        "backgroundImage":"url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-jane-doan-1132047.jpg&fm=jpg)",
        "backgroundRepeat":"no-repeat",
        "backgroundSize": "cover",
    }}>
        <Grid xs={12} sm={6} alignItems="center">
            <Col css={{"width": "100%"}}>
                <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>
                    NutriDiet
                </Text>
                <Text weight={"normal"} size={30} css={{"textAlign": "center"}}>
                    Change your diet, Change your life!
                </Text>
            </Col>
        </Grid>

    </Grid.Container> */}