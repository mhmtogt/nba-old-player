import React from "react";
import nbaLogo from "../assets/nba-logo.png"
import { Container, Image } from "react-bootstrap"; 


const Header=()=>{
    return(
        <Container>
           <Image src={nbaLogo} alt="NBA LOGO"></Image>
           <h1 className="my-2 ont-monospace display-4 fw-bold ">NBA Legends</h1>

        </Container>
    )
}



export default Header