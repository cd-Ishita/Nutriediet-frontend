import React from 'react'
import { Container, Card, Text, Image } from '@nextui-org/react'

import nishita_before from "../assets/Nishita_Before.png";
import nishita_after from "../assets/Nishita_After.png";
import ravi_before from "../assets/Ravi_before.png";
import ravi_after from "../assets/Ravi_after.png";
import sayantani_before from "../assets/Sayantani_before.png";
import sayantani_after from "../assets/Sayantani_after.png";
import sarita_before from "../assets/Sarita_before.png";
import sarita_after from "../assets/Sarita_after.png";
import bina_before from "../assets/Bina_before.png";
import bina_after from "../assets/Bina_after.png";
import priyanka_before from "../assets/Priyanaka_before.png"
import priyanka_after from "../assets/Priyanaka_after.png";

const user_data = [
  {
    "imageBefore": nishita_before,
    "imageAfter": nishita_after,
    "name": "Nishita Baderia",
    "title": "Weight Loss Plan",
    "before": "Before Weight - 70.7 kg",
    "after": "After Weight - 60.3 kg"
  },  

  {
    "imageBefore": ravi_before,
    "imageAfter": ravi_after,
    "name": "Ravi Mittal",
    "title": "Weight Loss Plan",
    "before": "Before Weight - 83 kg",
    "after": "After Weight - 64 kg"
  },

  {
    "imageBefore": sayantani_before,
    "imageAfter": sayantani_after,
    "name": "Sayantani Majumdar",
    "title": "Diabetes Management and Weight Loss Plan",
    "before": "Before Weight - 72 kg",
    "after": "After Weight - 58 kg",
    "extra": "HBA1c - 6.2 to 5 (normal values)"
  },

  {
    "imageBefore": sarita_before,
    "imageAfter": sarita_after,
    "name": "Sarita Satapathy",
    "title": "Weight Loss Plan",
    "before": "Before Weight - 77 kg",
    "after": "After Weight - 62 kg",
  },

  {
    "imageBefore": bina_before,
    "imageAfter": bina_after,
    "name": "Bina Singh",
    "title": "Weight Loss Plan",
    "before": "Before Weight - 84 kg",
    "after": "After Weight - 74 kg"
  },

  {
    "imageBefore": priyanka_before,
    "imageAfter": priyanka_after,
    "name": "Priyanka Surampadi",
    "title": "PCOD and Weight Loss Plan",
    "before": "Before Weight - 78 kg",
    "after": "After Weight - 62 kg"
  }
]


const Progress = () => {
  return (
    <Container fluid display="flex" direction="column" justify="center" alignContent="center" width="100%" css={{"background-image": "radial-gradient(circle, #c0de66 10%, #92de66 10%, white)", "width": "100%"}} >
      <Text size={55} css={{
                "textAlign": "center",
                "margin": "40px",
                "fontFamily": "My Soul, cursive"
            }}>
                Transformation Stories
      </Text>
      {user_data.map((item, key) => {     
        return ( <div style={{
          "display":"flex",
          "marginBottom":"20px"
        }}>
        
          <Card css={{ p: "$6" }} >
            <Card.Header css={{justifyContent:"center"}}>
              <Text h2 size={30}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> {item.name} </Text>
            </Card.Header>
            <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
              <div>
                <Image
                    src={item.imageBefore}
                    width={400}
                    height={400}
                />
                <p><Text css={{"fontFamily": "Palatino", "textAlign": "center"}} weight={'semibold'} size={20}>{item.before}</Text></p>

              </div>
              <div>
                <Image
                    src={item.imageAfter}
                    width={400}
                    height={400}
                />
                <p><Text css={{"fontFamily": "Palatino", "textAlign": "center"}} weight={'semibold'} size={20}>{item.after}</Text></p>
              </div>
              
          
            </Card.Body>
            
            <Card.Footer css={{ justifyContent:"center", textAlign:"center"}}>
              <Text>
                <p><Text css={{"fontFamily": "Palatino"}} size={20} >{item.title}</Text></p>
                
              </Text>
            </Card.Footer>
          </Card> 
        </div> )
      })}
    </Container>
  )
}

export default Progress

