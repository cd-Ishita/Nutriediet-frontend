import React, { useState } from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Container, Card, Text, Image, Row, Button } from '@nextui-org/react'

// create [1,2,3,4,5] once
const starArray = [...Array(5).keys()].map(i => i + 1);

const Rating = ({ rating }) =>
  starArray.map(i => ( // use many times
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      color={rating >= i ? "orange" : "lightgrey"}
    />
  ));
  

const Review = () => {
  

  return (
    <Container fluid display="flex" direction="column" justify="center" alignContent="center" width="100%" css={{"background-image": "radial-gradient(circle, #c0de66 10%, #92de66 10%, white)", "width": "100%"}} >
      <Text size={55} css={{
                "textAlign": "center",
                "margin": "40px",
                "fontFamily": "My Soul, cursive"
            }}>
                Client Reviews
      </Text>
      <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
            
        }}>
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
                <a href="https://g.co/kgs/YLXtR2"><Button css={{ "background": "white"}} flat auto><Text h2 size={30}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Madhapur Clinic - Google Page</Text></Button></a>
                <Text h5 size={25}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Number of Reviews: 400+ </Text>
                <Text h5 size={25}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Rating: 4.9 </Text>
            </div>
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
                <a href="https://g.co/kgs/A75mNi"><Button css={{ "background": "white"}} flat auto><Text h2 size={30}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Secunderabad Clinic - Google Page</Text></Button></a>
                <Text h5 size={25}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Number of Reviews: 300+ </Text>
                <Text h5 size={25}  css={{ "textAlign": "center", "margin": "2px", "fontFamily": "Palatino"}}> Rating: 4.9 </Text>
            </div>
        </Row>
        <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
            
        }}>
            
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
        <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
            
            <article className="review">
            
            <h4 className="author">Mandavi Thapak</h4>
            <Rating rating="5" />
            <p className="info">I had been trying to loose weight ever since I was diagnosed with hypothyroid and PCOD in 2013. I had tried multiple exercise regimes and self planned diet over the years but nothing worked out for me.

I didn't go to any dietician before as I was afraid they might suggest some crash diet which might aggravate the medical issues even more.

I decided to go to Anitha mam when I started facing fertility issues. Within 4 months of starting with her plan and following a combination of cardio and strength training, I was able to go from 83 kgs to 68 kg. I was also able to conceive after weight loss and I am now a mother of a healthy baby girl..

I would highly recommend her if you want to loose weight in a healthy way.</p>
            <p>Check this review and more <a href="https://g.co/kgs/9gp6eP">here</a></p>
            </article>
        </Card.Body>
        </div>
        </Row>

        <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
        }}>   
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
        <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
            
            <article className="review">
            
            <h4 className="author">Shamla Prasad</h4>
            <Rating rating="5" />
            <p className="info">Wonderful person and team...would like to thank Ankitaji for my lifestyle change. I lost almost 4 kgs the first month..and could not continue my diet due to some family constraints...but the best thing is that I have not regained that 4kg back... iam able to maintain the same .Also, completely economical dietplan and no fancy, no additional supplements..the diet was completely planned with whatever regularly available at home...Maybe that's the reason I have not regained the lost weight...the best decision I had taken was joining her...Thank you Ankitaji and her team.</p>
            <p>Check this review and more <a href="https://g.co/kgs/EtYVRK">here</a></p>
            </article>
        </Card.Body>
        </div>
        </Row>

        <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
        }}>   
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
        <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
            
            <article className="review">
            
            <h4 className="author">Kadhiravan K</h4>
            <Rating rating="5" />
            <p className="info">Hi, I never thought weight loss by having tasty and wonderful food without starving was possible. Thanks to Dr.Ankita. She broke that myth on diet. My wife could drop 8 kg in 10 weeks and others in family also shed weight.
Diabetes level dropped from Hba1c 11.5 to 5.5 in 2 months.
Infact my wife wa bed ridden during this period due to leg fracture.
Without too much stress she could make nice lifestyle adaption to maintain weight.

Amazing truth is that the diet can be enjoyed as a family whether you are a non vegetarian or vegetarian.
If you have landed here while you are looking for weight loss through diet, then I think your search is over.

Just reach her.</p>
            <p>Check this review and more <a href="https://g.co/kgs/69LgQM">here</a></p>
            </article>
        </Card.Body>
        </div>
        </Row>

        <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
        }}>   
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
        <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
            
            <article className="review">
            
            <h4 className="author">Sowmya S</h4>
            <Rating rating="5" />
            <p className="info">I would like to thank you Swapna for planning a great diet for my father.

After taking diet from her and understood the importance of diet in bringing the diabetes in control and possibly of reversal. Just with 1.5months of diet, we had the following benefits

(1)Insulin dropped to only one time a day
(2)Good cholesterol has come within the range
(3) HBA1C has improved from 10 to 8.6 (only 1.5months of diet period)
(4) BP has come within control.

My heartfelt gratitude to Swapna.</p>
            <p>Check this review and more <a href="https://g.co/kgs/WX9UUK">here</a></p>
            </article>
        </Card.Body>
        </div>
        </Row>

        <Row css={{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-evenly",
        }}>   
            <div style={{
                "position":"relative",
                "marginRight":"30px"
            }}>
        <Card.Body css={{ m:"$2", display:"flex", "flexDirection":"row" }}>
            
            <article className="review">
            
            <h4 className="author">Pooja Bhatti</h4>
            <Rating rating="5" />
            <p className="info">Dr Ankita Gupta is one of the best dietitian.. I got proper guidance and excellent diet plan which helped me in gaining weight. When I met Dr. Ankita I was 41 kgs, not confident at all that I am going to gain the weight, but she was trying at her level best for my weight gain. She gave a Diet plan with physical activity that i followed every step what she suggested, and the results were awesome, I gained 6 kgs in two month.
I'm glad I met Dr. Ankita at the right time. Thank you mam for being the person you are.
Thanks a lot!</p>
            <p>Check this review and more <a href="https://g.co/kgs/CAxxgi">here</a></p>
            </article>
        </Card.Body>
        </div>
        </Row>
    </Container>
  );
};

export default Review;
