import React from 'react'
import { Container, Form,Row, Col } from 'react-bootstrap'
import {data} from "../helpers/data";
import PlayerCard from './PlayerCard';

const CardContainer = () => {
    console.log(data)
  return (
    <div>
    <Form.Control 
    placeholder= "search a player"
    className="w-50 m-auto " />

    <Container className='rounded-4 my-4 p-3 card-container'>
        <Row className="justify-content-center g-3">
        {data.map((player,i)=>(
            <Col key={i} xl={3} lg={4} md={6}>
            <PlayerCard {...player}/>{/*burada 3 nokta player "playere aç ve içindeki tüm bilgileri props olarak gönder demek " */}
           </Col>
        ))}
        </Row>
    </Container>
    </div>
  )
}

export default CardContainer