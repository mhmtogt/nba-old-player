import React, { useState } from 'react'
import { Container, Form,Row, Col } from 'react-bootstrap'
import {data} from "../helpers/data";
import PlayerCard from './PlayerCard';

const CardContainer = () => {
    const [search,setSearch]=useState(" ")
    // console.log(search)
    // const showImage=true;// burası ekrana basılacak olan kartların true ise logo false ise detayları göstermek için alt componente 
    // const filteredData=data.filter(item=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))//includes(search)  item içerisinde yazılan name kontrol eder ve var mı yok mu ona bakra

  return (
    <>
    <Form.Control 
    placeholder= "search a player"
    className="w-50 m-auto " 
    onChange={(e)=>setSearch(e.target.value)}/> 

    <Container className='rounded-4 my-4 p-3 card-container '>
        <Row className="justify-content-center g-3">

          {data.filter((item)=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())).map((player,i)=>(
          <Col id={i}  xl={3} lg={4} md={6}>
          <PlayerCard {...player} />burada 3 nokta player "playere aç ve içindeki tüm bilgileri props olarak gönder demek "
         </Col>))}

        {/* {filteredData.map((player,i)=>(
            <Col id={i}  xl={3} lg={4} md={6}>
            <PlayerCard {...player} showImage={showImage}/>burada 3 nokta player "playere aç ve içindeki tüm bilgileri props olarak gönder demek "
           </Col>
        ))}
       {data.map((player,i)=>(
            <Col key={i} xl={3} lg={4} md={6}>
            <PlayerCard {...player} showImage={showImage}/>burada 3 nokta player "playere aç ve içindeki tüm bilgileri props olarak gönder demek "
           </Col>
        ))} */}
        </Row>
    </Container>
    </>
  )
}

export default CardContainer